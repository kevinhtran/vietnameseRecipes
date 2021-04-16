/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Vietnamese Food Any Day',
    description: 'Vietnamese Food Recipes site by Andrea Nguyen',
    author: '@kevintran',
    person: { name: 'Kevin', age: 30 },
    simpleData: ['item 1', 'item 2'],
    complexData: [{ name: 'Kevin', age: 30 }, { name: 'Andrea', age: 48 }],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
