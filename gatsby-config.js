module.exports = {
  siteMetadata: {
    title: `FCI Chajna`,
    description: `Oficjalna strona hodowli psów`,
    author: `@FColor04`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FCI Chajna`,
        short_name: `Chajna`,
        start_url: `/`,
        background_color: `#574b2e`,
        theme_color: `#574b2e`,
        display: `minimal-ui`,
        icon: `src/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
