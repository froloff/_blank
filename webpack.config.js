const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const VisualizerPlugin = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'client'],
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
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[folder]_[local]_[hash:base64:4]',
              },
            },
            { loader: 'postcss-loader' },
          ],
        }),
      },
      {
        test: /\.(woff|woff2|ttf|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: PRODUCTION ? 16384 : 0,
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
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin('styles.css'),
      new HtmlPlugin({
        template: path.resolve(__dirname, './client/index.html'),
        chunksSortMode: 'dependency',
      }),
      new VisualizerPlugin(),
    ]
    : [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('styles.css'),
      new HtmlPlugin({
        template: path.resolve(__dirname, './client/index.html'),
        chunksSortMode: 'dependency',
      }),
    ],
  devtool: PRODUCTION ? false : 'source-map',
};
