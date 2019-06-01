const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },

  devtool: 'inline-source-map',

  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlMinifierPlugin({
      html5: true,
      collapseWhitespace: true,
      removeComments: true,
      caseSensitive: true,
      removeEmptyElements: true
    }),
    new CopyWebpackPlugin([{ from: './src/assets', to: 'assets/' }])
  ]
})
