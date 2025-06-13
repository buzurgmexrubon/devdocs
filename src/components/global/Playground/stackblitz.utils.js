import sdk from "@stackblitz/sdk"

const DEFAULT_EDITOR_TITLE = "Ionic Docs Example"
const DEFAULT_EDITOR_DESCRIPTION = ""

const loadSourceFiles = async (files, version) => {
  const versionDir = `v${version}`
  const sourceFiles = await Promise.all(
    files.map((f) => fetch(`/docs/code/stackblitz/${versionDir}/${f}`))
  )
  return await Promise.all(sourceFiles.map((res) => res.text()))
}

const openHtmlEditor = async (code, options) => {
  const defaultFiles = await loadSourceFiles(
    [
      "html/index.ts",
      options && options.includeIonContent
        ? "html/index.withContent.html"
        : "html/index.html",
      "html/variables.css",
      "html/package.json",
    ],
    options.version
  )

  const indexHtml = "index.html"
  const files = {
    "index.ts": defaultFiles[0],
    [indexHtml]: defaultFiles[1],
    "theme/variables.css": defaultFiles[2],
    ...(options && options.files),
  }

  const package_json = defaultFiles[3]

  files[indexHtml] = defaultFiles[1].replace(/{{ TEMPLATE }}/g, code).replace(
    "</head>",
    `
  <script>
    window.Ionic = {
      config: {
        mode: '${options && options.mode}'
      }
    }
  </script>
</head>
`
  )

  let dependencies = {}
  try {
    dependencies = {
      ...dependencies,
      ...JSON.parse(package_json).dependencies,
      ...(options && options.dependencies),
    }
  } catch (e) {
    console.error("Failed to parse package.json contents", e)
  }

  sdk.openProject({
    template: "typescript",
    title: (options && options.title) || DEFAULT_EDITOR_TITLE,
    description: (options && options.description) || DEFAULT_EDITOR_DESCRIPTION,
    files,
    dependencies,
  })
}

const openAngularEditor = async (code, options) => {
  const defaultFiles = await loadSourceFiles(
    [
      "angular/package.json",
      "angular/angular.json",
      "angular/tsconfig.json",
      "angular/tsconfig.app.json",
      "angular/main.ts",
      "angular/index.html",
      "angular/app.routes.ts",
      options && options.includeIonContent
        ? "angular/app.component.withContent.ts"
        : "angular/app.component.ts",
      "angular/app.component.css",
      options && options.includeIonContent
        ? "angular/app.component.withContent.html"
        : "angular/app.component.html",
      "angular/example.component.ts",
      "angular/styles.css",
      "angular/global.css",
      "angular/variables.css",
    ],
    options.version
  )

  const package_json = JSON.parse(defaultFiles[0])

  if (options && options.dependencies) {
    package_json.dependencies = {
      ...package_json.dependencies,
      ...options.dependencies,
    }
  }

  const main = "src/main.ts"
  const files = {
    "package.json": JSON.stringify(package_json, null, 2),
    "angular.json": defaultFiles[1],
    "tsconfig.json": defaultFiles[2],
    "tsconfig.app.json": defaultFiles[3],
    [main]: defaultFiles[4],
    "src/index.html": defaultFiles[5],
    "src/polyfills.ts": `import 'zone.js';`,
    "src/app/app.routes.ts": defaultFiles[6],
    "src/app/app.component.ts": defaultFiles[7],
    "src/app/app.component.css": defaultFiles[8],
    "src/app/app.component.html": defaultFiles[9],
    "src/app/example.component.ts": defaultFiles[10],
    "src/app/example.component.html": code,
    "src/app/example.component.css": "",
    "src/styles.css": defaultFiles[11],
    "src/global.css": defaultFiles[12],
    "src/theme/variables.css": defaultFiles[13],
    ...(options && options.files),
  }

  files[main] = files[main].replace(
    "provideIonicAngular()",
    `provideIonicAngular({ mode: '${options && options.mode}' })`
  )

  sdk.openProject({
    template: "node",
    title: (options && options.title) || DEFAULT_EDITOR_TITLE,
    description: (options && options.description) || DEFAULT_EDITOR_DESCRIPTION,
    files,
  })
}

const openReactEditor = async (code, options) => {
  const defaultFiles = await loadSourceFiles(
    [
      "react/index.tsx",
      options && options.includeIonContent
        ? "react/app.withContent.tsx"
        : "react/app.tsx",
      "react/variables.css",
      "react/tsconfig.json",
      "react/package.json",
      "react/package-lock.json",
      "react/index.html",
      "react/vite.config.js",
      "react/browserslistrc",
      "react/eslintrc.js",
    ],
    options.version
  )

  const package_json = JSON.parse(defaultFiles[4])

  if (options && options.dependencies) {
    package_json.dependencies = {
      ...package_json.dependencies,
      ...options.dependencies,
    }
  }

  const appTsx = "src/App.tsx"
  const files = {
    ".eslintrc.js": defaultFiles[9],
    ".browserslistrc": defaultFiles[8],
    "vite.config.js": defaultFiles[7],
    "index.html": defaultFiles[6],
    "src/index.tsx": defaultFiles[0],
    [appTsx]: defaultFiles[1],
    "src/main.tsx": code,
    "src/theme/variables.css": defaultFiles[2],
    "tsconfig.json": defaultFiles[3],
    "package.json": JSON.stringify(package_json, null, 2),
    "package-lock.json": defaultFiles[5],
    ...(options && options.files),
    ".stackblitzrc": `{
  "startCommand": "yarn run start"
}`,
  }

  files[appTsx] = files[appTsx].replace(
    "setupIonicReact()",
    `setupIonicReact({ mode: '${options && options.mode}' })`
  )

  sdk.openProject({
    template: "node",
    title: (options && options.title) || DEFAULT_EDITOR_TITLE,
    description: (options && options.description) || DEFAULT_EDITOR_DESCRIPTION,
    files,
  })
}

const openVueEditor = async (code, options) => {
  const defaultFiles = await loadSourceFiles(
    [
      "vue/package.json",
      "vue/package-lock.json",
      "vue/index.html",
      "vue/variables.css",
      "vue/vite.config.ts",
      "vue/main.ts",
      options && options.includeIonContent
        ? "vue/App.withContent.vue"
        : "vue/App.vue",
      "vue/tsconfig.json",
      "vue/tsconfig.node.json",
      "vue/env.d.ts",
    ],
    options.version
  )

  const package_json = JSON.parse(defaultFiles[0])

  if (options && options.dependencies) {
    package_json.dependencies = {
      ...package_json.dependencies,
      ...options.dependencies,
    }
  }

  const mainTs = "src/main.ts"
  const files = {
    "src/App.vue": defaultFiles[6],
    "src/components/Example.vue": code,
    [mainTs]: defaultFiles[5],
    "src/env.d.ts": defaultFiles[9],
    "src/theme/variables.css": defaultFiles[3],
    "index.html": defaultFiles[2],
    "vite.config.ts": defaultFiles[4],
    "package.json": JSON.stringify(package_json, null, 2),
    "package-lock.json": defaultFiles[1],
    "tsconfig.json": defaultFiles[7],
    "tsconfig.node.json": defaultFiles[8],
    ...(options && options.files),
    ".stackblitzrc": `{
  "startCommand": "yarn run dev"
}`,
  }

  files[mainTs] = files[mainTs].replace(
    ".use(IonicVue)",
    `.use(IonicVue, {
  mode: '${options && options.mode}'
})`
  )

  sdk.openProject({
    template: "node",
    title: (options && options.title) || DEFAULT_EDITOR_TITLE,
    description: (options && options.description) || DEFAULT_EDITOR_DESCRIPTION,
    files,
  })
}

export { openAngularEditor, openHtmlEditor, openReactEditor, openVueEditor }
