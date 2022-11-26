// data that we sending
let data = {
	title: "Testing POST",
	body: "Something fun",
};

// our url
const url = "https://jsonplaceholder.typicode.com/users";

const request = new XMLHttpRequest();

request.open("POST", url); // method of our request (POST) na our url
request.setRequestHeader("Content-type", "application/json"); // setting header
request.send(JSON.stringify(data)); // body data type must match "Content-Type" header

// do something with response
request.onload = function () {
	if (request.status === 201) {
		console.log("Data posted successfully!");
	}
};
