const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    popup:'./src/popup/popup.js',
    script:'./src/scripts/script.js'
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    inject: false,
    template: './src/popup/popup.html',
    filename: 'popup.html'
  }),
  new CopyPlugin({
    patterns: [
      { from: "public"}
    ],
  }),
],
};