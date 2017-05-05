import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import * as actions from 'actions';

import styles from './Counter.pcss';

const cx = classNames.bind(styles);

class Counter extends Component {
  static defaultProps = {
    className: '',
  }

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired,
  }

  render() {
    const { className, value } = this.props;
    const { decrement, increment } = this.props.actions;
    return (
      <div className={cx('component', className)}>
        <button className={cx('button')} onClick={decrement}>–</button>
        <span className={cx('value')}>{value}</span>
        <button className={cx('button')} onClick={increment}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
