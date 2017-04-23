const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const app = express();

require('./stub')(app);
require('./proxy')(app);
require('./static')(app);

app.set('port', process.env.PORT || 3000);

const httpsServer = https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, './ssl/localhost.key'), 'utf8'),
  cert: fs.readFileSync(path.resolve(__dirname, './ssl/localhost.crt'), 'utf8'),
}, app);

httpsServer.listen(app.get('port'), () => {
  console.log(`
    ------------------------------
    🌍  GOTO https://localhost:${app.get('port')}
    ------------------------------
  `);
});
