// our url
const url = "https://jsonplaceholder.typicode.com/users/";
const id = 10; // id of the user that we want to delete
const request = new XMLHttpRequest();

request.open("DELETE", url + `${id}`); // method of our request (DELETE) na our url
request.send();

// do something with response
request.onload = function () {
	if (request.status === 204) {
		console.log("Data posted successfully!");
	}
};
