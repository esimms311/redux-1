import React, { Component } from 'react';
import Login from './Login';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(user) {
    this.setState({
      user: user
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Logged in with {this.props.user}</h1>
        <Login />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
