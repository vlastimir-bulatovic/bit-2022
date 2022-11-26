// note that unlike PUT, PATCH will only update fields that we send

// data that we sending
let data = {
	title: "Testing PATCH",
};

// our url
const url = "https://jsonplaceholder.typicode.com/users/";
const id = 10;

const request = new XMLHttpRequest();

request.open("PUT", url + id); // method of our request (PATCH) na our url
request.setRequestHeader("Content-type", "application/json"); // setting header
request.send(JSON.stringify(data)); // body data type must match "Content-Type" header

// do something with response
request.onload = function () {
	if (request.status === 200) {
		console.log("Success!");
	}
};
