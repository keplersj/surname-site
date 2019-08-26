module.exports = {
  siteMetadata: {
    title: "Sticka-Jones Website",
    description: "",
    author: "Kepler Sticka-Jones",
    siteUrl: "https://stickajones.org"
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.jsx")
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-146396429-1",
        anonymize: true,
        respectDNT: true
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sticka-Jones Website",
        short_name: "Sticka-Jones",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui"
      }
    },
    "gatsby-plugin-offline"
  ]
};
