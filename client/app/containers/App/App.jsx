import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.pcss';
import Counter from 'app/components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Counter />
        { this.props.children }
      </div>
    );
  }
}

export default connect()(App);
