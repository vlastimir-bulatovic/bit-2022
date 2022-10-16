var a = 4;
var b = 4;
var c = 44;
var d = 20;
var e = 50;

//Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd.

if(a % 2 === 0) {
    console.log("even");
}else {
    console.log("odd");
}

//Write a program to check if the number is divisible by 3 and 5. If it is, print that number.

if(a % 3 === 0 && a % 5 === 0) {
    console.log("number is:", a);
}

// Write a program that compares two numbers and display the larger. Result should be displayed in the console.

if(a > b) {
    console.log(a, "is greater then", b);
}else if(a < b) {
    console.log(b, "is greater then", a);
}else {
    console.log("numbers are the same");
}


// Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.

var product = a*b*c;

if(product >= 0) {
    console.log("Positive", product);
}else {
    console.log("Negative", product);
}

// Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”

if(typeof a === "number") {
    if(a % 2 === 0 ) {
        console.log(a);
    }else {
        console.log("X");
    }
}

//Write a conditional statement to find the largest of five numbers. Display the result in console.

if(a >= b && a >= c && a >= d && a > e) {
    console.log(a, "is largest number.");
}else if(b >= a && b >= c && b >= d && b > e) {
    console.log(b, "is largest number.");
}else if(c >= a && c >= b && c >= d && c > e) {
    console.log(c, "is largest number.");
}else if(d >= a && d >= b && d >= c && d > e) {
    console.log(d, "is largest number.");
}else{
    console.log(e, "is largest number.");
} 

// Write a conditional statement to sort three numbers.


if(a >= b && a >= c) {
    if(b >= c) {
        console.log(a, b, c);
    }else {
        console.log(a, c, b);
    }
}else if(b >= a && b >= c) {
    if(a >= c) {
        console.log(b, a, c);
    }else {
        console.log(b, c, a);
    }
}else if(c >= a && c >= b) {
    if(a >= b) {
        console.log(c, a, b);
    }else {
        console.log(c, b, a);
    }
}


// .6 

var tempInCelsius = 60;
var tempInFahrenheit = 140;

var celToFah = (9 * tempInCelsius / 5) + 32;// convert celsius to fahrenheit
var fahToCel = (tempInFahrenheit-32) * 5/9 ;// convert fahrenheit ro celsius

console.log(celToFah, "fahrenheit");// expected 140 fahrenheit;
console.log(fahToCel, "celsius");// expected 60 celsius;

// .7

if(a>=13) {
    console.log((a-13)*2);
}else {
    console.log((a-13)*(-1));
}

var numberDiff = (a >= 13) ? (a-13)*2 : (a-13)*(-1);

console.log(numberDiff);

// .8 

if(a === b) {
    console.log((a+b)*3);
}else {
    console.log(a+b);
}

console.log( a === b ? (a+b)*3 : a+b);

// .9

if(a === 50 || b === 50 || a+b === 50) {
    console.log(true);
}else {
    console.log(false);
}
var result = (a === 50 || b === 50 || a+b === 50) ? true : false;

console.log(result);


// .10

if(a >= 20 && a < 100) {
    console.log("20 <=> 100");
}else if(a >= 100 && a <= 400) {
    console.log("100 <=> 400");
}else if( a > 400) {
    console.log("greater then 400");
}else {
    console.log("smaller then 20");   
}

