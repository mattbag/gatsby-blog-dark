module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Lisa Ye',
    author: 'Lisa Ye',
    description: 'Portfolio',
    siteUrl: 'https://lisaye.netlify.com',
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/config`,
        name: 'config',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: 'black',
              quality: 90
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // 'gatsby-remark-prismjs',
          // 'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-smartypants',
        ],
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lisa Ye`,
        short_name: `LisaYe`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `fullscreen`,
        orientation : "natural",
        icon: `src/assets/favi.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    // 'gatsby-plugin-netlify'
    //gatsby-plugin-netlify
    // "gatsby-plugin-netlify": "^2.0.0-rc.0",
  ],
}
