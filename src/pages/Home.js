import React, {Component} from "react";

import Hero from '../components/Hero';
import News from '../components/News';

class Home extends Component {
  render() {
		return (
      <main>
        <Hero />
        <div className="l-main l-container">
          <News isLoggedIn={this.props.isLoggedIn}/>
        </div>
      </main>
		);
  }
}

export default Home;
