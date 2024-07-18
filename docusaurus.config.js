// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smaply 3.0 Knowledge base',
  tagline: 'Customer Journey Mapping Enhanced',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://geoffbullen.github.io', // Your GitHub Pages URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/smaply-knowledge/', // Your repo name with trailing slash

  // GitHub pages deployment config.
  organizationName: 'geoffbullen', // Your GitHub username
  projectName: 'smaply-knowledge', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/geoffbullen/smaply-knowledge/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/geoffbullen/smaply-knowledge/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    ['@grnet/docusaurus-terminology', {
      termsDir: './docs/terms',
      docsDir: './docs/',
      glossaryFilepath: './docs/glossary.md'
    }],
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        hashed: true
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/smaply-logo-with-name.svg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Knowledge Center',
        logo: {
          alt: 'Smaply Logo',
          src: 'img/smaply-logo-with-name.svg',
          srcDark: 'img/smaply-logo-with-name-dark.svg', // dark mode logo
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { href: 'https://www.smaply.com', label: 'Website', position: 'right' },
          { href: 'https://www.smaply.com/blog', label: 'Blog', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/smaply',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/smaply',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://www.smaply.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/more-than-metrics/smaply-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} More than Metrics. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      }
    }),
};

export default config;
