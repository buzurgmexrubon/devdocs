import React, { useEffect, useRef } from "react"
import { useColorMode } from "@docusaurus/theme-common"

export default function GiscusComments() {
  const giscusContainer = useRef(null)
  const { colorMode } = useColorMode()

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", "buzurgmexrubon/devdocs")
    script.setAttribute("data-repo-id", "R_kgDOO5H96Q")
    script.setAttribute("data-category", "Announcements")
    script.setAttribute("data-category-id", "DIC_kwDOO5H96c4CrVUD")
    script.setAttribute("data-mapping", "title")
    script.setAttribute("data-strict", "1") // Precise title match
    script.setAttribute("data-reactions-enabled", "1")
    script.setAttribute("data-emit-metadata", "1")
    script.setAttribute("data-input-position", "top")
    script.setAttribute("data-theme", colorMode === "dark" ? "dark" : "light")
    script.setAttribute("data-lang", "uz")
    script.setAttribute("data-loading", "lazy")
    script.setAttribute("crossorigin", "anonymous")
    script.async = true

    const container = giscusContainer.current
    if (container) {
      container.innerHTML = "" // Clear existing if theme switched
      container.appendChild(script)
    }

    // Re-render when color mode changes
  }, [colorMode])

  return (
    <div
      ref={giscusContainer}
      id="giscus-comments"
      style={{ marginTop: "2rem" }}
    />
  )
}
