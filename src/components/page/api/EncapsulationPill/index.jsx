import clsx from "clsx"

import useBaseUrl from "@docusaurus/useBaseUrl"
import Link from "@docusaurus/Link"

import styles from "./styles.module.css"

export default function EncapsulationPill(props) {
  const { type, ...rest } = props
  const toUrl = useBaseUrl(`reference/glossary#${type}`)

  return (
    <Link
      to={toUrl}
      {...rest}
      className={clsx(
        props.className,
        "encapsulation-pill",
        styles.encapsulationPill
      )}
    >
      {type}
    </Link>
  )
}
