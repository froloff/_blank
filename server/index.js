const express = require('express');

const app = express();

require('./stub')(app);
require('./proxy')(app);
require('./static')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`
    ------------------------------
    🌍  GOTO http://localhost:${app.get('port')}
    ------------------------------
  `);
});
