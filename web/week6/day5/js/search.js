const searchWrapper = document.querySelector("#showWrapper");

function searchShows(query) {
	fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
		.then((res) => res.json())
		.then((data) => {
			const shows = data.slice(0, 10);
			searchWrapper.innerHTML = "";

			let title = document.createElement("h1");
			title.textContent = `Results for: ${query}`;
			title.classList.add("col-12", "text-center", "pt-3");
			searchWrapper.prepend(title);
			shows.forEach((element) => {
				createCard(element.show, searchWrapper);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

const search = document.getElementById("search");

search.addEventListener("change", () => {
	const query = search.value;
	if (location.pathname === "/" || location.pathname === "/index.html") {
		query ? searchShows(query) : loadShows();
	} else {
		if (query) {
			searchShows(query);
			wrapperInfo.classList.add("d-none");
			searchWrapper.classList.remove("d-none");
		} else {
			wrapperInfo.classList.remove("d-none");
			searchWrapper.classList.add("d-none");
		}
	}
});
