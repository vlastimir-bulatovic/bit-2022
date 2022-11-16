function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.speak = function () {
    return `${this.name} ${this.surname}`;
}

function Naslednik(name, surname, age, place) {
    // 1 chain Person name and surname to Naslednik
    Person.call(this, name,surname);

    this.age = age;
    this.place = place;
}
// 2 cain Person prototype to Naslednik prototype (here we lost our constructor for Naslednik)
Naslednik.prototype = Object.create(Person.prototype);
// 3 return reference to Nasledik constructor (we can make methods in our Naslednik prototype)
Naslednik.prototype.constructor = Naslednik;

Naslednik.prototype.sayName = function() {
    return `${this.name} ima ${this.age} godina`;
}

const obj1 = new Naslednik("Pera", "Peric", 22, "Beograd");

console.log(obj1.sayName())
console.log(obj1.speak());