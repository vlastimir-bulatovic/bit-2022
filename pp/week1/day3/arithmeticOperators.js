// Operators

// Arithmetic operators (+, -, *, /, %)
// + (addition) add two numerical values 1+2 =3

var a = 1;
var b = 2;

console.log(a + b); //expected 3

var c = false;
var d = true;
var e = null;
var f;

console.log(b + c); // expected 2 2+0=2
console.log(d + c); // expected 1 1+0=1
console.log(e + d); // expected 0 0+0=0
console.log(f + c); // expected NaN undefined+false=NaN

// explanation : when we have boolean value false or true combined with any arithmetic operator it will be treated as a 0 and 1
// null is treated as a 0
// only exception is with string in combination then is concatenation

// + (concatenation) merge two values (string + number, string + boolean,  )

var stringA = "Some";
var stringB = "String";

console.log(stringA + stringB); // expected "SomeString"
console.log("some" + 3); // expect some3
console.log("m10" + 3); // expect m103
console.log("m10" + null); // expect m10null
console.log("m10" + true); // expect m10true
console.log("10" + NaN); // expect 10Nan
console.log("10" + 3); // expect 103

// - (subtraction) find the difference between two numerical values 20 - 10 = 10

console.log(5 - 3); // expected 2
console.log("some" - 3); // expected NaN
console.log(undefined - 3); // expected NaN
console.log(NaN - 3); //expected NaN

console.log(true - 3); // expected -2 1-3=-2
console.log(false - 3); // expected -3 0-3=-3
console.log(null - 3); // expected -3 0-3=-3
// explanation : when we have boolean value false or true combined with any arithmetic operator it will be treated as a 0 and 1
// null is treated as a 0

// * (multiplication) find the product of two numerical values 2 * 4 = 8

console.log(5 * 3); // expected 15
console.log("some" * 3); // expected NaN
console.log(undefined * 3); // expected NaN
console.log(NaN * 3); //expected NaN

console.log(true * 3); // expected 3 1*3=3
console.log(false * 3); // expected 0 0*3=0
console.log(null * 3); // expected 0 0*3=0
// explanation : when we have boolean value false or true combined with any arithmetic operator it will be treated as a 0 and 1
// null is treated as a 0

// * (division) find the quotient of two numerical values 4 / 2 = 2

console.log(15 / 3); // expected 5
console.log("some" / 3); // expected NaN
console.log(undefined / 5); // expected NaN
console.log(NaN / 3); //expected NaN

console.log(true / 10); // expected 0.1 1/10=0.1
console.log(false / 3); // expected 0 0/3=0
console.log(null / 3); // expected 0 0/3=0
// explanation : when we have boolean value false or true combined with any arithmetic operator it will be treated as a 0 and 1
// null is treated as a 0

console.log(50 / 0); // expected Infinity 50/0 = infinity
