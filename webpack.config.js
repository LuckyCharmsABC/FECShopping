const path = require('path');


module.exports = {
  mode: "development",
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, "client/dist")
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },

};