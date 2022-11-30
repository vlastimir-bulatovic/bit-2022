import React, { Component } from "react";
import "./characterPage.css";

export class CharacterPage extends Component {
	render() {
		return (
			<main>
				<div id="characterPage">
					<figure>
						<img src={this.props.characterData.image} alt="" />
					</figure>
					<div>
						<h3>{this.props.characterData.name}</h3>
						<p>Origin: {this.props.characterData.origin.name}</p>
						<p>Status: {this.props.characterData.status}</p>
						<p>Gender: {this.props.characterData.gender}</p>
						<p>
							Location: {this.props.characterData.location.name}
						</p>
						<p>Species: {this.props.characterData.species}</p>
						{this.props.characterData.type && (
							<p>Type: {this.props.characterData.type}</p>
						)}
					</div>
				</div>
			</main>
		);
	}
}

export default CharacterPage;
