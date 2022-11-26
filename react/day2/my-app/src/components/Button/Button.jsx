import React, { Component } from "react";
import "./button.css";

export class Button extends Component {
	render() {
		// we have two props for our component method and text 
		// we can access them in this way
		return <button onClick={this.props.method}>{this.props.text}</button>;
	}
}

export default Button;
