import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {
  render() {
    let link = this.props.link;
		return (
      <section className="breadcrumbs">
        <div className="l-container">
          <ul className="flex">
            <li><Link to="/">Home</Link></li>
            <li>{link}</li>
          </ul>
        </div>
      </section>
		);
  }
}

export default Breadcrumbs;
