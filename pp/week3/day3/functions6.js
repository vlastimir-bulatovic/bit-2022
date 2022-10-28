"use strict";

// 1.

//  var countVowels = function(str){ // function expression

// 	var counter = 0;// create local variable with value of  0
// 	str = str.toLowerCase();// convert to lover case all char in string

// 	for(var i = 0; i< str.length; i++) {

// 		if(str[i]==="a" || )

// 		switch (str[i]) {
// 			case "a":
// 			case "e":
// 			case "i":
// 			case "o":
// 			case "u":
// 				counter ++;
// 				break;
// 			default:
// 				break;
// 		}
// 	}

// 	return counter;
// }

// console.log("number of vowels:", countVowels("Neki novi stringA d"));



// 2.
// console.log(
//   // IIFE (Immediately Invoked Function Expression)
//   (function (array1, array2) {
//     var newArray = []; // local variable

//     for (var i = 0; i < array1.length; i++) {
//       newArray[newArray.length] = array1[i];
//       newArray[newArray.length] = array2[i];
//     }

//     return newArray;
//     // parameters for our function
//   })(["a", "b", "c"], [1, 2, 3])
// );



// 3. 

function rotateList(list, n){

	var newArray = [];
	for(var i =0, j =0; i<list.length ; i++) {


		if( i < list.length-n) {
			newArray[newArray.length] = list[i+n];
		}else {
			newArray[newArray.length] = list[j];
			j++;
		}
	}

	return newArray;

}

console.log(rotateList([1,2,"a",6,4,5], 3))



// 4. 

// function declared as function expression 
var returnNumAsArray = function (num) {

	var str = num.toString(); // convert number to string
	var newArray = [];
	for(var i=0; i<str.length; i++) {

		if(parseInt(str[i])) newArray[newArray.length] = parseInt(str[i]); // convert string character to number

	}

	return newArray;
}	

console.log(returnNumAsArray(123.45));
