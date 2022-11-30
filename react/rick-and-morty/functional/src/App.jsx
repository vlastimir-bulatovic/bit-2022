import React, { Component } from "react";
import "./app.css";
import Header from "./components/Header/Header";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import HomePage from "./pages/HomePage/HomePage";

export class App extends Component {
	constructor(props) {
		super(props);

		// bind methods to constructor
		this.getCharacters = this.getCharacters.bind(this);
		this.goToCharacterProfile = this.goToCharacterProfile.bind(this);
		this.goToHomePage = this.goToHomePage.bind(this);
		this.changePage = this.changePage.bind(this);

		this.state = {
			data: [],
			isCardClicked: false,
			currentCharacter: {},
			currentPage: 1,
		};
	}

	getCharacters() {
		fetch(
			`https://rickandmortyapi.com/api/character/?page=${this.state.currentPage}`
		)
			.then((res) => res.json())
			.then((res) => this.setState({ data: res.results }))
			.catch((error) => console.log(error));
	}

	goToCharacterProfile(data) {
		this.setState({ currentCharacter: data, isCardClicked: true });
	}

	goToHomePage() {
		this.setState({ currentCharacter: {}, isCardClicked: false });
	}

	changePage(pageNumber) {
		this.setState({ currentPage: pageNumber });
	}

	// only on first render
	componentDidMount() {
		this.getCharacters();
	}

	// every time that state or props of this component change
	componentDidUpdate(prevProps, prevState) {
		// always need conditions, if condition is not added infinite loop will be

		if (prevState.currentPage !== this.state.currentPage)
			this.getCharacters();
	}

	render() {
		return (
			<>
				<Header methodGoToHomePage={this.goToHomePage} />

				{this.state.isCardClicked ? (
					<CharacterPage
						characterData={this.state.currentCharacter}
					/>
				) : (
					<HomePage
						methodCharacterProfile={this.goToCharacterProfile}
						methodChangePage={this.changePage}
						currentPage={this.state.currentPage}
						pages={this.state.pages}
						characters={this.state.data}
					/>
				)}
			</>
		);
	}
}

export default App;
