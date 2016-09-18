import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.pcss';
import Counter from 'app/components/Counter/Counter';

export default class HomePage extends Component {
  render() {
    return (
      <div className={styles.page}>
        <Counter />
      </div>
    );
  }
}
