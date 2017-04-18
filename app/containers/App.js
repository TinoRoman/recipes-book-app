import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions/index';
import AppRoute from '../components/AppRoute';

class App extends Component {
    render() {
        return <AppRoute {...this.props} />;
    }
}

export default connect(
    state => ({
        storeState: state
    }),
    dispatch => ({
        actions: bindActionCreators(Actions, dispatch)
    })
)(App);
