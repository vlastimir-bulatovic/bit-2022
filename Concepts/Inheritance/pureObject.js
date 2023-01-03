const person = {
	talk() {
		return "Talking ...";
	},
};

const me = Object.create(person);

me.talk(); // expected "Talking ..."

const you = {};
Object.setPrototypeOf(you, person);

you.talk(); // expected "Talking ...";

// Inheritance via Object.setPrototypeOf  or Object.create allow us
// to inherit methods via __proto__(here will be our methods from person)
