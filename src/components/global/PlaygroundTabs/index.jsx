import React, {
  useState,
  cloneElement,
  isValidElement,
  useEffect,
  createRef,
} from "react"

import useIsBrowser from "@docusaurus/useIsBrowser"
import { duplicates } from "@docusaurus/theme-common"
import { useScrollPositionBlocker } from "@docusaurus/theme-common/internal"

import clsx from "clsx"
import styles from "./styles.module.css"

function isTabItem(comp) {
  return typeof comp.props.value !== "undefined"
}

function TabsComponent(props) {
  const {
    lazy,
    block,
    defaultValue: defaultValueProp,
    values: valuesProp,
    groupId,
    className,
  } = props
  const [leftNavVisible, setLeftNavVisible] = useState(false)
  const [rightNavVisible, setRightNavVisible] = useState(false)
  const tabsNavEl = createRef()
  const children = React.Children.map(props.children, (child) => {
    if (isValidElement(child) && isTabItem(child)) {
      return child
    }
    throw new Error(
      `Docusaurus error: Bad <Tabs> child <${
        typeof child.type === "string" ? child.type : child.type.name
      }>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`
    )
  })

  const values =
    valuesProp ??
    children.map(({ props: { value, label, icon, attributes } }) => ({
      value,
      label,
      attributes,
      icon,
    }))

  const dup = duplicates(values, (a, b) => a.value === b.value)
  if (dup.length > 0) {
    throw new Error(
      `Docusaurus error: Duplicate values "${dup
        .map((a) => a.value)
        .join(", ")}" found in <Tabs>. Every value needs to be unique.`
    )
  }

  const defaultValue =
    defaultValueProp === null
      ? defaultValueProp
      : defaultValueProp ??
        children.find((child) => child.props.default)?.props.value ??
        children[0]?.props.value

  if (defaultValue !== null && !values.some((a) => a.value === defaultValue)) {
    throw new Error(
      `Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${values
        .map((a) => a.value)
        .join(
          ", "
        )}. If you intend to show no default tab, use defaultValue={null} instead.`
    )
  }

  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const tabRefs = []
  const { blockElementScrollPositionUntilNextRender } =
    useScrollPositionBlocker()

  const handleTabChange = (event) => {
    const newTab = event.currentTarget
    const newTabIndex = tabRefs.indexOf(newTab)
    const newTabValue = values[newTabIndex].value

    if (newTabValue !== selectedValue) {
      blockElementScrollPositionUntilNextRender(newTab)
      setSelectedValue(newTabValue)
    }
  }

  const handleKeydown = (event) => {
    let focusElement = null

    switch (event.key) {
      case "ArrowRight": {
        const nextTab = tabRefs.indexOf(event.currentTarget) + 1
        focusElement = tabRefs[nextTab] || tabRefs[0]
        break
      }
      case "ArrowLeft": {
        const prevTab = tabRefs.indexOf(event.currentTarget) - 1
        focusElement = tabRefs[prevTab] || tabRefs[tabRefs.length - 1]
        break
      }
      default:
        break
    }

    focusElement?.focus()
  }

  useEffect(() => {
    setLeftNavVisible(tabsNavEl.current?.scrollLeft > 40)
    setRightNavVisible(
      tabsNavEl.current?.scrollWidth > tabsNavEl.current?.offsetWidth
    )
  }, [groupId])

  const useFallback =
    values.find((item) => item.value === selectedValue) === undefined
  const isTabSelected = (value) =>
    useFallback ? value === values[0].value : value === selectedValue

  return (
    <div className={clsx("tabs-container", styles.tabList)}>
      <div className={clsx("tabs-nav", styles.tabNav)}>
        <ul
          ref={tabsNavEl}
          role="tablist"
          aria-orientation="horizontal"
          className={clsx("tabs", { "tabs--block": block }, className)}
          onScroll={() => {
            setLeftNavVisible(tabsNavEl.current?.scrollLeft > 40)
            setRightNavVisible(
              tabsNavEl.current?.scrollWidth > tabsNavEl.current?.offsetWidth
            )
          }}
        >
          {leftNavVisible && (
            <div
              className={clsx(
                "tabs__nav-item",
                styles.tabNavItem,
                styles.tabNavItemLeft
              )}
            >
              <button
                className={clsx("tabs__nav-button", styles.tabNavButton)}
                onClick={() => {
                  tabsNavEl.current.scrollTo({
                    left: tabsNavEl.current.scrollLeft - 150,
                    behavior: "smooth",
                  })
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <polyline
                    points="328 112 184 256 328 400"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48px"
                  />
                </svg>
              </button>
            </div>
          )}
          {values.map(({ value, label, icon, attributes }) => {
            const isSelected = isTabSelected(value)
            return (
              <li
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                aria-selected={isSelected}
                key={value}
                ref={(tabControl) => tabRefs.push(tabControl)}
                onKeyDown={handleKeydown}
                onFocus={handleTabChange}
                onClick={handleTabChange}
                {...attributes}
                className={clsx(
                  "tabs__item",
                  styles.tabItem,
                  attributes?.className,
                  { "tabs__item--active": isSelected }
                )}
              >
                {icon && (
                  <span className={clsx("tabs__icon", styles.tabIcon)}>
                    {icon}
                  </span>
                )}
                {label ?? value}
              </li>
            )
          })}
          {rightNavVisible && (
            <div className={clsx("tabs__nav-item", styles.tabNavItem)}>
              <button
                className={clsx("tabs__nav-button", styles.tabNavButton)}
                onClick={() => {
                  tabsNavEl.current.scrollTo({
                    left: tabsNavEl.current.scrollLeft + 150,
                    behavior: "smooth",
                  })
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <polyline
                    points="184 112 328 256 184 400"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48px"
                  />
                </svg>
              </button>
            </div>
          )}
        </ul>
      </div>

      {lazy ? (
        cloneElement(
          children.filter((tabItem) => isTabSelected(tabItem.props.value))[0],
          {
            className: "margin-top--md",
          }
        )
      ) : (
        <div className="margin-top--md">
          {children.map((tabItem, i) =>
            cloneElement(tabItem, {
              key: i,
              className: `${tabItem.props.className} ${
                !isTabSelected(tabItem.props.value) ? "hidden" : ""
              }`,
            })
          )}
        </div>
      )}
    </div>
  )
}

export default function PlaygroundTabs(props) {
  const isBrowser = useIsBrowser()
  return <TabsComponent key={String(isBrowser)} {...props} />
}
