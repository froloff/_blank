import React, { Component, PropTypes } from 'react';

import styles from './User.pcss';

export default class User extends Component {
  render() {
    const { name } = this.props;
    return (
      <p className={styles.greeting}>Привет, <span className={styles.name}>{name}!</span></p>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
