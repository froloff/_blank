import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames/bind';

import {
  HomePage,
  NotFoundPage,
} from 'pages';

import styles from './styles.pcss';

const cx = classNames.bind(styles);

export default class App extends Component {
  render() {
    return (
      <div className={cx('container')}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
