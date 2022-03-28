const path = require("path")
const colors = require("tailwindcss/colors")

module.exports = ({
  contentAuthors = "content/authors",
  contentPosts = "content/posts",
  gatsbyRemarkPlugins = [],
}) => ({
  mapping: {
    "Mdx.frontmatter.author": `AuthorsYaml`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `AuthorsYaml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: contentPosts,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `authors`,
        path: contentAuthors,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/img/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 10000,
              linkImagesToOriginal: false,
              quality: 80,
              withWebp: true,
              showCaptions: true,
              markdownCaptions: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `0`,
              icon: `<span>#</span>`,
              className: `heading-anchor`,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: `GitHub Dark Dimmed`,
              extensions: [
                path.resolve(
                  __dirname,
                  `src/assets/vscode_theme/github-vscode-theme-6.0.0_vsixhub.com.vsix`
                ),
              ],
              inlineCode: {
                marker: `•`,
                theme: {
                  default: `Github Light Default`,
                  parentSelector: {
                    'html[class*="dark"]': `Github Dark Dimmed`,
                  },
                },
                className: `grvsc-inline`,
              },
            },
          },
          ...gatsbyRemarkPlugins,
        ],
      },
    },
  ],
})
