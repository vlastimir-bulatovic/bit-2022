// Hoisting is JavaScript default behavior of moving all 
// declarations to the top of the current scope

// this mean that our 
var someName = 15;

// have two steps 
// first: declaration var someName is moved to the top of the scope and is currently undefined
// second initialization someName = 15 at the line where we write our code 

// JS does this for all variable declarations 

// a is undefined here because of hoisting

let a = "not undefined"; // a is "not undefined"

// b is undefined here because of hoisting

const b = "not undefined"; // b is "not undefined"


// a is undefined here because of hoisting


// someFun() can be called here because of hoisting 
// this function is declared and because of hoisting will be moved to the 
// top of the scope and can be used anywhere in this script

// this way of creating function is called function declaration
function someFun(){
    // some code

}; 


// someNewFun is undefined because of hoisting 
// someNewFun() if called above initialization it will trow reference error

// this happens because variable is declared 
// and then is initialized as function expression

// this way of creating function is called function expression
var someNewFun = function () {
    // do something
}