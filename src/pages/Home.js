import React, {Component} from "react";
import $ from 'jquery';

import News from '../components/News';

class Home extends Component {
  componentDidMount(){
    $("p").click(function(){
      alert("The paragraph was clicked.");
    });
  }
  render() {
		return (
      <main className="l-main l-container">
        <News />
      </main>
		);
  }
}

export default Home;
