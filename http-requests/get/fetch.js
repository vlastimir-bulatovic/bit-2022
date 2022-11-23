const url = "https://crudapi.co.uk/api/v1/probe";
const token = "T_4ALB-j8HqcTu3kdTZujfhvGqBZxAXno7NXcH8jA9sH3obrNg";
fetch(url, {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	},
})
	.then((res) => res.json())
	.then((res) => console.log(res))
	.catch((error) => console.log(error));
