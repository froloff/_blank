const proxy = require('json-proxy');

module.exports = (app) => {
  app.use(proxy.initialize({
    proxy: {
      forward: {
        '/api/(.*)': 'https://backend.com/api/$1',
      },
      headers: {
        Cookie: 'X-Requested-With=XMLHttpRequest;',
      },
    },
  }));
};
