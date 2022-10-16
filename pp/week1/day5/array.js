// array is a list of values that are indexed by there position in array
var someNewArray = ["some value", 3, true];


// we can get length of array with method .length
console.log(someNewArray.length);// expected 3 because there are three elements in our array

//we can get first element in the array with index 0 because array count element from 0
console.log(someNewArray[0]);//expected "some value"

// we can update our values in array 
console.log(someNewArray[1]);// expected 3
someNewArray[1] = "not a number";
console.log(someNewArray[1]);// expected "not a number"

// we can delete elements from our array using delete keyword
console.log(someNewArray[2]);// expected true
delete someNewArray[2];// change value on index 2 to undefined
console.log(someNewArray[2]);// expected undefined

// we can store in our array any type of data even array 

var arrayInArray = ["sdas", [1, 2, "some element"], true];
console.log(arrayInArray[1][2]);//expected "some element"
// explanation: first we look for index of our array in array (1)
// and when we find that index we simply repeat that process for element inside second array

// we should note that we can treat string as a array of characters 

var someString = "some string";

console.log(someString.length);// expected 11

console.log(someString[2]);// expected m