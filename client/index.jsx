import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { App } from 'containers';

import './styles';
import configureStore from './store';

if (typeof window === 'object') {
  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;
  const store = configureStore(preloadedState);

  render(
    <Provider store={store}>
      <Router>
        <Route component={App} />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}

if (typeof global === 'object') {
  global.react = { configureStore, App };
}
