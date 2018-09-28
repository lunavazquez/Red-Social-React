import React, { Component } from 'react'
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

class App extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />


        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
