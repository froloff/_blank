import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';

import styles from './styles.pcss';

const cx = classNames.bind(styles);

export default class New extends Component {
  static defaultProps = {
    className: '',
    children: 'Hello World',
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children, className } = this.props;

    return (
      <div className={cx('component', className)}>
        {children}
      </div>
    );
  }
}
