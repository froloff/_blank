import React, { Component } from 'react';
import styles from './Home.pcss';
import Counter from '../../components/Counter/Counter';

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.page}>
        <Counter />
      </div>
    );
  }
}
