const path = require('path');

module.exports = {
  entry: './src/popup/Popup.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Popup.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  }
};
