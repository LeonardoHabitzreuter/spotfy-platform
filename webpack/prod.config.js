const common = require('./common')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: common.entry,

  mode: 'production',

  output: common.output,

  plugins: [
    new CleanPlugin(['dist'], {
      root: common.paths.root
    }),

    new HtmlPlugin(Object.assign({}, common.htmlPluginConfig, {
      minify: { collapseWhitespace: true }
    })),
  ],

  module: {
    rules: [
      common.jsLoader
    ]
  }
}
