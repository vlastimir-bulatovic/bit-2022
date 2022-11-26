const url = "https://dog.ceo/api/breeds/image/random";

// Creating Our XMLHttpRequest object
const httpRequest = new XMLHttpRequest();

// Making our connection
httpRequest.open("GET", url);

// function execute after request is successful
httpRequest.onreadystatechange = function () {
	// this is a pointer to our httpRequest object!!!!
	if (this.readyState === 4 && this.status === 200) {
        // here we handle data
		console.log(this.responseText);
	}
};

// Sending our request
httpRequest.send();
