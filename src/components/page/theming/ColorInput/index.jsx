import clsx from "clsx"
import InputWrapper from "../InputWrapper"

import { useColorMode } from "@docusaurus/theme-common"

import styles from "./index.module.css"

export default function ColorInput({ color, setColor, ...props }) {
  const { colorMode } = useColorMode()

  return (
    <div
      {...props}
      className={clsx(
        "color-input",
        styles.colorInput,
        props.className,
        styles[`colorInput${colorMode === "dark" ? "Dark" : "Light"}`]
      )}
      style={{ "--background-c": color }}
    >
      <div className={styles.colorPickerWrapper}>
        <input
          type="color"
          onChange={({ target }) => setColor(target.value)}
          value={color}
          className={styles.colorPicker}
        />
      </div>
      <InputWrapper>
        <input
          onChange={({ target }) => setColor(target.value)}
          value={color}
        />
      </InputWrapper>
    </div>
  )
}
