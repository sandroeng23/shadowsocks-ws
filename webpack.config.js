
const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'main.js',
    path: __dirname
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: { compress: { pure_funcs: ['console.debug'] } }
      })
    ]
  }
}
