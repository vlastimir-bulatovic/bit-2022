// note that unlike PUT, PATCH will only update fields that we send

const url = "https://jsonplaceholder.typicode.com/posts/";
const id = 11;
// this is data that we want to send
const data = {
	title: "delectus aut autem",
};
// fetch method available only in web browser (don't try with codeRunner)
// fetch with post method have two required parameter (url) and one object
fetch(url + id, {
	method: "PATCH",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(data), // body data type must match "Content-Type" header
}) // fetch returns a promise
	// this then will be executed after promise is resolved
	// we need to convert our response message to object (from JSON -> object)
	.then((res) => res.json())

	// here we can do something with our response if status code ok
	.then((res) => console.log(res))

	// here we handle errors message
	.catch((error) => console.log(error));

// -------------------------------------- //

// PATCH with async await
async function patchData(id) {
	const url = "https://jsonplaceholder.typicode.com/posts/" + id;

	const requestOptions = {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ title: "Fetch PATCH Request Example" }),
	};

	const response = await fetch(url, requestOptions);
	const data = await response.json();

	console.log(data);
}

patchData(id);

// -------------------------------------- //
// second parameter of our fetch is object known as "init"
// Init object is the options with which you can initialize the fetch methods

// commonly used options

// method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
// headers: {
//   'Content-Type': 'application/json'
//   // 'Content-Type': 'application/x-www-form-urlencoded',
// },
// body: JSON.stringify(data) // body data type must match "Content-Type" header

// mode: 'cors', // no-cors, *cors, same-origin
// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// credentials: 'same-origin', // include, *same-origin, omit
// redirect: 'follow', // manual, *follow, error
// referrerPolicy: 'no-referrer', // no-referrer, *client
