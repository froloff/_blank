const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'whatwg-fetch',
      'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, '../src/index'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.p?css$/,
      loader: 'style!css?modules&localIdentName=[name]_[local]_[hash:base64:8]!postcss',
    }, {
      test: /\.(woff|woff2|ttf|png|jpg)$/,
      loader: 'url',
    }, {
      test: /\.svg$/,
      loader: 'babel!svg-react',
    }],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      chunksSortMode: 'dependency',
    }),
  ],
  postcss() {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')({ url: 'inline' }),
      require('postcss-cssnext')({ browsers: ['last 2 versions', 'ie >= 9', 'ios >= 8'] }),
    ];
  },
  devtool: 'source-map',
};
