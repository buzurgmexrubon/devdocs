import { useEffect, useState } from "react"
import clsx from "clsx"
import Color from "color"
import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"
import { useColorMode } from "@docusaurus/theme-common"
import CodeBlock from "@theme/CodeBlock"
import Admonition from "@theme/Admonition"
import {
  COLOR_SHADES,
  LIGHT_PRIMARY_COLOR,
  DARK_PRIMARY_COLOR,
  LIGHT_BACKGROUND_COLOR,
  DARK_BACKGROUND_COLOR,
  getAdjustedColors,
  lightStorage,
  darkStorage,
  updateDOMColors,
} from "@site/src/utils/colorUtils"
import styles from "./styles.module.css"

/**
 * Calculates the WCAG contrast ratio between two colors and returns a rating.
 * @param {string} foreground - The foreground color (hex, rgb, etc.).
 * @param {string} background - The background color (hex, rgb, etc.).
 * @returns {string} The WCAG contrast rating ("AAA 🏅", "AA 👍", or "Fail 🔴").
 */
function wcagContrast(foreground, background) {
  const contrast = Color(foreground).contrast(Color(background))
  // eslint-disable-next-line no-nested-ternary
  return contrast > 7 ? "AAA 🏅" : contrast > 4.5 ? "AA 👍" : "Fail 🔴"
}

/**
 * React component for a color generator.
 * Allows users to adjust primary and background colors and see generated shades and contrast ratings.
 * Also provides CSS variables output for Docusaurus.
 * @returns {JSX.Element} The ColorGenerator component.
 */
export default function ColorGenerator() {
  const { colorMode, setColorMode } = useColorMode()

  const isDarkTheme = colorMode === "dark"

  // Determine default colors based on the current theme mode
  const DEFAULT_PRIMARY_COLOR = isDarkTheme
    ? DARK_PRIMARY_COLOR
    : LIGHT_PRIMARY_COLOR
  const DEFAULT_BACKGROUND_COLOR = isDarkTheme
    ? DARK_BACKGROUND_COLOR
    : LIGHT_BACKGROUND_COLOR

  // State variables for input color, base color, background, shades, and storage mechanism
  const [inputColor, setInputColor] = useState(DEFAULT_PRIMARY_COLOR)
  const [baseColor, setBaseColor] = useState(DEFAULT_PRIMARY_COLOR)
  const [background, setBackground] = useState(DEFAULT_BACKGROUND_COLOR)
  const [shades, setShades] = useState(COLOR_SHADES)
  const [storage, setStorage] = useState(
    isDarkTheme ? darkStorage : lightStorage
  )

  // Effect to update storage based on theme mode changes
  useEffect(() => {
    setStorage(isDarkTheme ? darkStorage : lightStorage)
  }, [isDarkTheme])

  // Effect to update component state from stored values when theme mode or storage changes
  useEffect(() => {
    const storedValues = JSON.parse(storage.get() ?? "{}")
    setInputColor(storedValues.baseColor ?? DEFAULT_PRIMARY_COLOR)
    setBaseColor(storedValues.baseColor ?? DEFAULT_PRIMARY_COLOR)
    setBackground(storedValues.background ?? DEFAULT_BACKGROUND_COLOR)
    setShades(storedValues.shades ?? COLOR_SHADES)
  }, [storage, DEFAULT_BACKGROUND_COLOR, DEFAULT_PRIMARY_COLOR])

  // Effect to update DOM CSS variables and store current colors when state changes
  useEffect(() => {
    updateDOMColors({ baseColor, background, shades }, isDarkTheme)
    storage.set(JSON.stringify({ baseColor, background, shades }))
  }, [baseColor, background, shades, storage, isDarkTheme])

  /**
   * Handles changes to the primary color input field.
   * @param {Object} event - The change event from the input.
   */
  function updateColor(event) {
    // Prepend '#' if the input value doesn't start with it
    const colorValue = event.target.value.replace(/^(?=[^#])/, "#")
    setInputColor(colorValue)

    try {
      // Attempt to parse the color value and update baseColor if valid
      setBaseColor(Color(colorValue).hex())
    } catch {
      // Do nothing if the color is invalid to avoid breaking the UI
    }
  }

  return (
    <div>
      {/* Tip admonition for WCAG contrast */}
      <Admonition type="tip">
        <p>
          <Translate
            id="colorGenerator.tip.body"
            values={{
              wcagLink: (
                <Link href="https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">
                  <Translate id="colorGenerator.tip.body.wcagLink.label">
                    WCAG-AA contrast ratio
                  </Translate>
                </Link>
              ),
            }}
          >
            {
              "Aim for at least {wcagLink} for the primary color to ensure readability. Use the Docusaurus website itself to preview how your color palette would look like. You can use alternative palettes in dark mode because one color doesn't usually work in both light and dark mode."
            }
          </Translate>
        </p>
      </Admonition>
      {/* Primary Color and Mode Toggle Controls */}
      <p>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="primary_color">
          <strong className="margin-right--sm">
            <Translate id="colorGenerator.inputs.primary.label">
              Primary Color:
            </Translate>
          </strong>
        </label>{" "}
        <input
          id="primary_color"
          type="text"
          className={clsx(styles.input, "margin-right--sm")}
          value={inputColor}
          onChange={updateColor}
        />
        <input
          type="color"
          className={styles.colorInput}
          // value for type="color" must always be a valid color, so use baseColor
          value={baseColor}
          onChange={updateColor}
        />
        <button
          type="button"
          className="clean-btn button button--primary margin-left--md"
          onClick={() => setColorMode(isDarkTheme ? "light" : "dark")}
        >
          <Translate
            id="colorGenerator.inputs.modeToggle.label"
            values={{
              colorMode: isDarkTheme ? (
                <Translate id="colorGenerator.inputs.modeToggle.label.colorMode.light">
                  light
                </Translate>
              ) : (
                <Translate id="colorGenerator.inputs.modeToggle.label.colorMode.dark">
                  dark
                </Translate>
              ),
            }}
          >
            {"Edit {colorMode} mode"}
          </Translate>
        </button>
        <button
          type="button"
          className="clean-btn button button--secondary margin-left--md"
          onClick={() => {
            // Reset all colors and shades to their default values
            setInputColor(DEFAULT_PRIMARY_COLOR)
            setBaseColor(DEFAULT_PRIMARY_COLOR)
            setBackground(DEFAULT_BACKGROUND_COLOR)
            setShades(COLOR_SHADES)
          }}
        >
          <Translate id="colorGenerator.inputs.resetButton.label">
            Reset
          </Translate>
        </button>
      </p>
      {/* Background Color Control */}
      <p>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="background_color">
          <strong className="margin-right--sm">
            <Translate id="colorGenerator.inputs.background.label">
              Background:
            </Translate>
          </strong>
        </label>
        <input
          id="background_color"
          type="color"
          className={clsx(styles.colorInput, "margin-right--sm")}
          value={background}
          onChange={(e) => {
            setBackground(e.target.value)
          }}
        />
      </p>
      {/* Color Shades Table */}
      <div>
        <table className={styles.colorTable}>
          <thead>
            <tr>
              <th>
                <Translate id="colorGenerator.table.heading1">
                  CSS Variable Name
                </Translate>
              </th>
              <th>
                <Translate
                  id="colorGenerator.table.heading2"
                  description="This column is the color's representation in hex"
                >
                  Hex
                </Translate>
              </th>
              <th>
                <Translate
                  id="colorGenerator.table.heading3"
                  description="This column is the adjusted shades' adjustment values relative to the primary color"
                >
                  Adjustment
                </Translate>
              </th>
              <th>
                <Translate
                  id="colorGenerator.table.heading4"
                  description="This column is WCAG contrast rating: AAA, AA, Fail"
                >
                  Contrast Rating
                </Translate>
              </th>
            </tr>
          </thead>
          <tbody>
            {getAdjustedColors(shades, baseColor)
              .sort((a, b) => a.displayOrder - b.displayOrder)
              .map((value) => {
                const { variableName, adjustment, adjustmentInput, hex } = value
                return (
                  <tr key={variableName}>
                    <td>
                      <code>{variableName}</code>
                    </td>
                    <td>
                      <span
                        className={styles.color}
                        style={{
                          backgroundColor: hex,
                        }}
                      />
                      <code className="margin-left--sm">
                        {hex.toLowerCase()}
                      </code>
                    </td>
                    <td>
                      {variableName === "--ifm-color-primary" ? (
                        0
                      ) : (
                        <input
                          aria-label={`${variableName} CSS variable name`}
                          className={styles.input}
                          type="number"
                          value={adjustmentInput}
                          onChange={(event) => {
                            const newValue = parseFloat(event.target.value)
                            setShades({
                              ...shades,
                              [variableName]: {
                                ...shades[variableName],
                                adjustmentInput: event.target.value,
                                adjustment: Number.isNaN(newValue)
                                  ? adjustment
                                  : newValue / 100.0,
                              },
                            })
                          }}
                        />
                      )}
                    </td>
                    <td
                      style={{
                        fontSize: "medium",
                        backgroundColor: background,
                        color: hex,
                      }}
                    >
                      <b>{wcagContrast(hex, background)}</b>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      {/* Instructions and CSS Code Block */}
      <p>
        <Translate
          id="colorGenerator.text"
          // eslint-disable-next-line @docusaurus/no-untranslated-text
          values={{ cssPath: <code>src/css/custom.css</code> }}
        >
          {"Replace the variables in {cssPath} with these new variables."}
        </Translate>
      </p>
      <CodeBlock className="language-css" title="/src/css/custom.css">
        {`${isDarkTheme ? "[data-theme='dark']" : ":root"} {
${getAdjustedColors(shades, baseColor)
  .sort((a, b) => a.codeOrder - b.codeOrder)
  .map((value) => `  ${value.variableName}: ${value.hex.toLowerCase()};`)
  .join("\n")}${
          background !== DEFAULT_BACKGROUND_COLOR
            ? `\n  --ifm-background-color: ${background};`
            : ""
        }
}`}
      </CodeBlock>
    </div>
  )
}
