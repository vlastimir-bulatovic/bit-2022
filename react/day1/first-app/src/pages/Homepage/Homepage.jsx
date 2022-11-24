import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./Homepage.css";

export class Homepage extends Component {
	constructor(props) {
		super(props);
		// bind method to constructor
		// this.changeFriday = this.changeFriday.bind(this);

		this.fetchData = this.fetchData.bind(this);

		this.state = {
			// broj: 1,
			isFriday: true,
			data: [],
		};
	}

	// changeFriday = function () {

	// 	this.setState({ isFriday: !this.state.isFriday });
	// };

	fetchData = function () {
		fetch("https://637becb872f3ce38ea97cffb.mockapi.io/articles")
			.then((res) => res.json())
			.then((res) => this.setState({ data: res }))
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<div id="homepage">
				<Header />
				{/* <div>
					<h2>{this.state.broj}</h2>
					<button
						onClick={() => {
							this.setState({ broj: this.state.broj + 1 });
						}}
					>
						povecaj broj
					</button>

					<h3>Is friday yet? {this.state.isFriday}</h3>
					<button onClick={this.changeFriday}>Promeni friday</button>
				</div> */}
				<div>
					<button onClick={this.fetchData}>Fetch data</button>
				</div>
				<main>
					{this.state.data.map((el) => (
						<Card article={el}/>
					))}
				</main>
				<Footer />
			</div>
		);
	}
}

export default Homepage;
