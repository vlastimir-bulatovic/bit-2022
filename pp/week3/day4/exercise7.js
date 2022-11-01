// 1.

// function tellFortune(numOfChildren, name, location, title) {
//     return "You will be a "+title+" in "+location+", and married to "+name+" with "+numOfChildren+" kids.";
// }

// console.log(tellFortune(4,"Paja", "Belgrade", "Frontend dev"));


// 2. 

// function calculateDogAge(years, rate=7) {
//     return "Your doggie is "+ years*rate +" years old in dog years!";
// }

// console.log(calculateDogAge(5));



// 3. 

// function calculateSupply(age, amountPerYear) {

//     var maxAge = 100;

//     return "You will need "+ Math.round((maxAge-age)*amountPerYear) +" to last you until the ripe old age of " +maxAge;

// }

// console.log(calculateSupply(40,2));


// 4. 

// // (0°C × 9/5) + 32 = 32°F
// function celsiusToFahrenheit(temperature) {

//     var celsius = temperature;
//     var fahrenheit = (celsius * 9/5) +32;
//     return celsius + "°C is " + fahrenheit + "°F";

// }

// // (32°F − 32) × 5/9 = 0°C
// function fahrenheitToCelsius(temperature) {
// 	var fahrenheit = temperature;
// 	var celsius = (fahrenheit - 32) *5/9 ;
// 	return fahrenheit + "°F is " +celsius + "°C";
// }

// console.log(celsiusToFahrenheit(60), fahrenheitToCelsius(32))