/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://www.alamoingenieria.com.ar`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-stylus`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'es',
        langKeyForNull: 'es',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alamo`,
        short_name: `Alamo`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#1A1A1A`,
        display: `standalone`,
        icon: './src/assets/icon.png'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
