// Selection Sort //

// Selection Sort is similar to Bubble Sort, 
// but instead of the largest values "bubbling" to the top, 
// the smallest values are selected and placed at the beginning.

// Selection sort works: 

// By going up an array and selecting the minimum value. 
// The minimum value is then moved to the beginning of the array. 
// The left side of the array becomes more sorted 
// at the end of each pass through the array, until the whole array is sorted.

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[lowest]) {
                lowest = j;
            }

        }

        if (lowest !== i) {
            // Swap
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }
    
    return arr;
}

console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]

// If the array is nearly sorted, e.g. [2, 1, 3, 4], or is sorted, then for each element in the array, 
// Selection Sort will run through the array looking for the minimum, even if no swaps are necessary.

// Even if the array is sorted, there will be roughly n * n comparisons (but no swaps), 
// where n is the number of elements in the input array.

// So, at best-case we’ll have O(n^2) comparisons and O(1) swaps.

// This means that overall, Selection Sort has a very bad best-case run time of O(n^2) – quadratic time complexity.
