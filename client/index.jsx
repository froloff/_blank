import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles';

import App from './app/containers/App/App';
import HomePage from './app/pages/Home/Home';
import NotFoundPage from './app/pages/NotFound/NotFound';

import configureStore from './app/store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
