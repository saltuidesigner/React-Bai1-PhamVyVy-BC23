import React, { Component } from "react";
import Header from "./Header.jsx";
import Section from "./Section.jsx";
import Footer from "./Footer.jsx";
class Body extends Component {
	render() {
		return (
			<div className='body'>
				<Header />
				<Section />
				<Footer />
			</div>
		);
	}
}

export default Body;
