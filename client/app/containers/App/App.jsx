import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import 'normalize.css';
import styles from './App.pcss';

import User from 'app/components/User/User';
import Page from 'app/components/Page/Page';

class App extends Component {
  render() {
    const { user, page } = this.props;
    return (
      <div className={styles.App}>
        <User name={user.name} />
        <Page year={page.year} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
    user: state.user,
  };
}

App.propTypes = {
  page: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
