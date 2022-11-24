import React, { Component } from "react";
import "./app.css";
import Homepage from "./pages/Homepage/Homepage";
import SinglePage from "./pages/SinglePage/SinglePage";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOnHomePage: true,
		};
	}

	render() {
		return (
			<>
				<button
					onClick={() => {
						this.setState({
							isOnHomePage: !this.state.isOnHomePage,
						});
					}}
				>
					Go to {this.state.isOnHomePage ? "Single" : "Home"}Page
				</button>
				
				{this.state.isOnHomePage ? <Homepage /> : <SinglePage />}
			</>
		);
	}
}

export default App;
