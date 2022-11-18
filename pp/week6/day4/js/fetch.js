const nekiDiv = document.createElement("div");
document.body.prepend(nekiDiv);
nekiDiv.classList.add("nekiDiv");

function handleRequest() {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then((odgovor1) => odgovor1.json())
		.then((odgovor2) => napraviMiSliku(odgovor2.message));
}

const btn = document.createElement("button");
btn.textContent = "SEND";
nekiDiv.append(btn);
btn.addEventListener("click", handleRequest);
const div = document.createElement("div");
nekiDiv.append(div);

function napraviMiSliku(slika) {
	const img = document.createElement("img");
	div.innerHTML = "";
	img.setAttribute("src", slika);
	div.append(img);
}
