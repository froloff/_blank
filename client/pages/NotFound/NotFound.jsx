import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './NotFound.pcss';

const cx = classNames.bind(styles);

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className={cx('page')}>
        <h1 className={cx('heading')}>404 :(</h1>
        <h2 className={cx('message')}>
          <Link to="/">go Home</Link>
        </h2>
      </div>
    );
  }
}
