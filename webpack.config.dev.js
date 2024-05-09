const { join } = require('path');

const bundleDirectoryPath = join(__dirname, 'dist');
const cacheDirectoryPath = join(__dirname, '.cache');

/**
* @type {import('webpack').Configuration}
*/
const webpackConfig = {
  entry: {
    main: './src/index.js',
    catch: './src/error/index.js',
  },
  output: {
    filename: '[name].js',
    path: bundleDirectoryPath,
  },
  cache: {
    cacheDirectory: cacheDirectoryPath,
    type: 'filesystem',
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: Object.assign({
              cacheDirectory: cacheDirectoryPath,
            },require('./babel.config')),
          },
          "exclude": [
            // \\ for Windows, \/ for Mac OS and Linux
            /node_modules/
            // /node_modules[\\\/]core-js/,
            // /node_modules[\\\/]webpack[\\\/]buildin/,
          ],
        }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        polyfills: {
          test: /[\\/]node_modules[\\/](@babel|core-js)/,
          name: 'polyfills',
          chunks: 'initial',
          enforce: true,
        }
      }
    }
  }
}

module.exports = webpackConfig;