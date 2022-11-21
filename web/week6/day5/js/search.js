const searchWrapper = document.querySelector("#showWrapper");
const headerWrapper = document.querySelector("header  nav>div");

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
const searchRecommend = document.createElement("ul");
searchRecommend.classList.add("p-3", "d-none");
headerWrapper.append(searchRecommend);
search.addEventListener("keyup", (event) => {
	if (event.key === "Enter" || event.key === "Backspace") {
		searchRecommend.classList.add("d-none", "nesto");
		searchRecommend.innerHTML = "";
		return;
	}

	const query = search.value;
	searchRecommend.innerHTML = "";
	query
		? searchRecommend.classList.remove("d-none")
		: searchRecommend.classList.add("d-none");
	fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
		.then((res) => res.json())
		.then((data) => {
			const shows = data.slice(0, 10);

			shows.forEach((element) => {
				searchRecommend.innerHTML += `<li><a href=\"./show-info.html?id=${element.show.id}&name=${element.show.name}\">${element.show.name}</a></li>`;
			});
		})
		.catch((error) => {
			console.log(error);
		});
});

search.addEventListener("change", () => {
	const query = search.value;
	searchRecommend.classList.add("d-none", "nesto");
	searchRecommend.innerHTML = "";

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
