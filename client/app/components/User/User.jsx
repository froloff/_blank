import React, { Component, PropTypes } from 'react';

import './User.pcss';

export default class User extends Component {
  render() {
    const { name } = this.props;
    return (
      <p>Привет, {name}!</p>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};
