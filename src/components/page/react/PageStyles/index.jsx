import clsx from "clsx"
import styles from "./index.module.css"

export default function PageStyles(props) {
  return <div {...props} className={clsx(styles.pageReact, props.className)} />
}
