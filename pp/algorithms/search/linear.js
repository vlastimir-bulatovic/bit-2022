// Linear Search //


// Linear Search is also very straightforward and easy to implement: 
// simply loop over each element in an array and stop if that element equals our target value, 
// then return that element’s index


function searchAlgorithm(search, arr){
    for (let i = 0; i < arr.length; i++) {
		if (arr[i] === search) return i;
	}
}


const someArray = [10, 13, 22, 44, 34, 55, 99, 200, 33];
const searchValue = 33;


console.log(searchAlgorithm(searchValue, someArray));

// The best case time complexity of Linear Search is O(1) – constant time. 
// This occurs if the value we're searching for is at the beginning of the array. 
// The algorithm will always only have to make one comparison, no matter the size of the array.


// The worst case time complexity of Linear Search is O(n).
// This occurs if the value we're searching for is at the end of array.

// Note that!!! Linear Search is the best we can do when searching unsorted arrays, such as [4, 2, 3].