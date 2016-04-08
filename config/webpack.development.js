const path = require('path');
const webpack = require('webpack');

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
      loader: 'style!css?modules!postcss',
    }],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss() {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
    ];
  },
};
