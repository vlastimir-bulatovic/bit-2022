import React, { Component } from "react";
import "./login.css";

export class Login extends Component {
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
				<p>Login</p>
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
							this.props.handleLogin(
								this.state.username,
								this.state.password
							);
						}}
					>
						Login
					</button>
				</div>

				<div>
					<button onClick={() => this.props.goToRegister(true)}>
						Go To Register
					</button>
				</div>
			</div>
		);
	}
}

export default Login;
