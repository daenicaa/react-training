import React, {Component} from "react";
import {
  Link
} from "react-router-dom";

import Navigation from '../components/Navigation';
import LoginControl from '../components/Login';

class Header extends Component {
  	render() {
  		return (
        <header className="l-header">
          <div className="l-container logo-login flex flex-align-center flex-space-between">
            <Link to="/"><div className="site-logo"></div></Link>
            <LoginControl />
          </div>
        </header>
  		);
  	}
}

export default Header;
