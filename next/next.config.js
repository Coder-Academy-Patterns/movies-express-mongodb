const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        'API_URL': 'http://localhost:7000',
      })
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