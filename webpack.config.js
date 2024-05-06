const { join } = require('path');

/**
* @type {import('webpack').Configuration}
*/
const webpackConfig = {
  entry: [ './src/index.js' ],
  output: {
    filename: 'main.js',
    path: join(__dirname, 'dist'),
  }
}

module.exports = webpackConfig;