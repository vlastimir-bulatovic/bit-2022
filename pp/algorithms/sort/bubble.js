// Bubble sort

// Bubble Sort is a easy to understand sorting algorithm. 
// It works by looping through an array and comparing neighboring elements, 
// then swapping them if they are in the wrong order. In this fashion, 
// the largest number "bubble" to the top.

// Bubble sort steps: 

// 1.Start at the beginning of the array.
// 2.Is the adjacent element to the right less? If so, swap.
// 3.Move up to next element.
// 4.Repeat steps 2-3 until array is sorted.


function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 3, 1, 2])); // [1, 2, 2, 3]


// The problem with the above solution is that it is very inefficient 
// if the data is almost sorted to begin with 
// it will keep on iterating through even if no swaps were made.

// Note!!! that this sorting algorithm shouldn't be used  


// The best-case complexity of Bubble Sort occurs when the array is nearly 
// sorted and only requires one run-through with swaps. The next run through 
// will then require no swaps, so Bubble Sort will know that the array is sorted and can return it.  
// Therefore, at best, Bubble Sort will require two runs through the array (2n comparisons), 
// resulting in a best-case complexity of O(n) – linear time complexity.


// The worst-case complexity of Bubble Sort occurs when the array is in reverse order.
// There are n elements in the array. For each of these elements, we have to make n comparisons. 
// That's n * n = n^2 operations, so the Big O of Bubble Sort is O(n^2) – quadratic time complexity.

