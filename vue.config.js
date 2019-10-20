const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  configureWebpack: () => {
    const Config = {}
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new webpack.DllReferencePlugin({
            context: process.cwd(),
            /* eslint-disable global-require */
            manifest: require('./public/vendor/vendor-manifest.json')
            /* eslint-enable global-require */
          }),
          new AddAssetHtmlPlugin({
            filepath: path.resolve(__dirname, './public/vendor/*.js'),
            publicPath: '/ljthnew/vendor',
            outputPath: './vendor'
          })
        ]
      }
    }
    return Config
  }
}
