import React, {Component} from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import './style/style.scss';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render() {
    return (
        <Router>
          <Header isLoggedIn={this.state.isLoggedIn} handleLoginClick={this.handleLoginClick} handleLogoutClick={this.handleLogoutClick}/>
          <Main isLoggedIn={this.state.isLoggedIn}/>
          <Footer />
        </Router>
    );
  }
}

export default App;
