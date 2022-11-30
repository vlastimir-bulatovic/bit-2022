import React, { Component } from "react";

export class Button2Class extends Component {
	render() {
		return (
			<button onClick={this.props.setCounter} type="button">
				{this.props.text}
			</button>
		);
	}
}

export default Button2Class;
