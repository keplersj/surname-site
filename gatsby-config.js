module.exports = {
  siteMetadata: {
    title: "Sticka-Jones Website",
    description: "",
    author: "Kepler Sticka-Jones",
    siteUrl: "https://stickajones.org"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-146396429-1",
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-theme-sputnik",
      options: {
        manifestOptions: {
          name: "Sticka-Jones Website",
          short_name: "Sticka-Jones",
          start_url: "/",
          background_color: "#ffffff",
          theme_color: "#000000",
          display: "minimal-ui"
        }
      }
    }
  ]
};
