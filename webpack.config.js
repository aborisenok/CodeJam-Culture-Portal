const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'images' }
    ])
]}