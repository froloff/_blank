const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'babel-polyfill',
      'whatwg-fetch',
      'classnames',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
    ],
    app: [
      path.resolve(__dirname, '../client/index'),
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
      loader: 'style!css?modules&localIdentName=[hash:base64:8]!postcss',
    }, {
      test: /\.(woff|woff2|ttf|png|jpg)$/,
      loader: 'url?limit=10000&name=assets/[hash:base64:8].[ext]',
    }, {
      test: /\.svg$/,
      loader: 'babel!svg-react',
    }],
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['components', 'vendor'], minChunks: Infinity }),
    new HtmlPlugin({
      template: path.resolve(__dirname, '../client/index.html'),
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
  svgoConfig: {
    plugins: [
      { removeTitle: true },
    ],
  },
};
