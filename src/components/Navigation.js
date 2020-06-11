import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  	render() {
      const menus = [
        { url: '', title: 'Home'},
        { url: 'about', title: 'About'},
        { url: 'topics', title: 'Topic'}
      ];
		return (
        <ul>
          {menus.map(item => (
            <li className="navigation-item" key={item.id}>
              <Link to={`/${item.url}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
		);
  	}
}

export default Navigation;
