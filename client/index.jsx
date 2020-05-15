import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';

import { App } from 'containers';

import './styles';
import configureStore from './store';

if (typeof window === 'object') {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  const store = configureStore(preloadedState);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
}

if (typeof global === 'object') {
  global.prerenderApp = (state, location) => {
    const store = configureStore(state);
    return renderToString(
      <Provider store={store}>
        <StaticRouter location={location}>
          <App />
        </StaticRouter>
      </Provider>
    );
  }
}
