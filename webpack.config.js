const { join } = require('path');

/**
* @type {import('webpack').Configuration}
*/
const webpackConfig = {
  entry: ['./src/index.js'],
  output: {
    filename: 'main.js',
    path: join(__dirname, 'dist'),
  },
  cache: {
    cacheDirectory: join(__dirname, 'dist'),
    type: 'filesystem',
  },
  mode: 'production',
  module: {
    rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: require('./babel.config'),
          },
          "exclude": [
            // \\ for Windows, \/ for Mac OS and Linux
            /node_modules/
            // /node_modules[\\\/]core-js/,
            // /node_modules[\\\/]webpack[\\\/]buildin/,
          ],
        }
    ]
  }
}

module.exports = webpackConfig;