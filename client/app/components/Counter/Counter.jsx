import React, { Component, PropTypes } from 'react';

import styles from './Counter.pcss';

export default class Counter extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className={styles.counter}>
        <button className={styles.button} onClick={this.props.decrement}>-</button>
        <span className={styles.value}>{value}</span>
        <button className={styles.button} onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
};
