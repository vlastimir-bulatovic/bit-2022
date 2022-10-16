// var is reserved word in js that alow us to define variables
// variable (var someVariableName = 123 ) is reserved place in memory that have 
// "name"(someVariableName) and stored value(123) 

// Data types 

// Primitives

var n = 354; // number
var text = "Some text"; // string
var isSwitchOn = true; //boolean 
var someVariable; // undefined
var emptyVariable = null; // object 

console.log(typeof(n)); // number
console.log(typeof(text)); // string
console.log(typeof(isSwitchOn)); // boolean
console.log(typeof(someVariable)); // undefined
console.log(typeof(emptyVariable)); // object

console.log(isSwitchOn*n); // NaN (a special value when we try to multiply od divide different types. Type of NaN is number)
console.log(typeof(text * n)); //number 

// Complex 

var grades = [5,4,3,4,5,4]; // array 
var person = {
    name: "petar",
    surname: "petrovic",
    age: 25,
    isFromSerbia: true
}

function someFunction() {}

console.log(typeof(grades)); // object
console.log(typeof(person)); // object
console.log(typeof(someFunction)); // function