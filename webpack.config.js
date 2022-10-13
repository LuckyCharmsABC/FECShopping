const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client/src", "index.js"),
  output: {
    path: path.resolve(__dirname, "client/dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/dist",)
    })
  ]
};