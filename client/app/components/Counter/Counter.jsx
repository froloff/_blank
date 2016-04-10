import React, { Component, PropTypes } from 'react';

import styles from './Counter.pcss';

export default class Counter extends Component {
  render() {
    const { value } = this.props;
    console.log(this.props);
    return (
      <p className={styles.counter}>{value}</p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};
