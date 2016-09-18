if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.production');
}

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./configureStore.development');
}
