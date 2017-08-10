module.exports = (app) => {
  app.get('*', (req, res) => {
    const html = 'Hello!';

    res.render('index', {
      html,
      preloadedState: {},
    });
  });
};
