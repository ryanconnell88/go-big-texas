const path = require('path');

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/js/')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
