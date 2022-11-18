const root = document.querySelector("#root");

const div = document.createElement("div");
div.classList.add("img-wrapper");
root.append(div);  

const select = document.createElement("select");
root.prepend(select);

// const selectBreed = document.createElement("select");
// root.prepend(selectBreed);

// fetch("https://dog.ceo/api/breeds/list/all")
// 	.then((res) => res.json())
// 	.then((data) => {
// 		let breeds = data.message;
//         console.log(breeds)
//         for(const property in breeds){
//             let option = document.createElement("option");
// 			option.value = property;
// 			option.innerText = property;
// 			selectBreed.append(option);
//         }
// 	})
// 	.catch((error) => console.log(error));

// selectBreed.addEventListener("change", subBread); 


fetch(`https://dog.ceo/api/breed/hound/list`)
	.then((res) => res.json())
	.then((data) => {
		let breeds = data.message;
		breeds.forEach((element) => {
			let option = document.createElement("option");
			option.value = element;
			option.innerText = element;
			select.append(option);
		});
	})

	.catch((error) => console.log(error));

select.addEventListener("change", handleRequest);


function handleRequest() {
	const req = new XMLHttpRequest();
    // const breed = selectBreed.value;
    let subbreed = select.value;

	req.open("GET", `https://dog.ceo/api/breed/hound/${subbreed}/images/random`);
	req.send();
	req.onload = function () {
		if (req.status >= 200 && req.status < 400) {
			handleResponse(req.responseText);
		} else if (req.status < 500) {
			console.log(`Frontend error: ${req.responseText}`);
		} else if (req.status < 600) {
			console.log(`Backend error: ${req.responseText}`);
		}
	};
}

function handleResponse(data) {
	let parsedData = JSON.parse(data);
	div.innerHTML = `<div><img src="${parsedData.message}"></div>`;
}