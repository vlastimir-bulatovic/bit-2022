// built-in objects

var str = "abc";
var str2 = new String("abc");

//console.log(str2 == str); // true
//console.log(str2 === str); // false

//console.log(String({p:1})); // "[object Object]"
//console.log(String([1,2,3]))// "1,2,3"


// String methods 

"someString".toLowerCase();// convert all characters to lower case someString -> somestring
"someString".toUpperCase();// convert all characters to upper case someString -> SOMESTRING
"someString".charAt(0);// get character at this position  -> "s"
"someString".indexOf("S"); // get index of parameter -> 5
"someString".lastIndexOf("S");// start from end and returns index -> 5

"someString".slice(5,10);// "tring"
"someString".substring(5, 10); // "tring"
"some String".split(" ");// ["some", "String"]



//  Array Methods  //

var a = new Array(); // Constructor Function
var b = [];

a.push(5); // a=[1]; return length 
a.pop(); // remove last from array; return element; 
a.sort(); // sort array 
a.slice(2,5);// return new array
a.splice(2,5); // work on array



//  Object Methods  //

var o = {prop: 1};


o.hasOwnProperty("prop"); // true
o.hasOwnProperty("toString"); // false
o.hasOwnProperty("fromString"); // false

Object.keys(o); // return array of all property keys

//console.log(Object.keys(new Object())); // empty array []

Object.isExtensible(o); // true
Object.preventExtensions(o);

// freeze, seal



//  Number Object  //
console.log(Number.MIN_VALUE);






var obj = {
    a: 5,
    b: 10,
    c: 15
}

for(dino in obj) {
    console.log(obj[dino]);
}