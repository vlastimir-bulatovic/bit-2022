// const btn = document.querySelector("button");
// const cancel = document.querySelector("button#cancel");
// let isDisabled = false;

// btn.addEventListener("click", () => {
//     if(!isDisabled) document.querySelector("body").classList.toggle("bg-blue");
// });

// cancel.addEventListener("click", () => {
// 	isDisabled = true;
// });

// const messages =  ["hello world", "Learning JavaScript"];

// function publishMessage(event) {

//     // object created for every event
//     console.log(event);

//     // current target of our event
//     console.log(event.currentTarget);
	
//     // target of our event
//     console.log(event.target);
    
//     // x coordinates of our cursor
// 	console.log(event.clientX);

//     // y coordinates of our cursor
// 	console.log(event.clientY);


//     if (!input.value) return;
    
//     messages.push(input.value);

//     let parag = document.createElement("p");
// 	parag.textContent = input.value;
// 	box.append(parag);
//     input.value = "";
// }

// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const box = document.querySelector(".chatRoom");

// messages.forEach( (el) => {
//     let parag = document.createElement("p");
//     parag.textContent = el;
//     box.append(parag);
// });



// btn.addEventListener("click",publishMessage);

// input.addEventListener("keydown", (event)=> {
    
//     if(event.key === "Enter") publishMessage(event);
// })


