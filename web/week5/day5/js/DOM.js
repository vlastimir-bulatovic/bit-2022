// DOM 









// node 
// when we select some element via js we actually select node of that element
// every node in js is object 
// only with node can we manipulate with js (change class, content etc.)
var btn = document.getElementById("someId"); // node selected


// methods to select only one element 
// it will return first element from the top

document.getElementById("someID"); // receive id value 
document.querySelector("ul > li"); // receive css selectors


// methods to select multiple elements as a html collection
document.getElementsByTagName("p"); // select all p elements on page
document.getElementsByClassName("someClass"); // select all element with class someClass
document.querySelectorAll("ul>li"); // select all li elements li ul 


var orderedList = document.querySelectorAll("ul > li");

for(var i =0; i< orderedList.length; i++) {
    // orderedList[i] -> <li></li>
    orderedList[i].textContent = "JS Magic";

    // set class to our element
    orderedList[i].className = "box";
}

