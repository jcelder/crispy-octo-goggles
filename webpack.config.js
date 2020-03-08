const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
