import clsx from "clsx"
import styles from "./styles.module.css"

export default function Svg(props) {
  const {
    svgClass,
    colorAttr,
    children,
    color = "inherit",
    size = "medium",
    viewBox = "0 0 24 24",
    ...rest
  } = props

  return (
    <svg
      viewBox={viewBox}
      color={colorAttr}
      aria-hidden // Indicates that the element and its children are not exposed to the accessibility API
      className={clsx(styles.svgIcon, styles[color], styles[size], svgClass)}
      {...rest} // Spread any other SVG attributes passed in props
    >
      {children}
    </svg>
  )
}
