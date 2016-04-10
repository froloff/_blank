import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './App.pcss';

import Counter from 'app/components/Counter/Counter';
import * as counterActions from 'app/actions/CounterActions';

class App extends Component {
  render() {
    const { counter } = this.props;
    const { increment, decrement } = this.props.counterActions;
    return (
      <div className={styles.App}>
        <Counter value={counter.value} increment={increment} decrement={decrement} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(counterActions, dispatch),
  };
}

App.propTypes = {
  counter: PropTypes.object.isRequired,
  counterActions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
