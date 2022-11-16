const f1Grid = [
	{
		id: "1",
		team: "Red Bull Racing",
		driver: "Max Verstappen",
		country: "Netherlands",
		img: "car_1",
	},
	{
		id: "16",
		team: "Ferrari",
		driver: "Charles Leclerc",
		country: "Poland",
		img: "car_2",
	},
	{
		id: "11",
		team: "Red Bull Racing",
		driver: "Sergio Perez",
		country: "Mexico",
		img: "car_1",
	},
	{
		id: "2",
		team: "Red Bull Racing",
		driver: "Max Verstappen",
		country: "Netherlands",
		img: "car_1",
	},
	{
		id: "26",
		team: "Ferrari",
		driver: "Charles Leclerc",
		country: "Poland",
		img: "car_2",
	},
	{
		id: "21",
		team: "Red Bull Racing",
		driver: "Sergio Perez",
		country: "Mexico",
		img: "car_1",
	},
];

const races = ["Bahrein GP","Belgian GP", "British GP"];



const track = document.querySelector("#track");
let isRaceOver = false;

function startGrid() {
    isRaceOver = false;
    track.innerHTML =`<h1>${races[Math.floor(Math.random()*races.length)]} </h1>`;

    f1Grid.forEach((element) => {
        
		let car = document.createElement("div");
		car.innerHTML = `<img  src="./assets/${element.img}.png" width="40">`;
		car.id = `driver-${element.id}`;

		track.append(car);
        
        car.style.marginLeft = -5 + "%";
	});
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    startGrid();

	let raceStart = setInterval(() => {
		f1Grid.forEach((element) => {
			let car = document.querySelector(`#driver-${element.id}`);
			let margin = car.style.marginLeft;
			let marginNumeric = Number(margin.slice(0, margin.length - 1));

			if (marginNumeric >= 100) {
				alert(`Winner: ${element.driver}`);
				clearInterval(raceStart);
				track.innerHTML = "";
			} else {
				let pace = Math.random();

				!isRaceOver &&
					(car.style.marginLeft = marginNumeric + pace + "%");
			}
		});
	}, 100);

})
