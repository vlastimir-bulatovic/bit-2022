let page = new URLSearchParams(location.search).get("page")
	? new URLSearchParams(location.search).get("page")
	: 0;

const charactersRow = document.querySelector("#characters > .row");
let currentCharacters;

const myModal = document.querySelector("#modal");
const closeMyModal = document.querySelector("#modal #close");

const paginationWrapper = document.querySelector("#pagination");

fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
	.then((res) => res.json())
	.then((res) => {
		currentCharacters = res.results;
		currentCharacters.forEach((element) =>
			handleCards(element, charactersRow)
		);
	})
	.catch((error) => console.log(error));

generatePagination(page, paginationWrapper);
