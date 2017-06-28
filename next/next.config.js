require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    return config
  },

  exportPathMap() {
    return {
      "/": { page: "/" },
      //"/about": { page: "/about" },
      //"/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } }
    }
  },
}