const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('../config/webpack.development.js');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('public'));
app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
