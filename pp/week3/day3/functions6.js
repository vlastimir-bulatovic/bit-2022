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

// function rotateList(list, n){

// 	var newArray = [];
// 	for(var i =0, j =0; i<list.length ; i++) {


// 		if( i < list.length-n) {
// 			newArray[newArray.length] = list[i+n];
// 		}else {
// 			newArray[newArray.length] = list[j];
// 			j++;
// 		}
// 	}

// 	return newArray;

// }

// console.log(rotateList([1,2,"a",6,4,5], 3))



// 4. 

// function declared as function expression 
// var returnNumAsArray = function (num) {

// 	var str = num.toString(); // convert number to string
// 	var newArray = [];
// 	for(var i=0; i<str.length; i++) {

// 		if(parseInt(str[i])) newArray[newArray.length] = parseInt(str[i]); // convert string character to number

// 	}

// 	return newArray;
// }	

// console.log(returnNumAsArray(123.45));




// 5.

// function multiplicationTable(n) {
// 	var tmp = "";


// 	for(var i =1; i<=n; i++) {

// 		for(var j =1; j<=n; j++ ){

// 			tmp += j*i + "\t";
// 		}

// 		console.log(tmp);
// 		tmp = "";
// 	}	
// }

// multiplicationTable(9);



// 6. 


// (0°C × 9/5) + 32 = 32°F

// function convertCelToFah(celsius) {

// 	return (celsius * 9/5) +32;
// }

// console.log(convertCelToFah(0));


// 7.


// function arrayMax(arr) {
// 	var max = -Infinity;
// 	var newArray = [];

// 	for(var i =0; i<arr.length; i++){ 
// 		if( arr[i] >= max && arr[i] !== Infinity ) max = arr[i];

// 		if(!isNaN(arr[i])) newArray[newArray.length] = arr[i];
// 	}

// 	return [newArray, max]; // return array of values
// }

// var [array1, max] = arrayMax([1,2,NaN, undefined, null, Infinity, 0, false]); // spread returned values

// console.log(array1, max);


// 8.

// function extrema(arr){

// 	var min = Infinity;
// 	var max = -Infinity;

// 	for(var i =0; i < arr.length; i++) {
		
// 		if(arr[i] >= max) max = arr[i];

// 		if(arr[i] <= min) min = arr[i];
// 	}

// 	return [min, max];
// }

// console.log(extrema([1,2,3,4,59,6,7]));




// 9.

// function bubbleSort(arr) {

// 	var tmp;

// 	for(var i = 0; i<arr.length; i++) {

// 		for(var j =0; j < arr.length-i-1; j++) {

// 			if(arr[j+1] <arr[j]){

// 				tmp = arr[j+1];
// 				arr[j+1] = arr[j];
// 				arr[j] = tmp; 

// 			}

			
// 		}

// 	}

// 	return arr;
// }


// function meanValue(arr) {
// 	// sort our array
// 	var newArray = bubbleSort(arr);

// 	// if odd numbers of element in array
// 	if (newArray.length % 2 !== 0)
// 		return newArray[Math.floor(newArray.length / 2)];

// 	// if even numbers of element in array
// 	return (
// 		(newArray[Math.floor((newArray.length - 1) / 2)] +
// 			newArray[newArray.length / 2]) / 2
// 	);
// }

// console.log(meanValue([1,2,3,4,5]));



// 10. 

// function mostFrequent(arr) {
// 	var counter = 0;
// 	var tmp = 0;

// 	for(var i =0; i< arr.length; i++) {

// 		for(var j = 0; j < arr.length; j++) {
// 			if(arr[i] === arr[j]) tmp++; 
// 		}

// 		if(tmp > counter) counter = tmp;
// 		tmp = 0;

// 	}

// 	return counter;
// }

// console.log(mostFrequent(["2", 2, "2", "a", "b", "c", "b", "b"]));


// 11. 

// function expression
// var arrayEl = function (arr) {

// 	if(arr.length < 2) return arr;

// 	if(arr.length % 2 === 0) return [arr[0], arr[arr.length-1]];


// 	if(arr.length % 2 !== 0) return [arr[0],  arr[Math.floor(arr.length/2)], arr[arr.length - 1]];

// }

// console.log(arrayEl([1,3,5,5,7]));


// 12. 

// var average = function() {

// 	var sum =0;
// 	for(var i = 0; i < arguments.length; i++) {
// 		sum+= arguments[i];
// 	}

// 	return (sum / arguments.length);

// }

// console.log(average(2,5,7,9,9,0));


// 13. 

// var greaterThanAverage = function() {

// 	var sum =0;
// 	var avg = 0;
// 	var newArray =[];

// 	for(var i = 0; i < arguments.length; i++) {
// 		sum+= arguments[i];
// 	}

// 	avg =  sum / arguments.length;

// 	for (var i = 0; i < arguments.length; i++) {

// 		if(arguments[i] > avg) newArray[newArray.length] = arguments[i];
// 	}

// 	return newArray;
// }


// console.log(greaterThanAverage(2, 5, 7, 9, 9, 0));



// 14. 

// var bodyMassIndex = function(weight, height) {
// 	var bmi = weight / (height*height);

// 	if(bmi < 15) return "Starvation";
// 	else if(bmi < 17.5) return "Anorexic";
// 	else if(bmi < 18.5) return "Underweight";
// 	else if(bmi < 25) return "Ideal";
// 	else if(bmi < 30) return "Overweight";
// 	else if(bmi < 40) return "Obese";
// 	else return "Morbidly obese"; 
// }


// console.log(bodyMassIndex(91, 1.8));




// 15. 


// var frame = function (list) {

// 	var newArray = [];
// 	var newList = "";
// 	var count =0;

// 	for(var i = 0; i <list.length; i++){
// 		if(list[i].length > count ) count = list[i].length;

// 		if(i === 0 ){
// 			newArray[newArray.length] = ""; 
// 			newArray[newArray.length] = list[i]; 
// 		}else if (i === list.length-1) {
// 			newArray[newArray.length] = list[i];
// 			newArray[newArray.length] = "";
// 		}else {
// 			newArray[newArray.length] = list[i]
// 		}


		
// 	}

// 	for(var i = 0; i< newArray.length; i++) {
// 		if(i === 0 || i === newArray.length-1) newList += "**";
// 		else newList +="* ";
// 		for(var j =0; j< count; j++){
// 			if (newArray[i][j]) newList += newArray[i][j];
// 			else if (i === 0 || i === newArray.length-1) newList += "*";
// 			else newList += " ";
// 		}

// 		if (i === 0 || i === newArray.length - 1) newList += "**\n";
// 		else newList += " *\n";
		
// 	}

// 	return newList;
// } 

// console.log(frame(["Hello", "World", "in", "a", "Frame"]));