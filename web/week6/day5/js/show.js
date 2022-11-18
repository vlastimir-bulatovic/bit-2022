const wrapperInfo = document.querySelector("#showInfo");
const showId = new URLSearchParams(location.search).get("id");

function showInfo(showId) {
	fetch(`https://api.tvmaze.com/shows/${showId}`)
		.then((res) => res.json())
		.then((data) => {
			const title = document.createElement("h1");
			title.textContent = data.name;
			title.classList.add("col-12", "text-center", "pt-3");
			wrapperInfo.append(title);

			const imgWrapper = document.createElement("div");
			imgWrapper.classList.add("col-lg-6", "mt-3");

			const img = document.createElement("img");
			img.src = data.image
				? data.image.original
				: `https://place-hold.it/820x1230`;
			img.classList.add("img-fluid");
			imgWrapper.append(img);
			wrapperInfo.append(imgWrapper);

			const extraInfo = document.createElement("div");
			extraInfo.classList.add("col-6", "mt-2");
			wrapperInfo.append(extraInfo);

			const summary = document.createElement("div");
			summary.innerHTML = `<h2>Show details</h2> ${data.summary}`;
			summary.classList.add("col-12", "mt-3");
			wrapperInfo.append(summary);

			const crew = document.createElement("div");
			crew.classList.add("col-12", "mt-3");
			wrapperInfo.append(crew);

			const aka = document.createElement("div");
			aka.classList.add("col-12");
			aka.innerHTML = `<h3>Also known as</h3>`;
			wrapperInfo.append(aka);

			const episodesWrapper = document.createElement("div");
			episodesWrapper.classList.add("col-12");
			wrapperInfo.append(episodesWrapper);

			const episodes = document.createElement("div");
			episodes.classList.add("row", "episodes");
			episodes.innerHTML = `<h3 class="pt-4 col-12">Episodes list</h3>`;
			episodesWrapper.append(episodes);

			allCrew(crew);
			alsoKnownAs(aka);
			episodeList(episodes);
			allSeasons(extraInfo);
			cast(extraInfo);
		})
		.catch((error) => {
			console.log(error);
		});
}

function allSeasons(wrapper) {
	fetch(`https://api.tvmaze.com/shows/${showId}/seasons`)
		.then((res) => res.json())
		.then((res) => {
			const title = document.createElement("h2");
			res.length && (title.innerText = `Seasons(${res.length})`);
			wrapper.append(title);

			const seasons = document.createElement("ul");
			seasons.classList.add("py-3");
			wrapper.append(seasons);

			res.forEach((element) => {
				let season = document.createElement("li");
				season.textContent = `${element.premiereDate} - ${element.endDate}`;
				seasons.append(season);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

function cast(wrapper) {
	fetch(`https://api.tvmaze.com/shows/${showId}/cast`)
		.then((res) => res.json())
		.then((res) => {
			const title = document.createElement("h2");
			res.length && (title.innerText = `Cast(${res.length})`);
			wrapper.append(title);

			const seasons = document.createElement("ul");
			seasons.classList.add("py-3");
			wrapper.append(seasons);
			res.forEach((element) => {
				let season = document.createElement("li");
				season.textContent = `${element.person.name} (${element.character.name})`;
				seasons.append(season);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

function allCrew(wrapper) {
	fetch(`https://api.tvmaze.com/shows/${showId}/crew`)
		.then((res) => res.json())
		.then((res) => {
			const title = document.createElement("h2");
			res.length && (title.innerText = `Crew(${res.length})`);
			wrapper.append(title);
			res.forEach((element) => {
				let crew = document.createElement("a");
				crew.textContent = `${element.person.name} (${element.type})`;
				crew.href = element.person.url;
				crew.classList.add(
					"badge",
					"bg-dark",
					"px-3",
					"py-2",
					"me-3",
					"mb-2"
				);
				wrapper.append(crew);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

function alsoKnownAs(wrapper) {
	fetch(`https://api.tvmaze.com/shows/${showId}/akas`)
		.then((res) => res.json())
		.then((res) => {
			res.forEach((element) => {
				let span = document.createElement("span");
				span.textContent = ` / ${element.name}`;
				wrapper.append(span);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

function episodeList(wrapper) {
	fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
		.then((res) => res.json())
		.then((res) => {
			res.forEach((element) => {
				let episodeWrapper = document.createElement("div");
				episodeWrapper.classList.add(
					"col-6",
					"col-sm-4",
					"col-md-3",
					"col-lg-2",
					"py-3"
				);

				let episode = document.createElement("a");
				episode.href = `${element.url}`;
				episode.title = `${element.summary.replace(
					/(<([^>]+)>)/gi,
					""
				)}`;

				const episodeImage = document.createElement("img");
				episodeImage.src = element.image.medium;
				episodeImage.alt = `${element.name}`;
				episodeImage.classList.add("img-fluid");
				episode.append(episodeImage);

				const episodeName = document.createElement("p");
				episodeName.textContent = `${element.season}x${element.number}`;

				episode.append(episodeName);

				episodeWrapper.append(episode);
				wrapper.append(episodeWrapper);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

showInfo(showId);
