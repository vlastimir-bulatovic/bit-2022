// (function() {
//     var firstListFirsItem = document.querySelector("div> ul > li");

// 	var SecondListFirstItem = document.querySelector("div:nth-child(2) > ul > li");

// 	setTimeout(() => {
// 		firstListFirsItem.classList.remove("active");
// 	}, 2000);

// 	setTimeout(() => {
// 		SecondListFirstItem.classList.add("active");
// 	}, 4000);
// })();

var headingOne = document.querySelector("h1");
var headingTwo = document.querySelector("h2");
var listItems = document.querySelectorAll("ul li");

setTimeout(() => {  
    // headingOne.classList.add("bg-red");
    headingTwo.classList.add("hidden");
    
    
    for(var i =0; i< listItems.length; i++) {
        listItems[i].innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZ6RqJpeDgiIbR7xFjTgKJldSVkLIEneBEA&usqp=CAU' width='100'>";
    }

    
}, 1000)



var randomBG = setInterval(() => {

    headingOne.style = `background-color: rgb( ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)} )`;

},3000);


var stop = document.getElementById("stopBtn");
stop.addEventListener('click', () => {
    clearInterval(randomBG);
})