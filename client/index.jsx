import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './styles/main.pcss';

import App from 'app/containers/App/App';
import configureStore from 'app/store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
