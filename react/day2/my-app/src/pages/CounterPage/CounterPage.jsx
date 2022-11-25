import { Component } from "react";

import "./counterPage.css";

import Button from "../../components/Button/Button";

export class Homepage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let sign = "",
			isOddOrEven = "";
		this.props.counter &&
			(sign = this.props.counter % 2 === 0 ? "paran" : "neparan");
		this.props.counter &&
			(isOddOrEven = this.props.counter > 0 ? "pozitivan" : "negativan");

		return (
			<div id="homepage">
				<h2>Counter: {this.props.counter}</h2>
				<p>{sign}</p>
				<p>{isOddOrEven}</p>
				{/* as a button */}
				<div>
					<button onClick={this.props.methodIncrement}>
						Increase(homepage)
					</button>
					<button onClick={this.props.methodDecrement}>
						Decrease(homepage)
					</button>
				</div>

				{/* As a component, we can send methods as a property */}
				<div>
					<Button
						text="increment"
						method={this.props.methodIncrement}
					/>
					<Button
						text="decrement"
						method={this.props.methodDecrement}
					/>
				</div>

				<div>
					<Button
						text="reset"
						method={this.props.methodReset}
					/>
				</div>
			</div>
		);
	}
}

export default Homepage;
