// @ts-check
import { themes as prismThemes } from "prism-react-renderer"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Devdocs",
  tagline: "Siz to'g'ri joydasiz!",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "facebook",
  projectName: "docusaurus",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "uz",
    locales: ["uz"],
    localeConfigs: {
      uz: {
        label: "O‘zbekcha",
        direction: "ltr",
        htmlLang: "uz",
        calendar: "gregory",
        path: "uz",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          showReadingTime: true,
          readingTime: ({ content, locale, frontMatter, defaultReadingTime }) =>
            // usage:
            // ---
            // hide_reading_time: true
            // ---
            //
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content,
                  locale,
                  options: { wordsPerMinute: 100 },
                }),
          // feedOptions: {
          //   type: ["rss", "atom"],
          //   xslt: true,
          // },
          feedOptions: {
            // The feeds can be found at:
            // https://example.com/blog/rss.xml
            // https://example.com/blog/atom.xml
            // https://example.com/blog/feed.json
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Buzurgmexr Sultonaliyev.`,
            createFeedItems: (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((_, index) => index < 10),
                ...rest,
              })
            },
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          //
          blogTitle: "Docusaurus blog!",
          blogDescription: "A Docusaurus powered blog!",
          postsPerPage: "ALL",
          //
          blogSidebarTitle: "Hamma bloglar",
          blogSidebarCount: "ALL", // 0 for remove sidebar
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "./plugins/docusaurus-plugin-ionic-component-api",
      {
        // Yangi qo'shiladigan optionslar
        ionicDocsId: "ionic", // Sizning "ionic" docs instansingizning ID'si
        // Plugin ichida ishlatiladigan versiyalar
        versions: [
          {
            label: "v8",
            path: "v8",
            npmTag: "latest",
            isCurrent: true,
            banner: "none",
          }, // Hozirgi (current) versiya
          { label: "v7", path: "v7", npmTag: "7" },
          { label: "v6", path: "v6", npmTag: "6" },
          // ...kelajakdagi boshqa versiyalar
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docusaurus",
        path: "docs/docusaurus",
        routeBasePath: "docs/docusaurus",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/...",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "algoliaDocsearch",
        path: "docs/algolia-docsearch",
        routeBasePath: "docs/algoliaDocsearch",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/...",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ionic",
        path: "docs/ionic",
        routeBasePath: "docs/ionic",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/...",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "html",
    //     path: "docs/html",
    //     routeBasePath: "docs/html",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     editUrl: "https://github.com/...",
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "css",
    //     path: "docs/css",
    //     routeBasePath: "docs/css",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     editUrl: "https://github.com/...",
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "js",
    //     path: "docs/js",
    //     routeBasePath: "docs/js",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     editUrl: "https://github.com/...",
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Devdocs",
        logo: {
          alt: "Devdocs Logo",
          src: "img/logo.svg",
        },

        items: [
          {
            type: "docSidebar",
            sidebarId: "docusaurusSidebar",
            position: "left",
            label: "Docusaurus",
            docsPluginId: "docusaurus",
          },
          {
            type: "docSidebar",
            sidebarId: "algoliaDocsearchSidebar",
            position: "left",
            label: "AlgoliaDocsearch",
            docsPluginId: "algoliaDocsearch",
          },
          {
            type: "docSidebar",
            sidebarId: "ionicSidebar",
            position: "left",
            label: "ionic",
            docsPluginId: "ionic",
          },
          // {
          //   type: "docSidebar",
          //   sidebarId: "htmlSidebar",
          //   position: "left",
          //   label: "HTML",
          //   docsPluginId: "html",
          // },
          // {
          //   type: "docSidebar",
          //   sidebarId: "cssSidebar",
          //   position: "left",
          //   label: "CSS",
          //   docsPluginId: "css",
          // },
          // {
          //   type: "docSidebar",
          //   sidebarId: "jsSidebar",
          //   position: "left",
          //   label: "JavaScript",
          //   docsPluginId: "js",
          // },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docusaurus",
                to: "/docs/docusaurus",
              },
              {
                label: "algoliaDocsearch",
                to: "/docs/algolia-docsearch",
              },
              {
                label: "ionic",
                to: "/docs/ionic",
              },
              // {
              //   label: "HTML",
              //   to: "/docs/html",
              // },
              // {
              //   label: "CSS",
              //   to: "/docs/css",
              // },
              // {
              //   label: "JavaScript",
              //   to: "/docs/js",
              // },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.vsDark,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
}

export default config
