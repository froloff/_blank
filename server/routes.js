const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Router = require('react-router').StaticRouter;
const { Provider } = require('react-redux');

module.exports = (app) => {
  if (app.get('env') === 'production') {
    require('../build/bundle');
  }

  const render = (state, location) => {
    if (app.get('env') === 'production') {
      const store = global.react.configureStore(state);
      const el = React.createElement(
        Provider,
        { store },
        React.createElement(
          Router,
          { location },
          React.createElement(global.react.App, null),
        ),
      );
      return ReactDOMServer.renderToString(el);
    }

    return null;
  };

  app.get('*', (req, res) => {
    const preloadedState = { counter: 42 };

    res.render('index', {
      html: render(preloadedState, req.url),
      preloadedState,
    });
  });
};
