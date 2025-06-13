import clsx from "clsx"

import styles from "./index.module.css"

function CodeColor({ color, ...props }) {
  return (
    <span className={clsx(styles.codeColor, props.className, "code-color")}>
      <span
        className={styles.codeColorBlock}
        style={{
          backgroundColor: color,
          ...props.style,
        }}
      />
      {props.children && (
        <code className={styles.codeColorValue}>{props.children}</code>
      )}
    </span>
  )
}

export default CodeColor
