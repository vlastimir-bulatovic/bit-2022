import { Component } from "react";
import "./card.css";

export class Card extends Component {
	render() {
		return (
			<div className="card">
				<h3>{this.props.article.title}</h3>
				<p>{this.props.article.longDescription}</p>
			</div>
		);
	}
}

export default Card;
