/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-stylus`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alamo`,
        short_name: `Alamo`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#636A73`,
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
