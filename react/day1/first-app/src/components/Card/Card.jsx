import "./Card.css";
import React from "react";

export class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card">
				<div>
					<h2>{this.props.article.title}</h2>
					<h4>{this.props.article.shortDescription}</h4>
					<img src={this.props.article.thumbnails} alt="News" />
				</div>
			</div>
		);
	}
}

export default Card;
