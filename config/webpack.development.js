const path = require('path');
const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '../client/index.jsx'),
    ],
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
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${process.env.NODE_ENV}"` }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({ template: 'client/index.html' }),
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
