const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: PRODUCTION
    ? [
      path.resolve(__dirname, './client/index'),
    ]
    : [
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, './client/index'),
    ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    // publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(__dirname, './client/actions'),
      components: path.resolve(__dirname, './client/components'),
      constants: path.resolve(__dirname, './client/constants'),
      containers: path.resolve(__dirname, './client/containers'),
      pages: path.resolve(__dirname, './client/pages'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        include: [
          path.resolve(__dirname, './client'),
        ],
      },
      {
        test: /\.p?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:4]',
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: PRODUCTION ? 1024 : 0,
              name: 'assets/[hash:base64:10].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                plugins: [{ cleanupIDs: false }],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: PRODUCTION
    ? [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new HtmlPlugin({
        template: path.resolve(__dirname, './client/index.html'),
        chunksSortMode: 'dependency',
      }),
    ]
    : [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlPlugin({
        template: path.resolve(__dirname, './client/index.html'),
        chunksSortMode: 'dependency',
      }),
    ],

  devtool: PRODUCTION ? false : 'source-map',
};
