const path = require('path');
const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('../config/webpack.development');
  const compiler = webpack(config);
  const middleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
    },
  });

  app.use(middleware);
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('*', (req, res) => {
    res.end(middleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')));
  });
} else {
  app.use(express.static(path.resolve(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
  });
}

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port')); // eslint-disable-line
});
