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
    vendors: ['react', 'react-dom', 'react-redux', 'redux'],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'scripts/app.js',
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, '../client/app'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, '../client/'),
      loader: 'eslint-loader',
    }],
    loaders: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, '../client/'),
      loader: 'babel',
    }, {
      test: /\.p?css$/,
      loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
    }],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.DedupePlugin(),
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
  eslint: {
    failOnError: true,
  },
  postcss() {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
    ];
  },
};
