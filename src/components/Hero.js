import React, {Component} from "react";
import $ from 'jquery';
import 'slick-carousel';

class Hero extends Component {
  componentDidMount(){
    $('.js-hero-carousel').slick({
      dots: true,
      arrows: false,
      speed: 300,
      slidesToShow: 1
    });
  }
  render() {
		return (
      <div className="l-hero hero-wrapper">
        <div className="hero js-hero-carousel">
        <div className="hero-item">
          <div className="l-container hero-container">
            <div className="hero-content">
              <div className="hero-heading">サンプルテキスト</div>
              <div className="hero-heading">サンプルルテキスト</div>
              <div className="hero-heading">サンプルテキスト</div>
              <time className="hero-time">2019.06.19</time>
            </div>
          </div>
          <img class="img-full" src="/assets/img/hero-img.png" alt="サンプルテキスト"/>
        </div>
        <div className="hero-item">
          <div className="l-container hero-container">
            <div className="hero-content">
              <div className="hero-heading">サンプルテキスト</div>
              <div className="hero-heading">サンプルルテキスト</div>
              <div className="hero-heading">サンプルテキスト</div>
              <time className="hero-time">2019.06.19</time>
            </div>
          </div>
          <img class="img-full" src="/assets/img/hero-img.png"  alt="サンプルテキスト"/>
        </div>
        <div className="hero-item">
          <div className="l-container hero-container">
            <div className="hero-content">
              <div className="hero-heading">サンプルテキスト</div>
              <div className="hero-heading">サンプルルテキスト</div>
              <div className="hero-heading">サンプルテキスト</div>
              <time className="hero-time">2019.06.19</time>
            </div>
          </div>
          <img class="img-full" src="/assets/img/hero-img.png"  alt="サンプルテキスト"/>
        </div>
        </div>
      </div>
		);
  	}
}

export default Hero;
