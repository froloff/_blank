const express = require('express');
const path = require('path');

const app = express();

if (app.get('env') === 'development') {
  require('./webpack')(app);
} else {
  app.use(express.static(path.resolve(__dirname, '../build')));
}

app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'pug');

require('./stub')(app);
require('./proxy')(app);
require('./routes')(app);

app.listen(app.get('port'), () => {
  console.log(`
    ------------------------------
    🌍  GOTO http://localhost:${app.get('port')}
    ------------------------------
  `);
});
