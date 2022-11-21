function handleCards(cardInfo, wrapper) {
	const cardWrapper = document.createElement("div");
	cardWrapper.classList.add(
		"col-12",
		"col-sm-6",
		"col-md-4",
		"col-lg-3",
		"py-3"
	);
	const card = document.createElement("div");
	card.classList.add("card", cardInfo.status.toLowerCase());
	card.dataset.id = cardInfo.id;
	cardWrapper.append(card);

	const img = document.createElement("img");
	img.src = cardInfo.image;
	img.classList.add("img-fluid");
	card.append(img);

	const button = document.createElement("button");
	button.textContent = cardInfo.status;
	card.append(button);

	button.addEventListener("click", () => {
		modalShow(card);
	});

	wrapper.append(cardWrapper);
}
