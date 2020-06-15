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
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
    );
  }
}

export default App;
