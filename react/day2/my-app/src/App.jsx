import { Component } from "react";

import CounterPage from "./pages/CounterPage/CounterPage";
import ImagePage from "./pages/ImagePage/ImagePage";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./app.css";

import Button from "./components/Button/Button";
import { COUNTER_PAGE, IMAGE_PAGE } from "./constants";

export class App extends Component {
	constructor(props) {
		super(props);

		// bind methods to constructor so we can use them in render
		this.changePage = this.changePage.bind(this);
		this.increaseCounter = this.increaseCounter.bind(this);
		this.decreaseCounter = this.decreaseCounter.bind(this);
		this.resetCounter = this.resetCounter.bind(this);

		this.state = {
			currentPage: COUNTER_PAGE,
			counter: 0,
		};
	}

	increaseCounter = function () {
		this.setState({ counter: this.state.counter + 1 });
	};

	decreaseCounter = function () {
		this.setState({ counter: this.state.counter - 1 });
	};

	resetCounter = function () {
		this.setState({ counter: 0 });
	};

	changePage = function () {
		let page = this.state.currentPage;

		page = page === COUNTER_PAGE ? IMAGE_PAGE : COUNTER_PAGE;

		this.setState({ currentPage: page });
	};

	render() {
		return (
			<>
				<Header />

				<div>
					<Button method={this.changePage} text="Change page" />
				</div>

				<main>
					{/* we call this conditional rendering. */}

					{/* Only if first part (before && operator) is true will page render */}
					{this.state.currentPage === COUNTER_PAGE && (
						<CounterPage
							// this way we sand props to our child components!!!
							counter={this.state.counter}
							methodIncrement={this.increaseCounter}
							methodDecrement={this.decreaseCounter}
							methodReset={this.resetCounter}
						/>
					)}

					{/* Only if first part (before && operator) is true will page render */}
					{this.state.currentPage === IMAGE_PAGE && <ImagePage />}
				</main>

				<Footer />
			</>
		);
	}
}

export default App;
