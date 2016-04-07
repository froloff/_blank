const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, '../client/index.jsx'),
    ],
    vendors: ['react'],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'scripts/app.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, '../client/'),
      loader: 'babel',
    }, {
      test: /\.p?css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules!postcss'),
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'scripts/vendors.js'),
    new HtmlPlugin({ template: 'client/index.html' }),
    new ExtractTextPlugin('styles/app.css'),
    new CopyPlugin([{
      from: 'client/assets',
      to: 'assets',
    }]),
  ],
  postcss() {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
    ];
  },
};
