import React, { Component } from "react";
import "./header.css";
export class Header extends Component {
	render() {
		return (
			<header>
				<h2 onClick={this.props.methodGoToHomePage}>Rick and Morty</h2>
			</header>
		);
	}
}

export default Header;
