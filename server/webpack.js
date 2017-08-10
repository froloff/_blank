const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

module.exports = (app) => {
  const compiler = webpack(config);

  app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: config.stats,
  }));
  app.use(hotMiddleware(compiler));
  app.use(express.static(config.output.path));
};
