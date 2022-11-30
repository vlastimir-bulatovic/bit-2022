import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import "./homePage.css";

export class HomePage extends Component {
	render() {
		return (
			<main>
				<h1>Character List</h1>

				<div className="card-wrapper">
					{this.props.characters.map((element) => (
						<Card
							methodCharacterProfile={
								this.props.methodCharacterProfile
							}
							character={element}
						/>
					))}
				</div>

				{!!this.props.characters.length && (
					<Pagination
						currentPage={this.props.currentPage}
						methodChangePage={this.props.methodChangePage}
						pages={this.props.pages}
					/>
				)}
			</main>
		);
	}
}

export default HomePage;
