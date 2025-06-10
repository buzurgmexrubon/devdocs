import React, { isValidElement, useRef, useEffect } from "react"
import useBrokenLinks from "@docusaurus/useBrokenLinks"
import { useHistory } from "@docusaurus/router"
import styles from "./styles.module.css"

// ReactNode equivalent of HTMLElement#innerText
function getRowName(node) {
  let curNode = node
  while (isValidElement(curNode)) {
    ;[curNode] = React.Children.toArray(curNode.props.children)
  }
  if (typeof curNode !== "string") {
    throw new Error(
      `Could not extract APITable row name from JSX tree:\n${JSON.stringify(
        node,
        null,
        2
      )}`
    )
  }
  return curNode
}

function APITableRow({ name, children }, ref) {
  const entryName = getRowName(children)
  const id = name ? `${name}-${entryName}` : entryName
  const anchor = `#${id}`
  const history = useHistory()
  useBrokenLinks().collectAnchor(id)
  return (
    <tr
      id={id}
      tabIndex={0}
      ref={history.location.hash === anchor ? ref : undefined}
      onClick={(e) => {
        const isTDClick = e.target.tagName.toUpperCase() === "TD"
        const hasSelectedText = !!window.getSelection()?.toString()

        const shouldNavigate = isTDClick && !hasSelectedText
        if (shouldNavigate) {
          history.push(anchor)
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          history.push(anchor)
        }
      }}
    >
      {children.props.children}
    </tr>
  )
}

const APITableRowComp = React.forwardRef(APITableRow)

/*
 * Note: this is not a quite robust component since it makes a lot of
 * assumptions about how the children looks; however, those assumptions
 * should be generally correct in the MDX context.
 */
export default function APITable({ children, name }) {
  if (children.type !== "table") {
    throw new Error(
      "Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row."
    )
  }
  const [thead, tbody] = React.Children.toArray(children.props.children)
  const highlightedRow = useRef(null)
  useEffect(() => {
    highlightedRow.current?.focus()
  }, [highlightedRow])
  const rows = React.Children.map(tbody.props.children, (row) => (
    <APITableRowComp name={name} ref={highlightedRow}>
      {row}
    </APITableRowComp>
  ))

  return (
    <table className={styles.apiTable}>
      {thead}
      <tbody>{rows}</tbody>
    </table>
  )
}
