import { themes } from "prism-react-renderer"

const baseTheme = themes.github

export default {
  ...baseTheme, // Include all properties from the base github theme (like plain object)
  styles: [
    ...baseTheme.styles, // Include all default styles from the base github theme
    {
      types: ["title"],
      style: {
        color: "#0550AE", // Color for titles
        fontWeight: "bold",
      },
    },
    {
      types: ["parameter"],
      style: {
        color: "#953800", // Color for parameters
      },
    },
    {
      types: ["boolean", "rule", "color", "number", "constant", "property"],
      style: {
        color: "#005CC5", // Color for booleans, rules, colors, numbers, constants, and properties
      },
    },
    {
      types: ["atrule", "tag"],
      style: {
        color: "#22863A", // Color for at-rules and HTML tags
      },
    },
    {
      types: ["script"],
      style: {
        color: "#24292E", // Color for script text
      },
    },
    {
      types: ["operator", "unit", "rule"], // Note: 'rule' appears twice, last one takes precedence
      style: {
        color: "#D73A49", // Color for operators, units, and rules
      },
    },
    {
      types: ["font-matter", "string", "attr-value"],
      style: {
        color: "#C6105F", // Color for font-matter, strings, and attribute values
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#116329", // Color for class names
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#0550AE", // Color for attribute names
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#CF222E", // Color for keywords
      },
    },
    {
      types: ["function"],
      style: {
        color: "#8250DF", // Color for function names
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#6F42C1", // Color for CSS selectors
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#E36209", // Color for variables
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#6B6B6B", // Color for comments
      },
    },
  ],
}
