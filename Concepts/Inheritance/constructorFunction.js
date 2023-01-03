function Person() {
	this.talk = function () {
		return "Talking ...";
	};
}

Person.talk; // expected undefined
Person.prototype.talk; // expected undefined

const me = new Person();
me.talk(); // expected "Talking ..."

const you = new Person();
you.talk(); // expected "Talking ..."

// Problem with this is that whenever we define with this.xyz will be treated as a object property not method
// That means that method talk will be copied to every new instance
// and will not be in prototype of Person

you.talk = function () {
	return "Talking improved";
};

you.talk(); // expected "Talking improved"

me.talk(); // expected "Talking ...";

// now it behave like a property, that means if we want to update our function talk for every instance
// we have to update each and every instance separately
// This is not bad, sometimes we want this behavior

// Most of the time we don't want this behavior,
// we want to have one copy of our methods and through prototype add to new instance

function Animal(name, gender) {
	this.name = name;
	this.gender = gender;
}

// we add our methods to prototype so that we have only one copy of function used in every instance
Animal.prototype.run = function () {
	return "Running ...";
};

Animal.prototype.jump = function () {
	return "Jumping ...";
};

const cat = new Animal("Garfield", "Male");

cat.jump(); // expected "Jumping ...";
