import clsx from "clsx"
import { useColorMode } from "@docusaurus/theme-common"

import styles from "./index.module.css"

export default function ColorDot(props) {
  const { colorMode } = useColorMode()
  const { color, className, ...rest } = props

  return (
    <div
      style={{ backgroundColor: color }}
      className={clsx(
        className,
        "color-dot",
        styles.colorDot,
        styles[`colorDot${colorMode === "dark" ? "Dark" : "Light"}`]
      )}
      {...rest}
    />
  )
}
