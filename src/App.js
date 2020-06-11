import React, {Component} from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import $ from 'jquery';

import logo from './logo.svg';
import './App.css';
import './style/style.scss';

import Header from './layout/Header';
import Main from './layout/Main';

class App extends Component {
  render() {
    const isLoggedIn = true;
    return (
        <Router>
          <Header isLoggedIn = {isLoggedIn}/>
          <Main />
        </Router>
    );
  }
}

export default App;
