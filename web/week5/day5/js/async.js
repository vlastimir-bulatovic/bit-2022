// Async functions will wait for sync functions to be executed and only then will they start their execution 

// setTimeout

// console.log("Cao");

// setTimeout(() => {
//     console.log("Kako si?");

//     // after 12(5 + 7) seconds will be executed
//     setTimeout(() => {
// 		console.log("Stvarno, kako si?");
// 	}, 7000);
// }, 5000);

// console.log("Cao ponovo!");



// when setTimeout(callback, timer) have second parameter timer = 0 -> this function will wait 
// for other console.log to be execute and only then will it be executed

// setTimeout(() => {
// 	console.log("Kako si?");
// }, 0);

// console.log("Cao ponovo!");

// after 3 second will return us back to page where we came from.
// setTimeout(()=> {
//     window.history.back(); 
// }, 3000)


// setInterval

// this will repeat it self every 1000ms or 1s 
// setInterval(() => {
//     console.log("Hello hello!");
// }, 1000);