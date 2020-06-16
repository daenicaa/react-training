import React, { Component } from "react";
import Scroll from 'react-scroll-to-element';

class ScrollToTop extends Component {

	render() {
		return (
			<div className="scroll-to-top l-container">
				<Scroll type="class" element="l-header">
					<button className="button button-scroll">
						<i className="icon icon-chevron"></i>
						TOP
					</button>
				</Scroll>
			</div>
		);
	}
}

export default ScrollToTop;
