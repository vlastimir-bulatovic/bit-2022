function generatePagination(currentPage, wrapper, limit = 42) {
	currentPage = Number(currentPage);

	if (currentPage <= 3) {
		for (let i = 1; i <= 5; i++) {
			btn(i, wrapper);
		}
	} else if (currentPage < limit - 2) {
		for (let i = currentPage - 2; i <= currentPage + 2; i++) {
			btn(i, wrapper);
		}
	} else if (currentPage <= limit) {
		for (let i = limit - 4; i <= limit; i++) {
			btn(i, wrapper);
		}
	}

	if (currentPage > 0) {
		const back = document.createElement("a");
		back.innerHTML = "<img  class='img-fluid' src='./assets/back.png' />";
		back.classList.add("btn", "mx-1", "p-3");
		back.href = `./index.html?page=${currentPage - 1}`;
		wrapper.prepend(back);
	}

	if (currentPage < 42) {
		const next = document.createElement("a");
		next.innerHTML = "<img  class='img-fluid' src='./assets/next.png' />";
		next.classList.add("btn", "mx-1", "p-3");
		next.href = `./index.html?page=${currentPage + 1}`;
		wrapper.append(next);
	}

	function btn(pageIndex, wrapper) {
		const page = document.createElement("a");
		page.innerText = pageIndex;
		page.classList.add("btn", "mx-1", "p-3");
		page.href = `./index.html?page=${pageIndex}`;
		wrapper.append(page);
	}
}
