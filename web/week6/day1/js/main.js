// const data = [
// 	{
// 		name: "Ana",
// 		age: 28,
// 		location: "Belgrade",
// 	},
// 	{
// 		name: "Petar",
// 		age: 27,
// 		location: "Belgrade",
// 	},
// 	{
// 		name: "Uros",
// 		age: 36,
// 		location: "Belgrade",
// 	}
// ];

// let table = document.querySelector("table");

// data.forEach((el) => {
//     let tableRow = document.createElement("tr");
//     for( e of el ){
//         let tableCell = document.createElement("td");
//         tableCell.textContent = e;
//     }
// });

// let box = document.querySelector(".content");
// // create html node
// let parag = document.createElement("p");
// parag.textContent = "Dinamicni parargraf";

// // add node parag to box after box content
// box.append(parag);


// const quotes = ["Nesto lepo", "Slep sam skroz", "Nesto drugo lepo"];

// quotes.forEach((el) => {
//     let quote = document.createElement("p");
//     quote.textContent = el;

//     box.append(quote);
// });

// const list = document.createElement("ol");

// quotes.forEach((el) => {
//     let item = document.createElement("li");
//     item.innerHTML = el;
//     list.append(item);
// });

// box.append(list);



// const seasons = ['spring','summer','fall','winter'];

// let select = document.createElement("select");

// seasons.forEach((el) => {

//     let option = document.createElement("option");
//     option.value=el;
//     option.textContent = el;
//     select.append(option);
// });

// let defaultOption = document.createElement("option");
// defaultOption.value ="";
// defaultOption.textContent = "What is your favorite season?"
// defaultOption.hidden = true;
// defaultOption.selected = true;

// select.prepend(defaultOption);

// box.append(select);



// classList vs className //

// box.className = ""; // Remove all classes from our element box
// box.classList.add("some-class"); // add some-class on our classes 
// box.classList.remove("some-class");// remove some-class of our class
// box.classList.toggle("some-class");// remove if some-class exist if not add some-class to our class list 


