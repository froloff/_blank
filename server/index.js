var path = require('path');
var express = require('express');
var app = express();

if (process.env.NODE_ENV == 'development') {
  var webpack = require('webpack');
  var config = require('../config/webpack.development.js');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('public'));
app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
});
