var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'radom.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },
};
