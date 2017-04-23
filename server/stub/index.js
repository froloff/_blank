const path = require('path');

module.exports = (app) => {
  app.get('/stub', (req, res) => {
    res.sendFile(path.resolve(__dirname, './data.json'));
  });
};
