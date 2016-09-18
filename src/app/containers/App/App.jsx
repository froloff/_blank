import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.pcss';

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div className={styles.App}>
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
