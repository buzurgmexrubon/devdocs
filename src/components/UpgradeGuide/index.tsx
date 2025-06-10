import React from "react"
import CodeBlock from "@theme/CodeBlock"
import Admonition from "@theme/Admonition"
import Link from "@docusaurus/Link"
import Translate from "@docusaurus/Translate"

export default function UpgradeGuide() {
  return (
    <>
      <Admonition type="info">
        <p>
          The following snippet shows how to update to the latest version of
          Docusaurus.
        </p>
      </Admonition>
      <CodeBlock language="json" title="package.json">
        {`{
  "dependencies": {
    "@docusaurus/core": "latest",
    "@docusaurus/preset-classic": "latest"
  }
}`}
        {/* {
  "dependencies": {
    "@docusaurus/core": "3.8.1",
    "@docusaurus/preset-classic": "3.8.1",
    // ...
  }
} */}
      </CodeBlock>
    </>
  )
}
