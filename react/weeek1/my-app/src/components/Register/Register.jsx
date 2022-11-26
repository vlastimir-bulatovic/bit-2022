import React, { Component } from "react";
import "./register.css";

export class Register extends Component {
	constructor(props) {
		super(props);

		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);

		this.state = {
			username: "",
			password: "",
		};
	}

	handleUsername(event) {
		this.setState({ username: event.target.value });
	}

	handlePassword(event) {
		this.setState({ password: event.target.value });
	}

	render() {
		return (
			<div id="login">
				<p>Register</p>
				<div>
					<p>Username:</p>
					<input
						onChange={this.handleUsername}
						type="text"
						value={this.state.username}
					/>
				</div>
				<div>
					<p>Password:</p>
					<input
						onChange={this.handlePassword}
						type="password"
						value={this.state.password}
					/>
				</div>
				<div>
					<button
						onClick={() => {
							this.props.handleRegister(
								this.state.username,
								this.state.password
							);
						}}
					>
						Register
					</button>
				</div>

				<div>
					<button onClick={() => this.props.goToRegister(false)}>
						Go To Login
					</button>
				</div>
			</div>
		);
	}
}

export default Register;
