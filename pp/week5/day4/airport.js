"strict mode";

(function () {


	function createPassenger(name, surname, number, category) {
		
		return new Passenger(new Person(name, surname), new Seat(number, category));

	}

	const passenger1 = createPassenger("John", "Snow", 1, "b");
	const passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
	const passenger3 = createPassenger("Daenerys", "Targaryen", 14);
	const passenger4 = createPassenger("Tyrion", "Lannister", 14);

	function createFlight(relation, date) {
		return new Flight(relation, date);
	}


	const flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
	flight1.addPassenger(passenger1);
	flight1.addPassenger(passenger2);

	const flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
	flight2.addPassenger(passenger3);
	flight2.addPassenger(passenger4);

	const airport = new Airport();
	airport.addFlight(flight1);
	airport.addFlight(flight2);

	console.log(airport.getData());

	function Person(name, surname) {
		this.name = name;
		this.surname = surname;
		
		this.getData = function () {
			return `${this.name} ${this.surname}`;
		};
	}


	function Seat(number, category = "e") {
		this.number = number || Math.trunc(Math.random() * 100 + 10);
		this.category = category.toUpperCase();

		this.getData = function () {
			return `${this.number}, ${this.category}`;
		};
	}

	function Passenger(person, seat) {
		if (person instanceof Person) this.person = person;
		if (seat instanceof Seat) this.seat = seat;

		this.getData = function () {
			return `${this.seat.getData()}, ${this.person.getData()}`;
		};
	}


	function Flight(relation, date, passengers = []) {
		
		this.relation = relation;
		this.date = date;
		this.passengers = passengers;

		this.addPassenger = function (passenger) {
			if (!(passenger instanceof Passenger)) return;

			if (passengers.length >= 100) return;

			this.passengers.forEach((el, index, arr) => {
				while(el.seat.number === passenger.seat.number){
					passenger.seat.number = Math.trunc( Math.random() * 100 + 10);
				}

				if (el.person.getData() === passenger.person.getData()) {
					arr[index] = passenger;
					return;
				}

				
			});

			this.passengers.push(passenger);
		};


		this.getData = function () {
			let passengersData = "";

			this.passengers.forEach((element) => {
				passengersData += `\t\t${element.getData()}\n`;
			});
			
			return `\t${this.date},${shorteningRelation(this.relation)} \n${passengersData}`;
		};


		function shorteningRelation(str) {
			str = str.split(" - ");
			const chars = { a: "", e: "", i: "", o: "", u: "" };
			str = str.map((el) => {
				el = el.replace(/[aeiou]/g, (m) => chars[m]);
				return (el[0] + el[el.length - 1]).toUpperCase();
			});

			return str.join(" - ");
		}
	}

	function Airport(flights = []) {

		this.name = "Nikola Tesla";
		this.flights = flights;

		this.addFlight = function (flight) {
			if (flight instanceof Flight) this.flights.push(flight);
		};


		this.getData = function () {
			let numberOfPassengers = 0;
			let response = "";
			this.flights.forEach((element) => {
				response += `${element.getData()}`;

				numberOfPassengers += element.passengers.length;
			});

			return `Airport: ${this.name}, total passengers: ${numberOfPassengers} \n${response}`;
		};
	}
})();
