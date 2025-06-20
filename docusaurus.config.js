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

  // i18n: {
  //   defaultLocale: "uz",
  //   locales: ["uz"],
  // },
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
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
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
          blogSidebarTitle: "All posts",
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
        theme: prismThemes.gruvboxMaterialLight,
        darkTheme: prismThemes.gruvboxMaterialDark,
      },
    }),
}

export default config
