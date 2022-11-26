// our api url
const url = "https://dog.ceo/api/breeds/image/random";

// fetch method available only in web browser (don't try with codeRunner)
// fetch with get method have one required parameter (url) and one optional parameter
fetch(url) // fetch returns a promise
	// this then will be executed after promise is resolved
	// we need to convert our data to object (from JSON -> object)
	.then((res) => res.json())

	// here we can do something with our data if status code ok
	.then((res) => console.log(res))

	// here we handle errors
	.catch((error) => console.log(error));

// --------------//

// we can write our code this way too

// save response(this is promise)
const response = fetch(url);

// after promise is resolved convert json to object
const responseData = response.then((res) => res.json());

// handle response (if all good)
responseData.then((data) => console.log(data));

// handle response error (if something went wrong)
responseData.catch((error) => console.log(error));

// --------------//

// Multiple  requests first way
const response1 = fetch(url);
const response2 = fetch(url);
const response3 = fetch(url);

Promise.all([response1, response2, response3]).then((values) => {
	let allData = [];

	values.forEach((element) =>
		// do something with each individual request data
		element.json().then((res) => (allData = [...allData, res]))
	);

	// do something with data combined
	setTimeout(() => {
		console.log(allData);
	}, 1000);
});

//  ---------------------- //

// single request with async await
async function getData() {
	const url = "https://dog.ceo/api/breeds/image/random";

	const response = await fetch(url); // make request

	const data = await response.json(); // turn json response to javascript object

	// do stuff with the data, like updating state in a frontend framework
	console.log(data);
}

getData();

//  ---------------------- //

// multiple request with async await
async function getMultipleData() {
	const url1 = "https://dog.ceo/api/breeds/image/random";
	const url2 = "https://dog.ceo/api/breeds/image/random";

	const response1 = await fetch(url1);
	const data1 = await response1.json();

	// downside of this is that execution of function is paused until first request is finished
	const response2 = await fetch(url2);
	const data2 = await response2.json();

	// do what you want with data1 and data2 here
	console.log(data1, data2);
}

getMultipleData();

//  ---------------------- //

// multiple request with async await asynchronously
async function getMultipleDataAsynchronously() {
	const url1 = "https://dog.ceo/api/breeds/image/random";
	const url2 = "https://dog.ceo/api/breeds/image/random";

	const responses = await Promise.all([fetch(url1), fetch(url2)]);

	const data1 = await responses[0].json();
	const data2 = await responses[1].json();

	// do what you want with data1 and data2 here
	console.log(data1, data2);
}

getMultipleDataAsynchronously();
