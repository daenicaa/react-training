import React, {Component} from "react";
import $ from 'jquery';

import Hero from '../components/Hero';
import News from '../components/News';

class Home extends Component {
  render() {
		return (
      <main>
        <Hero />
        <div className="l-main l-container">
          <News />
        </div>
      </main>
		);
  }
}

export default Home;
