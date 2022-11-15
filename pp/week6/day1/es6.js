
// Prototype 

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.speak = function(){
//     console.log(this.name);
// }

// const obj = new Person("perra");

// obj.speak()

// Classes 
// prototype  is chained for constructor of our class
// __proto__ check where is our method (to null object)

// function Vacation(vacationDestination, vacationLength) {
//     this.destination = vacationDestination;
//     this.length = vacationLength;
// }

// Vacation.prototype.print = function() {
//     console.log(this.destination + " " + this.length);
// }

// var maui = new Vacation("Maui", 7);

// maui.print();


// // Inheritance in constructor functions 
// function Person(name, surname) {
//     this.ime = name;
//     this.prezime = surname;
//     this.nesto = "pera";
// }

// Person.prototype.sayName = function () {
//     console.log(this.ime);
// }


// function Employee(zarada, nesto, neko) {
// // first step in chaining (inherit all properties from Person)
//     Person.call(this, nesto, neko);
//     this.zarada = zarada;
// }   

// // second step in chaining (here we have lost Employee constructor) (inherit all methods from Person)
// Employee.prototype = Object.create(Person.prototype);

// // third step in chaining (reference Employee construct)
// Employee.prototype.constructor = Employee;



// let emp = new Employee(60000, "pera","peric");
// console.log(emp); // {ime: 'pera', prezime: 'peric', nesto: 'pera', zarada: 6000 }

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     sayName() {
//         console.log(`${this.name}, ${this.surname}`);
//     }
// }
// class Employee extends Person{
//     constructor(name, surname, salary) {
//         super(name, surname);
//         this.salary = salary
//     }

//     print() {
//         super.sayName();
//         console.log(this.salary);
//     }
    
// }


// const emp1 = new Employee("Petar", "Peric", 100000);
// emp1.print();


// Object destruction

const sandwich = {
    bread: "italian",
    meat: "tuna",
    cheese: "swiss",
}

let {cheese, bread} = sandwich;

console.log(cheese,bread);

const obj1 = {name:"Pera", surname: "Peric"}

// old way
function notDesc(someObj) {
	console.log(someObj.name);
}

// new way
function descObject({name}) {
    console.log(name);
}


descObject(obj1);// Pera




// Array destruction 

// let niz = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// let [name1, name2, ...rest] = niz;

// // rest is array of items, starting from the 3rd one
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length);
// console.log(name1);// julius