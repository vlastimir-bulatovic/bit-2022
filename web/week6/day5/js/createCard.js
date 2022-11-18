function createCard(element,wrapper) {
	// create div to contain our card-link
	let div = document.createElement("div");
	div.classList.add("col-6", "col-md-4", "col-lg-3", "py-3");

	// our card-link
	let card = document.createElement("a");
	card.classList.add("card");
	//href for show info page
	card.href = `./show-info.html?id=${element.id}&name=${element.name}`;
	div.append(card);

	// create image
	let image = document.createElement("img");
	image.src = element.image ? element.image.medium : `https://place-hold.it/310x430`;
	card.append(image);

	// add name of movie
	let parag = document.createElement("p");
	parag.innerText = element.name;
	parag.classList.add("px-3", "py-2", "mb-0");
	card.append(parag);

	wrapper.append(div);
}
