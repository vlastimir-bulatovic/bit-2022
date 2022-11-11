// we can get our saved data from local storage with method .getItem("key");

var answer = localStorage.getItem("clicked");

// we can create new HTML element with method .createElement("name of the element");
var parag = document.createElement("p");

// we can set and get content from our element with property .textContent
parag.textContent = "The clicked button was " + answer;

// we append our element to our body
document.body.append(parag);