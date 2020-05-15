module.exports = (app) => {
  if (app.get('env') === 'production') {
    require('../build/bundle');
  }

  const render = (state, location) => {
    if (app.get('env') === 'production') {
      return global.prerenderApp(state, location);
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
