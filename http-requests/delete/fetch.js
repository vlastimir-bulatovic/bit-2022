const url = "https://jsonplaceholder.typicode.com/posts/";
const id = 200;
// fetch method available only in web browser (don't try with codeRunner)
// fetch with post method have two required parameter (url) and one object
fetch(url + id, {
	method: "DELETE",
}) // fetch returns a promise
	// this then will be executed after promise is resolved
	// we need to convert our response msseage to object (from JSON -> object)
	.then((res) => res.json())

	// here we can do something with our response if status code ok
	.then((res) => console.log(res))

	// here we handle errors message
	.catch((error) => console.log(error));

// -------------------------------------- //

// DELETE with async await
async function deleteData(id) {
	const url = "https://jsonplaceholder.typicode.com/posts/";

	const requestOptions = {
		method: "DELETE",
	};
	const response = await fetch(url + id, requestOptions);
	const message = await response.json();

	console.log(message);
}

deleteData(id);

// -------------------------------------- //
// second parameter of our fetch is object known as "init"
// Init object is the options with which you can initialize the fetch methods

// commonly used options

// method: 'DELETE', // *GET, POST, PUT, DELETE, etc.

// mode: 'cors', // no-cors, *cors, same-origin
// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// credentials: 'same-origin', // include, *same-origin, omit
// redirect: 'follow', // manual, *follow, error
// referrerPolicy: 'no-referrer', // no-referrer, *client
