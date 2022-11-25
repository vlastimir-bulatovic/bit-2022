import { Component } from "react";
import "./imagePage.css";
import Card from "../../components/Card/Card";

export class SinglePage extends Component {
	constructor(props) {
		super(props);

		this.fetchData = this.fetchData.bind(this);

		this.state = {
			articles: [],
		};
	}

	fetchData() {
		fetch("https://637becb872f3ce38ea97cffb.mockapi.io/articles")
			.then((res) => res.json())
			.then((res) => this.setState({ articles: res }))
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<>
				{!this.state.articles.length && (
					<button onClick={this.fetchData}>fetch data</button>
				)}
				<div className="card-wrapper">
					{this.state.articles.map((el) => (
						<Card article={el} />
					))}
				</div>
			</>
		);
	}
}

export default SinglePage;
