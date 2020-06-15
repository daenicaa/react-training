import React, {Component} from "react";
import Copyright from '../components/Copyright';
import ScrollToTop from '../components/ScrollToTop';

class Footer extends Component {
  	render() {
  		return (
        <footer className="l-footer">
          <div className="l-container">
            <div className="site-logo light"></div>
            <div className="footer-text">
              サンプルテキストサンプルルテキストサンプルテキストサンプルテキストサンプル ルテキスト
            </div>
          </div>
          <ScrollToTop />
          <Copyright />
        </footer>
  		);
  	}
}

export default Footer;
