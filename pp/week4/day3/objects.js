var cat = {
    color: "black",
    name: "Winston",
    weight: 12,


    // methods 
    meow: function () {
        console.log("Meow!");
    },

}


cat.escape = function() {
    console.log("Cat is gone!");
}
cat.meow();


// can be used like this with bracket notation (NOT RECOMMENDED!!!)
cat["sleep"] = function() {
    console.log("Sleep!");
}
cat["sleep"]();


// change existing value in object with dot notation 
cat.name = "Garfield"
console.log(cat.name);// expected Garfield

// cat is now a empty object
cat = {}



var book = {
    name: "Na drini cuprija",
    published: 1945,
    author: {
        firstName: "Ivo",
        lastName: "Andric"
    }
}

// dot notation
book.author.firstName;// expected "Ivo"





var obj1 = {
	name: "petar",
	surname: "peric",
};

var obj2 = {
	name: "petar",
	surname: "peric",
};

// JSON (JavaScript Object Notation) global object

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));