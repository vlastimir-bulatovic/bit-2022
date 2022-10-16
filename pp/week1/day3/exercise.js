// 1. 

var camelCaseVariable;
var PascalCaseVariable;
var snake_case;
// explanation: some recommended ways of writing variable names

var _alsoCanBeDone;// Often used for something 'special' on project
var $someVarName; // Not really recommended, especially in ES6 standard
// explanation: should be used only when is required of us

// var 1num = "trow a syntax error";
// explanation: number can't be first character in our variable name. JS simply doesn't allow


// .2 and .3

var currentMood = "Very happy";
console.log(currentMood);// expected Very happy

// .4 
var a =5;
var b =25;
console.log(3+28-33);// expected -2
console.log(a*b);// expected 125
console.log(120 / a);// expected 24

//.5

var bananaInKilograms = 1.2;
var bananaInGrams; // ??
// one kilogram is 1000 grams  
var conversionRate = 1000;
bananaInGrams = bananaInKilograms * conversionRate;
console.log(bananaInGrams, "grams");// expected 1200 grams

// .6

var timeInMinutes = 28;

var minutesToSecondsConversion = 60;// one minute is 60 seconds

console.log(timeInMinutes*minutesToSecondsConversion, "seconds");// expected 1680 seconds

// .7

var memoryInGB = 4;
var articleSize = 98; // Size in kilobytes
var gbToMbConversionRate = 1000;

var convertToMB = memoryInGB *gbToMbConversionRate;
var convertToKB = convertToMB * gbToMbConversionRate; // difference between mg and gb is the same as kb and mb

console.log(convertToKB / articleSize, "articles can be put in our memory");

 
// .9 

var a = 0; 
var b = 1;
var c = 2;

a = a+1;// increase a by n, in our case by 1
b+=15;// increase b by n, in our case by 15. Can be used with arithmetic operation +, -, * and / 

c++;// increment c by 1 
// c is incremented first, and that is the value you get
++c;// increment c by 1 
// you get the value of c, and c is incremented afterwards


c--;// decrement c by 1 
// c is decremented first, and that is the value you get
--c;// decrement c by 1 
// you get the value of c, and c is decremented afterwards

// .10

var fullName = "Vlastimir Bulatovic";
var $age = 24;
var _isCatOwner = false;

console.log(fullName, typeof fullName);// expected Vlastimir Bulatovic string
console.log($age, typeof $age);// expected 24 number
console.log(_isCatOwner, typeof _isCatOwner);// expected false boolean

// .11 

console.log(typeof "number");// expected string
console.log(typeof true);// expected boolean
console.log(typeof null);// expected object
console.log(typeof "false");// expected string
console.log(typeof 56);// expected number


// .14

var userAge = 54;

console.log("is age negative:", userAge < 0 );// expected is age negative: false
console.log("is age greater than:", userAge > 120 );// is age greater then: false


// .15

var currentSpeed = 99;

console.log("are we driving safe:", currentSpeed < 120 && currentSpeed > 60);//expected are we driving safe: true