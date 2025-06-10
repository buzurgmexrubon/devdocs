import CodeBlock from "@theme/CodeBlock"
import Admonition from "@theme/Admonition"

export default function UpgradeGuide() {
  return (
    <>
      {/* Information admonition for the upgrade guide */}
      <Admonition type="info">
        <p>
          The following snippet shows how to update to the latest version of
          Docusaurus.
        </p>
      </Admonition>
      {/* Code block displaying the package.json dependencies for upgrading */}
      <CodeBlock language="json" title="package.json">
        {`{
  "dependencies": {
    "@docusaurus/core": "latest",
    "@docusaurus/preset-classic": "latest"
  }
}`}
      </CodeBlock>
    </>
  )
}
