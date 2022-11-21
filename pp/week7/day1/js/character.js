const id = new URLSearchParams(location.search).get("id");

const profileWrapper = document.querySelector("#profile");

fetch(`https://rickandmortyapi.com/api/character/${id}`)
	.then((res) => res.json())
	.then((res) => {
		characterProfile(res, profileWrapper);
	})
	.catch((error) => console.log(error));

function characterProfile(characterData, wrapper) {
	document.querySelector("title").textContent += characterData.name;

	const imgWrapper = document.createElement("div");
	imgWrapper.classList.add("col-12", "col-md-8", "col-xl-4", "text-center");
	wrapper.append(imgWrapper);

	const img = document.createElement("img");
	img.src = characterData.image;
	img.classList.add("img-fluid", "w-100");
	imgWrapper.append(img);

	const dataWrapper = document.createElement("div");
	dataWrapper.classList.add("col-12", "col-xl-6", "p-lg-5", "p-3");
	wrapper.append(dataWrapper);

	const name = document.createElement("h2");
	name.textContent = `Name: ${characterData.name}`;
	dataWrapper.append(name);

	const gender = document.createElement("h3");
	gender.textContent = `Gender: ${characterData.gender}`;
	dataWrapper.append(gender);

	const location = document.createElement("h3");
	location.textContent = `Current location: ${characterData.location.name}`;
	dataWrapper.append(location);

	const origin = document.createElement("h3");
	origin.textContent = `Origin: ${characterData.origin.name}`;
	dataWrapper.append(origin);

	const species = document.createElement("h3");
	species.textContent = `Species: ${characterData.species}`;
	dataWrapper.append(species);

	const status = document.createElement("h3");
	status.textContent = `Status: ${characterData.status}`;
	dataWrapper.append(status);

	episodeHandle(characterData.episode, wrapper);
}

function episodeHandle(episodes, wrapper) {
	let trimmedEpisodes = episodes.map((e) =>
		e.slice(e.lastIndexOf("/") + 1, e.length)
	);

	trimmedEpisodes = trimmedEpisodes.join(",");

	fetch(`https://rickandmortyapi.com/api/episode/${trimmedEpisodes},`)
		.then((res) => res.json())
		.then((res) => {
			let arrayLength = typeof res === "array" ? res.length : 1;
			const episodeWrapper = document.createElement("div");
			episodeWrapper.classList.add("col-12", "py-3");
			episodeWrapper.innerHTML = `<h3>Appears in episode${
				arrayLength > 1 ? `s` : ``
			}(${arrayLength}) :</h3>`;
			wrapper.append(episodeWrapper);

			res.forEach((element) => {
				const link = document.createElement("a");
				link.textContent = `Name: ${element.name} \n ${element.episode} \nAired:${element.episode} `;
				link.href = element.url;
				link.classList.add("me-3", "my-1", "d-inline-block");
				episodeWrapper.append(link);
			});
		})
		.catch((error) => console.log(error));
}
