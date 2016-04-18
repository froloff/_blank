import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Counter.pcss';
import * as actions from 'app/actions/CounterActions';

class Counter extends Component {
  render() {
    const { value } = this.props;
    const { decrement, increment } = this.props.actions;
    return (
      <div className={styles.counter}>
        <button className={styles.button} onClick={decrement}>-</button>
        <span className={styles.value}>{value}</span>
        <button className={styles.button} onClick={increment}>+</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

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
