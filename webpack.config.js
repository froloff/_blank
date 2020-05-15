const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEVELOPMENT = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: DEVELOPMENT
    ? [
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, './client/index'),
    ]
    : [
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
        use: [
          { loader: DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[folder]_[local]_[hash:base64:4]',
              },
            },
          },
          { loader: 'postcss-loader' },
        ]
      },

      {
        test: /\.(woff|woff2|ttf|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: DEVELOPMENT ? 0 : 4096,
              name: 'assets/[hash:base64:10].[ext]',
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        use: [{ loader: 'svg-react-loader' }],
      },
    ],
  },

  plugins: DEVELOPMENT
    ? [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ]
    : [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new MiniCssExtractPlugin({filename: 'styles.css'}),
    ],

  devtool: DEVELOPMENT ? 'source-map-eval' : 'source-map',

  stats: {
    colors: true,
    chunks: false,
    children: false,
  },

  mode: DEVELOPMENT ? 'development' : 'production',
};
