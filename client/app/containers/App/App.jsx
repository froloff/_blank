import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from './App.pcss';

import Counter from 'app/components/Counter/Counter';

class App extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div className={styles.App}>
        <Counter value={counter.value} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

App.propTypes = {
  counter: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
