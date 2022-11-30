import React, { Component } from "react";
import "./card.css";
export class Card extends Component {
	render() {
		return (
			<div
				className={"card " + this.props.character.status.toLowerCase()}
				onClick={() => {
					this.props.methodCharacterProfile(this.props.character);
				}}
			>
				<figure>
					<img
						src={this.props.character.image}
						alt={this.props.character.name}
					/>
				</figure>
				<h3>{this.props.character.name}</h3>

				<p>Current location: {this.props.character.location.name}</p>
			</div>
		);
	}
}

export default Card;
