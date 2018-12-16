const webpack = require('webpack')
const common = require('./common')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  mode: 'development',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry.main
  ],

  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: '/'
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    rules: [
      common.jsLoader,
      common.stylusLoader,
      common.cssLoader,
      common.svgLoader
    ]
  },

  resolve: common.resolve
}
