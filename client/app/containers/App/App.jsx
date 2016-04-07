import React, { Component } from 'react';

import 'normalize.css';
import './App.pcss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  render() {
    return (
      <section className="App"></section>
    );
  }
}
