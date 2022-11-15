// Binary Search can be used to search for values in SORTED arrays only – such as [1, 2, 3, 6, 9]. 
// It is more performant that Linear Search for anything other than small arrays (< 10 elements). 
// It is much more performant than Linear Search when the sorted array is large.

// Binary Search is a "divide and conquer" type algorithm 
// it divides the array roughly in half every time it checks 
// whether a value is the one we're looking for.

// Binary search work in this steps: 

// Start in the middle and check if the target is greater or less than that value.

// If the target is greater, we will next look at the second half of the array (ignore the right)
// If the target is smaller, we look at the first half of the array (ignore the left).

// We pick the middle of that half and check if it’s greater or less than our target.

// Repeat this process until we find our target.

// Implementation 


function binarySearch(arr, target) {
	let start = 0;

	let end = arr.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);
		if (arr[middle] < target) {
			// Search the right half
			start = middle + 1;
		} else if (arr[middle] > target) {
			// Search the left half
			end = middle - 1;
		} else if (arr[middle] === target) {
			// Found target
			return middle;
		}

        console.log("step");

	}

	// Target not found
	return -1;
}


console.log(binarySearch([1, 2, 3, 4,5,6,7,8,9,10], 1)) // 1
// console.log(binarySearch([1, 2, 3, 5, 9], 4)) // -1
// console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
// console.log(binarySearch([0, 3], 3)) // 1


// The best case complexity of Binary Search occurs when the first comparison is correct 
// the target value is in the middle of the input array.
// This means that regardless of the size of the array, 
// we'll always get the result in constant time. 
// Therefore, the best case time complexity is O(1).

// The worst case complexity of Binary Search occurs when the target value 
// is at the beginning or end of the array. Therefore, the worst case time complexity is O(log(n)).