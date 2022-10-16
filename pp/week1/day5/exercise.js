// .1 and .2

var dayInWeek = 5;

switch (dayInWeek) {
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	case 7:
		console.log("Sunday");
		break;
	default:
        console.log("Not a day in a week");
		break;
}

// .3

switch (dayInWeek) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log("It's weekday.");
		break;
	case 6:
	case 7:
		console.log("It's weekend.");
		break;
	default:
		console.log("Input must be number between 1 and 7.");
		break;
}

// .4 and .5

var month = 12;

switch (month) {
	case 1:
		console.log("Jan");
		break;
	case 2:
		console.log("Feb");
		break;
	case 3:
		console.log("Mar");
		break;
	case 4:
		console.log("Apr");
		break;
	case 5:
		console.log("may");
		break;
	case 6:
		console.log("Jun");
		break;
	case 7:
		console.log("Jul");
		break;
	case 8:
		console.log("Avg");
		break;
	case 9:
		console.log("Sep");
		break;
	case 10:
		console.log("Okt");
		break;
	case 11:
		console.log("Nov");
		break;
	case 12:
		console.log("Dec");
		break;
	default:
		console.log("Input must be a number between 1 and 12.");
		break;
}

// .6
var grade = "B";// expected input A, B, C, D, E, F

switch (grade) {
	case "A":
	case "a":
		console.log("Good job");
		break;
	case "B":
	case "b":
		console.log("Pretty good");
		break;
	case "C":
	case "c":
		console.log("Passed");
		break;
	case "D":
	case "d":
		console.log("Not so good");
		break;
	case "F":
	case "f":
		console.log("Failed");
		break;

	default:
        console.log("Not a grade");
		break;
}


// Array 

// .1 

var months = ["January", "February", "March", "April", "May", "June", "Jul", "August", "September", "October", "November", "December"];

console.log(months[5], months[11], months[0]);// June December January


// .2
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days[6]);// Sunday


// .3

var arrayOfNumbers = [2, -4, 5, -2, -11];
console.log(arrayOfNumbers[1], arrayOfNumbers[3], arrayOfNumbers[4]);// expected -4 -2 -11

// .4 

var arrayOfNumbers2 = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(arrayOfNumbers2[1], arrayOfNumbers2[4], arrayOfNumbers2[5], arrayOfNumbers2[6], arrayOfNumbers2[8]);//expected 15 12 18 72 9


// .5

var arrayOfArrays = [
	[1, 2, 1, 24],
	[8, 11, 9, 4],
	[7, 0, 7, 27],
	[7, 4, 28, 14],
	[3, 10, 26, 7],
];

console.log(arrayOfArrays[0][3]);// expected 24

console.log(arrayOfArrays[2]);// expected [7, 0, 7, 27]

console.log(arrayOfArrays[2][1]);// expected  0

