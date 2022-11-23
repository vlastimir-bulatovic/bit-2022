// code execution

// engines
// parser

// execution context

// Variable Object

// Scope Chain

// Execution stack vs Scope chain

// This

// Event loop (jsv9000.app)




// call and apply
// we can borrow methods from other objects we use apply and call 
// difference is that apply accept only two arguments(object that we want to apply method to, array of arguments)
// call has multiple arguments (object that we want to call method on, arguments for that method (a,b,c,d ...))
const dudeObj = {
    job: "Ninja",
    say(who){
        return `Hey ${who}, I am a ${this.job}`;
    }
}

const obj = { 
    job: "scripting guru" 
};

// call method say on "dudeObj" with argument "Dude"
console.log(dudeObj.say("Dude"));

// call method say on "obj" object with argument "Dude" 
console.log(dudeObj.say.call(obj, "Dude"));

// apply method say on "obj" object with argument array  ["Dude"]
console.log(dudeObj.say.apply(obj, ["Dude"]));



const someArray = [1, 23, 45, 4];

console.log(Math.min.call(null, ...someArray));

console.log(Math.max.apply(null, someArray));


// bind 



// Object.create()
