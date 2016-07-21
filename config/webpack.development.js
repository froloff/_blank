const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '../client/index.jsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
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
    }, {
      test: /\.(ttf|eot|woff|woff2|svg)$/,
      loader: 'file?name=fonts/[name].[ext]',
    }],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({ template: 'client/index.html' }),
  ],
  postcss() {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')({ browsers: ['last 2 versions', 'ie 11'] }),
    ];
  },
};
