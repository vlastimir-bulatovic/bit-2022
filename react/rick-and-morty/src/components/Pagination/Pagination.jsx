import React, { Component } from "react";
import "./pagination.css";
export class Pagination extends Component {
	constructor(props) {
		super(props);

		this.changePagination = this.changePagination.bind(this);

		this.state = {
			pages: [1, 2, 3, 4, 5],
		};
	}

	changePagination(pageNumber) {
		let pages = [1, 2, 3, 4, 5];

		if (pageNumber >= 3 && pageNumber < 40) {
			pages = [
				pageNumber - 2,
				pageNumber - 1,
				pageNumber,
				pageNumber + 1,
				pageNumber + 2,
			];
		} else if (pageNumber >= 40) {
			pages = [38, 39, 40, 41, 42];
		}

		this.props.methodChangePage(pageNumber);

		this.setState({ pages: pages });

		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	componentDidUpdate(prevProps, prevState) {}

	render() {
		return (
			<div className="pagination">
				{this.props.currentPage > 1 && (
					<button
						onClick={() => {
							this.changePagination(this.props.currentPage - 1);
						}}
					>
						back
					</button>
				)}

				<div className="button-group">
					{this.state.pages.map((element) => (
						<button
							className={
								this.props.currentPage === element
									? "active"
									: ""
							}
							onClick={() => this.changePagination(element)}
						>
							{element}
						</button>
					))}
				</div>

				{this.props.currentPage < 42 && (
					<button
						onClick={() => {
							this.changePagination(this.props.currentPage + 1);
						}}
					>
						next
					</button>
				)}
			</div>
		);
	}
}

export default Pagination;
