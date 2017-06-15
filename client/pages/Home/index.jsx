import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { HelloWorld } from 'components';
import { Counter } from 'containers';

import styles from './styles.pcss';

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
