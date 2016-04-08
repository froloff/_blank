import React, { Component, PropTypes } from 'react';

import './Page.pcss';

export default class Page extends Component {
  render() {
    const { year } = this.props;
    return (
      <p>Рады приветствовать тебя в {year} году!</p>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
};
