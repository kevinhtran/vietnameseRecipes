/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3xfh0vmm5t7q`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400'],
            },
            {
              family: 'Inconsolata',
              variants: ['400', '500', '600', '700'],
            },
          ],
        },
      },
    },
  ],
};
