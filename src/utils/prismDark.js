import { themes } from "prism-react-renderer"

const baseTheme = themes.vsDark

export default {
  plain: {
    color: "#D4D4D4", // Default text color
    backgroundColor: "#212121", // Default background color for code blocks
  },
  styles: [
    ...baseTheme.styles, // Include all styles from the base vsDark theme
    {
      types: ["title"],
      style: {
        color: "#569CD6", // Color for titles
        fontWeight: "bold",
      },
    },
    {
      types: ["property", "parameter"],
      style: {
        color: "#9CDCFE", // Color for properties and parameters
      },
    },
    {
      types: ["script"],
      style: {
        color: "#D4D4D4", // Color for script text
      },
    },
    {
      types: ["boolean", "arrow", "atrule", "tag"],
      style: {
        color: "#569CD6", // Color for booleans, arrow functions, at-rules, and HTML tags
      },
    },
    {
      types: ["number", "color", "unit"],
      style: {
        color: "#B5CEA8", // Color for numbers, color values, and CSS units
      },
    },
    {
      types: ["font-matter"],
      style: {
        color: "#CE9178", // Custom color for font-matter (often used in frontmatter of markdown)
      },
    },
    {
      types: ["keyword", "rule"],
      style: {
        color: "#C586C0", // Color for keywords and CSS rules
      },
    },
    {
      types: ["regex"],
      style: {
        color: "#D16969", // Color for regular expressions
      },
    },
    {
      types: ["maybe-class-name"],
      style: {
        color: "#4EC9B0", // Color for potential class names
      },
    },
    {
      types: ["constant"],
      style: {
        color: "#4FC1FF", // Color for constants
      },
    },
  ],
}
