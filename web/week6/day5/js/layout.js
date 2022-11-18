function createHeader() {
	const header = document.createElement("header");
	header.classList.add("position-fixed", "w-100");

	const container = document.createElement("div");
	container.classList.add("container", "py-3");
	header.append(container);

	const nav = document.createElement("nav");
	nav.classList.add("d-flex", "justify-content-between");
	container.append(nav);

	const brand = document.createElement("a");
	brand.textContent = `BitShow`;
	brand.href = "./";
	nav.append(brand);

	const search = document.createElement("input");
	search.type = `search`;
	search.placeholder = `Search...`;
	search.id = `search`;
	nav.append(search);

	document.body.prepend(header);
}

function createFooter() {
	const footer = document.createElement("footer");
	footer.classList.add("text-center", "py-4");
	footer.innerHTML = `Copyright &copy; Bit Student ${new Date().getFullYear()}`;

	document.body.append(footer);
}

createHeader();
createFooter();
