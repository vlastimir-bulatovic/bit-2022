const promise1 = fetch("https://randomuser.me/api/?gender=female&results=10");
const promise2 = fetch("https://randomuser.me/api/?gender=male&results=10");
const promise3 = fetch("https://randomuser.me/api/?gender=female&results=10");
const promise4 = fetch("https://randomuser.me/api/?gender=male&results=10");

let users = [];

// resolve all promesise
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
	console.log(values);
	values.forEach((el) =>
		el.json().then((res) => (users = [...users, ...res.results]))
	);
});

setTimeout(() => {
	console.log(users);
}, 5000);
