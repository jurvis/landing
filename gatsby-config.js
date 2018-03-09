const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Jurvis Tan`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
  ],
};
