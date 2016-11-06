var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  debug: true,
  entry: [
    path.resolve( __dirname, 'src/index')
  ],
  output: {
    path: path.resolve( __dirname, 'www'),
    filename: 'all.js'
  },
  module: {
      loaders: [
          { test: /\.(scss|sass|css)$/, loader: ExtractTextPlugin.extract('css!sass') },
          { test: /\.(jsx|js)$/, loader: 'jsx', exclude: /node_modules/ }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Title',
      favicon: 'src/favico.ico',
      template: 'src/index.ejs'
    }),
    new ExtractTextPlugin('all.css', {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  }
};

module.exports = config;
