import React, { Component } from "react";
import "./button.css";

export class Button extends Component {
	render() {
		return <button onClick={this.props.method}>{this.props.text}</button>;
	}
}

export default Button;
