function modalShow(card) {
	const id = currentCharacters.findIndex((character, index) => {
		if (character.id == card.dataset.id) return true;
	});

	const modalBody = document.querySelector(".modal-body");
	modalBody.innerHTML = "";

	const img = document.createElement("img");
	img.src = currentCharacters[id].image;
	img.classList.add("img-fluid", "rounded-circle", "mb-5");

	modalBody.append(img);

	const info = document.createElement("div");
	info.innerHTML = `
		<p>Name: ${currentCharacters[id].name}</p>
		<p>Gender: ${currentCharacters[id].gender}</p>
		<p>Species: ${currentCharacters[id].species}</p>
		<p>Status: ${currentCharacters[id].status}</p>
		<p>Current Location: ${currentCharacters[id].location.name}</p>
		<p>Origin: ${currentCharacters[id].origin.name}</p>
	`;
	modalBody.append(info);

	const infoPage = document.createElement("a");
	infoPage.classList.add("btn");
	infoPage.textContent = "More";
	infoPage.href = `./character.html?id=${currentCharacters[id].id}&name=${currentCharacters[id].name}`;

	modalBody.append(infoPage);

	myModal.classList.add("show", currentCharacters[id].status.toLowerCase());
}

closeMyModal.addEventListener("click", () => myModal.classList.remove("show"));
