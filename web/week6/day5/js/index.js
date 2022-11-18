const wrapper = document.querySelector("#showWrapper");

function loadShows() {
	fetch("https://api.tvmaze.com/shows")
		.then((res) => res.json())
		.then((data) => {
			wrapper.innerHTML = "";
			let title = document.createElement("h1");
			title.textContent = `Popular shows`;
			title.classList.add("col-12", "text-center", "pt-3");
			wrapper.prepend(title);
			const shows = data.slice(0, 50);
			shows.forEach((element) => {
				// create div to contain our card-link
				createCard(element, wrapper);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

loadShows();
