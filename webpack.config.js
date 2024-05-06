const { join } = require('path');

/**
* @type {import('webpack').Configuration}
*/
const webpackConfig = {
  entry: [ './src/index.js' ],
  output: {
    filename: 'main.js',
    path: join(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ]
        }
      }
    ]
  }
}

module.exports = webpackConfig;