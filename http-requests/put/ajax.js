// note that with PUT we need to send the same object as one that is currently stored
// because put will update all properties

// data that we sending
let data = {
	title: "Testing PUT",
	body: "Something fun",
};

// our url
const url = "https://jsonplaceholder.typicode.com/users";

const request = new XMLHttpRequest();

request.open("PUT", url); // method of our request (PUT) na our url
request.setRequestHeader("Content-type", "application/json"); // setting header
request.send(JSON.stringify(data)); // body data type must match "Content-Type" header

// do something with response
request.onload = function () {
	if (request.status === 201) {
		console.log("Data posted successfully!");
	}
};
