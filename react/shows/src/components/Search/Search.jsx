import React, { useState } from "react";
import "./search.scss";

function Search({ filterShows, numberOfShows }) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<div className="col-12 search">
				<div className="row">
					<div className="col-12 col-md-9 col-xl-10">
						<input
							className="w-100 py-1 px-3 rounded-top"
							type="search"
							value={searchQuery}
							onChange={(event) => {
								setSearchQuery(event.target.value);
								filterShows(event.target.value);
							}}
							placeholder="Search"
						/>
					</div>

					<span className="col-3 col-xl-2 d-none d-md-inline-block text-end">
						<b>Results</b>: {numberOfShows}
					</span>
				</div>
			</div>
		</>
	);
}

export default Search;
