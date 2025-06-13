// plugins/docusaurus-plugin-ionic-component-api/index.js
const fetch = require("node-fetch")

module.exports = function (context, options) {
  // "options" parametrini qabul qilamiz
  return {
    name: "docusaurus-plugin-ionic-component-api",
    async loadContent() {
      // ⚠️ BU QATORLARNI O'CHIRAMIZ YOKI IZOHGA OLAMIZ:
      // const classicPreset = context.siteConfig.presets.find((preset) => preset[0] === '@docusaurus/preset-classic');
      // const docsPluginOptions = classicPreset[1].docs;

      const data = []
      // Endi joriy versiyani options.versions ichidan topamiz
      const currentVersionConfig =
        options.versions.find((v) => v.isCurrent) || options.versions[0] // Agar isCurrent bo'lmasa, birinchisini olamiz

      /**
       * Generates the markdown files for all components in a given version.
       * @param {*} versionObj The version object from options.versions, e.g.: { label: 'v8', path: 'v8', npmTag: 'latest', isCurrent: true }
       * @param {*} isCurrentVersion Whether or not this is the current version of the docs
       */
      const generateMarkdownForVersion = async (
        versionObj,
        isCurrentVersion
      ) => {
        let COMPONENT_LINK_REGEXP
        // console.log(`Fetching from: https://unpkg.com/@ionic/docs@${versionObj.npmTag}/core.json`); // Debug uchun
        const response = await fetch(
          `https://unpkg.com/@ionic/docs@${versionObj.npmTag}/core.json`
        )
        if (!response.ok) {
          console.error(
            `Failed to fetch Ionic docs for version ${versionObj.label} (${versionObj.npmTag}): ${response.statusText}`
          )
          return // Xato bo'lsa keyingisiga o'tamiz
        }
        const { components } = await response.json()

        const names = components.map((component) => component.tag.slice(4))
        // matches all relative markdown links to a component, e.g. (../button)
        COMPONENT_LINK_REGEXP = new RegExp(
          `\\(../(${names.join("|")})/?(#[^)]+)?\\)`,
          "g"
        )

        components.forEach((comp) => {
          const compTag = comp.tag.slice(4)
          // `getDirectoryPath` funksiyasi versiyani to'g'ri qabul qilishi kerak
          const outDir = getDirectoryPath(
            compTag,
            versionObj.path,
            isCurrentVersion
          )

          data.push({
            outDir,
            componentTag: compTag,
            version: versionObj.path, // Versiya yo'lini saqlaymiz
            props: renderProperties(comp),
            events: renderEvents(comp),
            methods: renderMethods(comp),
            parts: renderParts(comp),
            customProps: renderCustomProps(comp),
            slots: renderSlots(comp),
          })
        })
      }

      // options.versions ichidagi har bir versiya uchun generatsiya qilamiz
      for (const version of options.versions) {
        await generateMarkdownForVersion(version, version.isCurrent || false)
      }

      // Endi alohida currentVersion uchun fetch qilish shart emas, chunki u options.versions ichida bor
      // oldingi kodni olib tashlaymiz:
      // let npmTag = 'latest';
      // if (currentVersion.banner === 'unreleased') { ... }
      // await generateMarkdownForVersion(currentVersion.path || currentVersion.label, npmTag, true);

      return data
    },
    async contentLoaded({ content, actions }) {
      const { createData } = actions
      const promises = []

      for (const data of content) {
        // `data.version` endi biz optionsdan bergan `path` bo'ladi (e.g., 'v8')
        const basePath = `${data.version}/${data.componentTag}`

        promises.push(
          createData(`${basePath}/props.md`, data.props),
          createData(`${basePath}/events.md`, data.events),
          createData(`${basePath}/methods.md`, data.methods),
          createData(`${basePath}/parts.md`, data.parts),
          createData(`${basePath}/custom-props.mdx`, data.customProps),
          createData(`${basePath}/slots.md`, data.slots)
        )
      }

      await Promise.all(promises)
    },
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            // Alias yo'li ham o'zgarmaydi, chunki u .docusaurus ichidagi generatsiyaga bog'liq
            "@ionic-internal/component-api": `${context.siteDir}/.docusaurus/docusaurus-plugin-ionic-component-api/default`,
          },
        },
      }
    },
  }
}

// ... renderProperties, renderEvents, getDirectoryPath va boshqa yordamchi funksiyalar o'zgarishsiz qoladi
// getDirectoryPath funksiyasida `version` parametri to'g'ri `path` qiymatini qabul qilishini ta'minlang
function getDirectoryPath(componentTag, version, isCurrentVersion) {
  if (isCurrentVersion) {
    return `./docs/api/auto-generated/${componentTag}` // Bu yerda versiya yo'li ishlatiladi, masalan, /docs/api/auto-generated/button
  }
  return `./versioned_docs/version-${version}/api/auto-generated/${componentTag}`
}
/**
 * Formats line breaks in a multiline string to be displayed in a table.
 * @param {*} str The string to format
 * @returns The formatted string
 */
function formatMultiline(str) {
  return str.split("\n\n").join("<br /><br />").split("\n").join(" ")
}

function formatType(attr, type) {
  if (attr === "color") {
    /**
     * The `color` attribute has an additional type that we don't want to display.
     * The union type is used to allow intellisense to recommend the color names,
     * while still accepting any string value.
     */
    type = type.replace("string & Record<never, never>", "string")
  }
  return type.replace(/\|/g, "\uff5c")
}

function renderProperties({ props: properties }) {
  if (properties.length === 0) {
    return "No properties available for this component."
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return `
${properties
  .map((prop) => {
    const isDeprecated = prop.deprecation !== undefined

    const docs = isDeprecated
      ? `${prop.docs}\n_Deprecated_ ${prop.deprecation}`
      : prop.docs

    return `
### ${prop.name} ${isDeprecated ? "(deprecated)" : ""}

| | |
| --- | --- |
| **Description** | ${formatMultiline(docs)} |
| **Attribute** | \`${prop.attr}\` |
| **Type** | \`${formatType(prop.attr, prop.type)}\` |
| **Default** | \`${prop.default}\` |

`
  })
  .join("\n")}`
}

function renderEvents({ events }) {
  if (events.length === 0) {
    return "No events available for this component."
  }

  return `
| Name | Description | Bubbles |
| --- | --- | --- |
${events
  .map(
    (event) =>
      `| \`${event.event}\` | ${formatMultiline(event.docs)} | \`${
        event.bubbles
      }\` |`
  )
  .join("\n")}`
}

/**
 * Formats method parameters for the optional Parameters row of each method table
 * @param {*} paramsArr Array of method parameters
 * @returns formatted parameters for methods table
 */
function renderParameters(paramsArr) {
  if (!paramsArr.some((param) => param.docs)) {
    return ""
  }

  const documentedParams = paramsArr.filter((param) => param.docs)
  const formattedParams = documentedParams
    .map((param) => {
      return `**${param.name}**: ${formatMultiline(param.docs)}`
    })
    .join("<br/>")
  return `| **Parameters** | ${formattedParams} |`
}

function renderMethods({ methods }) {
  if (methods.length === 0) {
    return "No public methods available for this component."
  }

  // NOTE: replaces | with U+FF5C since MDX renders \| in tables incorrectly
  return `
${methods
  .map(
    (method) => `
### ${method.name}

| | |
| --- | --- |
| **Description** | ${formatMultiline(method.docs)} |
| **Signature** | \`${method.signature.replace(/\|/g, "\uff5c")}\` |
${method.parameters.length !== 0 ? renderParameters(method.parameters) : ""}
`
  )
  .join("\n")}

`
}

function renderParts({ parts }) {
  if (parts.length === 0) {
    return "No CSS shadow parts available for this component."
  }

  return `
| Name | Description |
| --- | --- |
${parts
  .map((prop) => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`)
  .join("\n")}

`
}

function renderCustomProps({ styles: customProps }) {
  const iosProps = customProps.filter((prop) => prop.mode === "ios")
  const mdProps = customProps.filter((prop) => prop.mode === "md")

  const renderTable = (props) => {
    if (props.length === 0) {
      return "No CSS custom properties available for this component."
    }

    return `
    | Name | Description |
  | --- | --- |
  ${props
    .map((prop) => `| \`${prop.name}\` | ${formatMultiline(prop.docs)} |`)
    .join("\n")}
  `
  }

  if (iosProps.length > 0 || mdProps.length > 0) {
    // If the component has mode-specific custom props, render them in tabs for iOS and MD
    return `
import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

\`\`\`\`mdx-code-block
<Tabs
  groupId="mode"
  defaultValue="ios"
  values={[
    { value: 'ios', label: 'iOS' },
    { value: 'md', label: 'MD' },
  ]
}>
<TabItem value="ios">

${renderTable(iosProps)}

</TabItem>

<TabItem value="md">

${renderTable(mdProps)}

</TabItem>
</Tabs>

\`\`\`\`

`
  }
  // Otherwise render the custom props without the tabs for iOS and MD
  return renderTable(customProps)
}

function renderSlots({ slots }) {
  if (slots.length === 0) {
    return "No slots available for this component."
  }

  return `
| Name | Description |
| --- | --- |
${slots
  .map((slot) => `| \`${slot.name}\` | ${formatMultiline(slot.docs)} |`)
  .join("\n")}

`
}
