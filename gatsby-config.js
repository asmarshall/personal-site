/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-scroll-reveal',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:200,300,400,500,600'],
        }
      }
    },
  ],
}
