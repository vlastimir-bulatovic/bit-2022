const me = {
	talk() {
		return "Talking ...";
	},
};

me.talk(); // expected "Talking ..."

const you = {
	talk() {
		return "Talking ...";
	},
};

you.talk(); // expected "Talking ..."

// This is example of bad code (because of duplication) (we are breaking DRY principle)
// function logic should be defined only one time
// how do we fix it?

class Person {
	talk() {
		return "Talking ...";
	}
}

Person.prototype; // this is reference to all our methods in class
Person.prototype.talk; // this is our method, we can update here

const person1 = new Person();
const person2 = new Person();

person1.talk(); // expected "Talking ..."
person1.talk(); // expected "Talking ..."

person1.__proto__; // this is reference to our Person class and will contain all methods  that inherit from class
person1.__proto__.talk(); // this is our method, we can update here or execute

Person.prototype === person1.__proto__; // expected true the same reference

// In this way we don't duplicate our code
// and changes made in method talk() will be applied to person1 and person2
// this is called inheritance via classes in JS (mostly in object oriented languages )

// NOTE: Inheritance in JS is done via Objects and Functions Classes are just syntactic sugar.
// Underneath Classes inheritance is done via Objects and Functions

function Animal() {}
Animal.prototype.moving = function () {
	return "Moving ...";
};

const cat = new Animal();
cat.moving(); // expected "Moving ..."

// --------- Extend ---------

class SuperHuman extends Person {
	fly() {
		return "Flying ...";
	}
}

const him = new SuperHuman();

him.fly(); // expected "Flying ..."
him.talk(); // expected "Talking ..."

// extends allow us to inherit methods and properties of parent class to child class
