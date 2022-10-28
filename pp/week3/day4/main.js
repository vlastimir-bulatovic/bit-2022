

// function fibonacci(num) {
// 	if (num < 2) {
// 		return num;
// 	} else {
// 		return fibonacci(num - 1) + fibonacci(num - 2);
// 	}
// }


// console.log(fibonacci(3))



function fibonacci_series(n, isDeclared) {

	if(!isDeclared)var arr = [0,1];

	if (n === 1) {
		return [0, 1];
	} else {
		arr = fibonacci_series(n - 1, true);
		arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
	}

	return arr;
};



console.log(fibonacci_series(8));