import React, { useEffect, useState } from "react"
import CodeColor from "../CodeColor"
import ColorDot from "../ColorDot"
import ColorInput from "../ColorInput"
import { Color } from "../_utils/color"
import { generateSteppedColors } from "../_utils/index"
import clsx from "clsx"
import styles from "./index.module.css"

export default function ColorGenerator(props) {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [textColor, setTextColor] = useState("#000000")

  const [textSteppedColors, setTextSteppedColors] = useState(
    generateSteppedColors(textColor, backgroundColor)
  )
  const [backgroundSteppedColors, setBackgroundSteppedColors] = useState(
    generateSteppedColors(backgroundColor, textColor)
  )

  useEffect(() => {
    setTextSteppedColors(generateSteppedColors(textColor, backgroundColor))
    setBackgroundSteppedColors(
      generateSteppedColors(backgroundColor, textColor)
    )
  }, [backgroundColor, textColor])

  return (
    <div className={clsx(props.className, "stepped-color-generator")}>
      <div className={clsx(styles.inputRows)}>
        <ColorDot color={backgroundColor} />
        <h3>Background</h3>
        <ColorInput color={backgroundColor} setColor={setBackgroundColor} />
        <ColorDot color={textColor} />
        <h3>Text</h3>
        <ColorInput color={textColor} setColor={setTextColor} />
      </div>
      <pre className={clsx(styles.codePre)}>
        <code>
          :root {"{"}
          {"\n"}
          {"\t"}--ion-background-color:{" "}
          <CodeColor color={backgroundColor}>{backgroundColor}</CodeColor>;
          {"\n"}
          {"\t"}--ion-background-color-rgb:{" "}
          <CodeColor color={backgroundColor}>
            {new Color(backgroundColor).toList()}
          </CodeColor>
          ;{"\n"}
          {"\n"}
          {"\t"}--ion-text-color:{" "}
          <CodeColor color={textColor}>{textColor}</CodeColor>;{"\n"}
          {"\t"}--ion-text-color-rgb:{" "}
          <CodeColor color={textColor}>
            {new Color(textColor).toList()}
          </CodeColor>
          ;{"\n"}
          {"\n"}
          {props.useTextAndBackgroundStepColors
            ? renderSeparateTextAndBackgroundColors(
                textSteppedColors,
                backgroundSteppedColors
              )
            : renderCombinedColors(backgroundSteppedColors)}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </div>
  )
}

const renderSeparateTextAndBackgroundColors = (
  textSteppedColors,
  backgroundSteppedColors
) => {
  return (
    <>
      {textSteppedColors.map((color, i) => (
        <React.Fragment key={`text-${i}`}>
          {"\t"}--ion-text-color-step-{(i + 1) * 50}:{" "}
          <CodeColor color={color}>{color}</CodeColor>;{"\n"}
        </React.Fragment>
      ))}
      {"\n"}
      {backgroundSteppedColors.map((color, i) => (
        <React.Fragment key={`bg-${i}`}>
          {"\t"}--ion-background-color-step-{(i + 1) * 50}:{" "}
          <CodeColor color={color}>{color}</CodeColor>;{"\n"}
        </React.Fragment>
      ))}
    </>
  )
}

const renderCombinedColors = (steppedColors) => {
  return (
    <>
      {steppedColors.map((color, i) => (
        <React.Fragment key={`combined-${i}`}>
          {"\t"}--ion-color-step-{(i + 1) * 50}:{" "}
          <CodeColor color={color}>{color}</CodeColor>;{"\n"}
        </React.Fragment>
      ))}
    </>
  )
}
