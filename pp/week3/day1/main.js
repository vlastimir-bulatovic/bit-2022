// Exercise functions 2

// 1

// function isString(string){
//     if(typeof string == "string"){
//         return true;
//     }else {
//         return false;

//     }
// }

// var a = "My random string";

// console.log(isString(15));

// 2

// function isStringEmpty(a){
//     if(typeof a === "string" && a === " "){

//             return true;

//     }

//     return false;

// }

// console.log(isStringEmpty(" "))

// 3
// function concString(n, c){

//     var string = "";

//     for(var i = 0; i < n; i++){
//         string = string + c;
//     }

//     return string;
// }

// console.log(concString(5, "Bla"))

// 4

// function letterOccurrence(nekiString, letter) {
//   var result = 0;
//   for (var i = 0; i < nekiString.length; i++) {
//     if (letter === nekiString[i]) {
//       result++;
//     }
//   }

//   return result;
// }

// console.log(letterOccurrence("neki String", "n"));

// 5

// function firstOccurrence(someString, letter){
//     for(var i = 0; i < someString.length; i++){
//         if(someString[i] === letter){
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(firstOccurrence("Bilo sta", "s"))

// 6
// function lastOccurrence(someString, letter){
//     var index = -1;

//     for(var i = 0; i < someString.length; i++){
//         if(someString[i] === letter){
//             index = i;
//         }
//     }

//     return index;
// }

// console.log(lastOccurrence("milos je doktor", "o"));

// 7

// function convertString(someString){
//     var niz = [];
//     for(var i = 0; i < someString.length; i++){
//         if(someString[i] === " "){
//             niz[i] = null;
//         }else{
//             niz[i] = someString[i];
//         }
//     }

//     return niz;
// }

// console.log(convertString("bilo sta"))

// 8

// function checkPrime(number) {

//   for (var i = 2; i < number / 2; i++) {
//     if (number % i === 0) {
//       return "Nije prost";
//     }
//   }

//   return "Jeste prost";
// }

// console.log(checkPrime(11));

// 9

// function providedSeparator(string, lajna="-") {
//     var result = ""
//     for(var i = 0; i < string.length; i++){
//         if(string[i] === " "){
//             result = result + lajna;
//          } else{
//             result += string[i];
//          }
//     }return result;
// }

// console.log(providedSeparator("Moj zivot je moje blago od stoje", "_"))

// 10

// function insertDots(someString, n) {
//   var newString = "";
//   for (var i = 0; i < someString.length; i++) {

//     newString += someString[i];

//     if (i === n) {
//       newString += "...";
//       return newString;
//     }
//   }

//   return newString;
// }

// console.log(insertDots("Some new string", 5));

// 11

// function convertToNumber(someArray) {
//   var newArray = [];

//   for (var i = 0; i < someArray.length; i++) {
//     if (
//       (someArray[i] * 1 || someArray[i] * 1 === 0) &&
//       someArray[i] !== Infinity &&
//       someArray[i] !== -Infinity
//     ) {
//       newArray[newArray.length] = someArray[i] *1;
//     }
//   }

//   return newArray;
// }

// console.log(convertToNumber(["0", "21", undefined, "33", "55", -Infinity]));

// 12

// function toRetirement(numOfYears, gender) {

//   var yearOfRetirement = gender === "M" ? 65 : 60; // ternarni operator kao if else
//   var years = yearOfRetirement - numOfYears;

//   if (years <= 0) {
//     return "Vec si penzionisan " + years * -1 + " godina";
//   } else {
//     return "Imas jos da radis " + years + " godina";
//   }
// }

// console.log(toRetirement(60, "M"));

// 13

// function humanizeNumbers(n) {

// 	if(n === 11 || n === 12 || n ===13){
// 		return n+="th";
// 	}else if(n % 10 === 1) {
// 		return n += "st";
// 	}else if(n % 10 === 2) {
// 		return n += "nd"
// 	}else if(n%10 === 3) {
// 		return n += "rd"
// 	}else {
// 		return n+= "th";
// 	}
	
// }

// console.log(humanizeNumbers(22));