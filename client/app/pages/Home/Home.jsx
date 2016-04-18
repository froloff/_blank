import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.pcss';
import Counter from 'app/components/Counter/Counter';

export default class HomePage extends Component {
  render() {
    return (
      <div clasName={styles.page}>
        <h1>Home Page</h1>
        <h2>Counter</h2>
        <Counter />
        <h2><Link to={'404'}>Link to 404</Link></h2>
      </div>
    );
  }
}
