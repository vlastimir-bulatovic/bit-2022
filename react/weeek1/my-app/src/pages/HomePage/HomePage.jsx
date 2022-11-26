import React, { Component } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import "./homePage.css";

export class HomePage extends Component {
	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.goToRegister = this.goToRegister.bind(this);

		this.state = {
			isLoggedIn: false,
			isLoginBad: false,
			isRegisterPage: false,
		};
	}
	handleLogin(userUsername, userPassword) {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, userUsername, userPassword)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				this.setState({ isLoggedIn: true });
			})
			.catch((error) => {
				console.log("Ups, something went wrong!");
				// const errorCode = error.code;
				// const errorMessage = error.message;
			});
	}
	handleRegister(userUsername, userPassword) {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, userUsername, userPassword)
			.then((userCredential) => {
				// Signed in
				console.log("Success!");
				const user = userCredential.user;
				console.log(user);
				this.setState({ isRegisterPage: false });
			})
			.catch((error) => {
				console.log("Ups, something went wrong!");
				// const errorCode = error.code;
				// const errorMessage = error.message;
			});
	}

	handleLogout() {
		this.setState({
			isLoggedIn: false,
			isLoginBad: false,
			isRegisterPage: false,
		});
	}

	goToRegister(isRegister) {
		this.setState({ isRegisterPage: isRegister });
	}

	render() {
		return (
			<div>
				{this.state.isLoggedIn && (
					<button onClick={this.handleLogout}>LogOut</button>
				)}
				{this.state.isLoggedIn && <div>Great success</div>}
				{this.state.isLoginBad && <div>Bad password or username</div>}
				{!this.state.isLoggedIn && this.state.isRegisterPage && (
					<Register
						handleRegister={this.handleRegister}
						goToRegister={this.goToRegister}
					/>
				)}
				{!this.state.isLoggedIn && !this.state.isRegisterPage && (
					<Login
						handleLogin={this.handleLogin}
						goToRegister={this.goToRegister}
					/>
				)}
			</div>
		);
	}
}

export default HomePage;
