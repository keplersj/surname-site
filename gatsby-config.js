module.exports = {
  siteMetadata: {
    title: "Sticka-Jones Website",
    description: "",
    author: "Kepler Sticka-Jones"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.jsx")
        }
      }
    },
    "gatsby-plugin-react-helmet"
  ]
};
