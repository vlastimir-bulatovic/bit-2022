const title = document.querySelector(`input[name="title"]`);
const description = document.querySelector(`input[name="description"]`);
const author = document.querySelector(`input[name="author"]`);
const tags = document.querySelector(`input[name="tags"]`);
const thumbnails = document.querySelector(`input[name="title"]`);
const shortDescription = document.querySelector(`input[name="intro"]`);

const btn = document.querySelector("button");
const url = "https://637becb872f3ce38ea97cffb.mockapi.io/articles";

function publishBlog() {
	const data = {
		title: title.value,
		description: description.value,
		releaseDate: new Date(),
		author: author.value,
		tags: tags.value.split(","),
		thumbnails: thumbnails.value,
		shortDescription: shortDescription.value,
	};

	fetch(url, {
		method: "POST",
        headers: {
            "Content-type": "application/json"
        },
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((res) => console.log(res))
		.catch((error) => console.log(error));
        
}

btn.addEventListener("click", () => {
	publishBlog();
});
