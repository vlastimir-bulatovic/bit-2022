// 1

// function insertString(someString, toInsert, index=1) {

//     var newString = "";

//     for(var i=0;i<someString.length; i++) {
//         if(i === index) {
//             newString +=" " + toInsert + " ";
//         }

//         newString += someString[i];
//     }

//     return newString;
// }

// console.log(insertString("Mojj string", "JS", 5))

// 2.

// function joiningArray(someArray) {
// 	var newString = "";

// 	for (var i = 0; i < someArray.length; i++) {
// 		if ( someArray[i] === undefined ||
// 			someArray[i] === null ||
// 			someArray[i] === Infinity ||
// 			(typeof someArray[i] === "number" &&
// 				someArray[i] !== 0 &&
// 				!someArray[i])
// 		) {
// 			continue;
// 		}

// 		newString +=someArray[i];
// 	}

// 	return newString;
// }

// console.log(joiningArray([NaN, 0, 15, false, -22, "", undefined, 47, null]));


// 3

// function falsyOut(someArray) {
// 	var newArray =[];

// 	for(var i = 0; i<someArray.length; i++) {

// 		if(someArray[i]) {
// 			newArray[newArray.length] = someArray[i]; 
// 		}
// 	}

// 	return newArray;
// }


// console.log(falsyOut([NaN, 0, 15, false, -22, "", undefined, 47, null]));


// 4

// function reverseNumber(n) {
// 	var newNumber = "";
// 	n = n+"";// convert to string
// 	for(var i =n.length-1; i>=0; i--){
// 		newNumber += n[i];
// 	}

// 	return newNumber;

// }

// console.log(reverseNumber(12345.678));


// 5

// function getLast(someArray, n=1) {

// 	var newArray = [];

// 	if (someArray.length <= n ) return "Array is to short";


// 	for (var i = someArray.length - n; i < someArray.length; i++) {
// 		newArray[newArray.length] = someArray[i];
// 	}

// 	return newArray.length === 1 ? newArray[0] : newArray;
// }

// console.log(getLast([7, 9, 0, -2],2));


// 6

// function fillArray(n, item) {

// 	var newArray = [];
// 	for(var i = 0; i < n; i++) {
// 		newArray[i] = item;
// 	}

// 	return newArray;
// }

// console.log(fillArray(4,"babab"));



// 7

// function isNumberPerfect(n) {

// 	var sum = 0;

// 	for(var i = 1; i<=n/2; i++){
// 		if(n % i === 0) sum += i;
// 	}

// 	return sum === n ? "Perfect number" : "Not so perfect";
// }


// console.log(isNumberPerfect(28));




// 8

// function findWord(someString, word) {

// 	var count = 0;

// 	for(var i = 0; i<someString.length; i++) {
// 		if(someString[i] === word[0]){
// 			count++
// 			for (var j = 1; j < word.length; j++) {
// 				if(someString[i+j] !== word[j]){
// 					count--;
// 					break;
// 				}
// 			}	
// 		}
		
// 	}

// 	return `'${word}' was found ${count} times`;
// }


// console.log(findWord("The quick brown fox", "fox"));




// 9

// function hideEmail(email){

// 	var hiddenEmail = "";
// 	var isLastPart = false;


// 	for(var i = 0; i< email.length; i++){

// 		if(email[i] === "@") isLastPart = true;

// 		if(i < 3 || isLastPart){
// 			hiddenEmail += email[i]; 
// 		}else if(i === 3){
// 			hiddenEmail+="...";
// 		}
// 	}

// 	return hiddenEmail;
// }

// console.log(hideEmail("myemailaddress@bgit.rs"));



// 10

// function checkArray(array) {
// 	var tmp = 0;
// 	var currentMax = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		tmp = 0;
// 		for (var j = 0; j < array.length; j++) {
// 			if (array[i] === array[j]) {
// 				tmp++;
// 			}
// 		}

// 		if (tmp > currentMax) {
// 			currentMax = tmp;
// 		}
// 	}

// 	return currentMax;
// }

// console.log(checkArray([3, "a", "a", "a", 2, 3, "a", "a", 3, "a", 2, 4, 9, 3]));
