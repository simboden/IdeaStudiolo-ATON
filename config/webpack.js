const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  output: {
    path: paths.build,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
