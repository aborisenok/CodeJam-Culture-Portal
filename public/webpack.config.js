const CopyWebpackPlugin = require('copy-webpack-plugin');

[
    new CopyWebpackPlugin([
      { from: 'src', to: 'images' }
    ])
]