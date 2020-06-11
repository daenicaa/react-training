import React, {Component} from "react";
import {
  Link
} from "react-router-dom";

import Navigation from '../components/Navigation';
import LoginControl from '../components/Login';
import Hero from '../components/Hero';

class Header extends Component {
  	render() {
  		return (
        <header className="l-header">
          <div className="l-container logo-login flex flex-align-center flex-space-between">
            <div className="site-logo"></div>
            <LoginControl />
          </div>
          <Hero />
        </header>
  		);
  	}
}

export default Header;
