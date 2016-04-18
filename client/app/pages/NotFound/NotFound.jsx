import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './NotFound.pcss';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className={styles.page}>
        <h1>404 :(</h1>
        <h2><Link to="/">Home /</Link></h2>
      </div>
    );
  }
}
