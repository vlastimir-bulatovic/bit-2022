const nekiDiv = document.createElement("div");
document.body.prepend(nekiDiv);
nekiDiv.classList.add("nekiDiv");
const request = new XMLHttpRequest();
let dinosaur;
function handleRequest() {
	
    // request.open("GET", "https://date.nager.at/api/v3/AvailableCountries");
	// request.send();
	// request.onload = function(){
	//   if(request.status >= 200 && request.status < 400){
	//     dinosaur = JSON.parse(request.responseText);
	//   }
	// }

	fetch("https://date.nager.at/api/v3/AvailableCountries")
		.then((res) => res.json())
		.then((res) => handleResponse(res));
}


const btn = document.createElement("button");
btn.textContent = "SEND";
nekiDiv.append(btn);

function handleResponse(data) {
	data.forEach((e) => {
		nekiDiv.innerHTML += `<h1>${e.name}</h1>`;
	});
}
btn.addEventListener("click", handleRequest);
