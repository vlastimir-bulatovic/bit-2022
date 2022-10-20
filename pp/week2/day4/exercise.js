var sum = 500;

function add(a, b) {
	var sum = a + b;
	return sum;
}

console.log(add(2, 3));
console.log(sum);

var oduzimanje = function (n) {
	console.log(`Oduzeo sam se od ${n} piva`);
};

oduzimanje(10);

function addition() {
	var sum = 0;

	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === "number") sum += arguments[i];
	}

	return sum;
}

console.log(addition("dsad", 1, 54, null));

// 1.

var max = function (a, b) {
	if (a > b) return a;
	else return b;
};

// 2.

var oddOrEven = function (a) {
	return a % 2 ? "odd" : "even";
};

console.log(oddOrEven(3));

// 3.

function threeDigit(a) {
	var brojString = a + "";
	if (brojString.length === 3) return "It's a 3 digit number";
	else return "It's not a 3 digit number";
}

console.log(threeDigit(999));

// 4.

function arithmeticMean() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) sum += arguments[i];
	return sum / arguments.length;
}

// 5.

function drawSquare(n) {
	var str = "";
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {

            // if first OR last row  print * in every column
			if (i === 0 || i === n - 1) {
				str += "*";
			} else { // in every other row print only first and last column
				j === 0 || j === n - 1 ? (str += "*") : (str += " ");
			}

            // if last column add line break
			if (j === n - 1) str += "\n";
		}
	}

	return str;
}

console.log(drawSquare(4));

// 6.

function chart(a, b, c) {
	var string1 = (string2 = string3 = "");
	for (var i = 0; i < a || i < b || i < c; i++) {
		if (i < a) string1 += "*";
		if (i < b) string2 += "*";
		if (i < c) string3 += "*";
	}

	return string1 + "\n" + string2 + "\n" + string3 + "\n";
}

console.log(chart(5, 2, 6));

// 7.

function numOfDigits(n) {
	var brojStr = (Math.trunc(n) + "").length;
	return brojStr;
}

console.log(numOfDigits(9999.5343434));

// 8.

function elementInArr(arr, el) {
	var n = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === el) n++;
	}
	return n;
}

console.log(elementInArr([2, 4, 7, 8, 7, 7, 1], 7));

// 9.

var sumOfOdds = function (arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2) sum += arr[i];
	}
	return sum;
};

console.log(sumOfOdds([2, 4, 5, 6, 7, 8]));

// 10.

function letterRepeat(str, letter) {
	var counter = 0;

	for (var i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === letter.toLowerCase()) counter++;
	}

	return counter;
}

console.log(letterRepeat("neki novi string", "i"));

// 11.

function concatString(str, n) {
	var newStr = "";
	for (var i = 0; i < n; i++) {
		newStr += str;
	}

	return newStr;
}

console.log(concatString("abs", 3));
