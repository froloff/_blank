const path = require('path');
const express = require('express');

const DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = (app) => {
  if (DEVELOPMENT) {
    const webpack = require('webpack');
    const config = require('../webpack.config');
    const compiler = webpack(config);
    const middleware = require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
      stats: config.stats,
    });

    app.use(middleware);
    app.use(require('webpack-hot-middleware')(compiler));
    app.get('*', (req, res) => {
      const indexPath = path.join(config.output.path, 'index.html');
      const indexFile = middleware.fileSystem.readFileSync(indexPath);
      res.end(indexFile);
    });
  } else {
    app.use(express.static(path.resolve(__dirname, '../build')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../build/index.html'));
    });
  }
};
