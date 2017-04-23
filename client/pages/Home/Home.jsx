import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Counter, HelloWorld } from 'components';

import styles from './Home.pcss';

const cx = classNames.bind(styles);

export default class HomePage extends Component {
  render() {
    return (
      <div className={cx('page')}>
        <HelloWorld />
        <Counter className={cx('demoCounter')} />
      </div>
    );
  }
}
