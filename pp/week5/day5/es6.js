// ES6 

// Compiler -> compile code to other programing language (machine code, c, etc.)
// Transpiler -> transpile code in the same language but older that is supported every were
// Interpreter -> interpret (translate and execute) our code



// let block scope


function outer(a) {
    return a*2;
}

{
    let inner = function(a) {
        return a*2;
    }

}

//console.log(outer(10)); // work
//console.log(inner(20)); // refError


// const a variable that can't be changed and is also block scope
// TypeError is trow when we try to change it's value (for prime types of data - value and for complex type reference)
// every object, array and function should be declared via const because we want to save reference 
// and we can edit this  object or array with out changing const value (because reference is the value of our variable)

const obj = {
    nesto: "ovde"
};
//obj = "nesto"; // TypeError

obj.nesto = "super"; // this will update our obj but reference stay the same



// Template string they will remember every enter space (we don't need to use \n and \t)

let firstname = "Pera";
let qty = 12;
let events = "Neki nesto"
// console.log(`Hello ${firstname},
// Thanks for ordering ${qty} ticket to ${events}.

// Order details
// `)




// Function - Default Parameters 

function someFun(name="Some", activity="Fun"){
    console.log(`${name} ${activity}`);
}

// someFun();// expected Some Fun
// someFun("Nesto", "neki"); // expected Nesto neki

const today = new Date();

function makeDate(day, month= today.getMonth(), year = today.getFullYear()) {
    return new Date(year, month, day).toDateString();
}

console.log(makeDate(16, 3,1996))
console.log(makeDate(16, 3));
console.log(makeDate(16));




// Object literals
const fruit = 'apple' ,number =19;
const obj1 = {fruit, foo:'bar', number};
console.log(obj1);// { fruit: 'apple', foo: 'bar', number: 19 }

const obj2 = {
    number: 2,
    
    multiply: function(n) { // old way
        return this.number * n;
    },

    times(n){ // new way
        return this.number*n;
    }
}