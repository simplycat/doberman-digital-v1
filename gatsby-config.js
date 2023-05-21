module.exports = {
  siteMetadata: {
    title: `Allen Digital`,
    description: `Allen Digital is a digital marketing and advertising agency that takes a privacy-first approach to SEM, SEO and web development projects that scale.`,
    author: `@allendigitalinc`,
    siteUrl: `https://allendigital.agency`,
    menuLinks: [
      {
        name: "about",
        link: "/about",
      },
      {
        name: "philosophy",
        link: "/philosophy",
      },
      {
        name: "work",
        link: "/work",
      },
      {
        name: "blog",
        link: "/blog",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-next-seo`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mailgo`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
