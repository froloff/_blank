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
const port = 3000;
app.listen(port, 'localhost', (error) => {
  if (error) {
    console.log(error); // eslint-disable-line
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`); // eslint-disable-line
  }
});
