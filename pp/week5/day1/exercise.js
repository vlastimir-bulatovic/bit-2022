// 1. 

// function duplicateArray(arr){
//     var newArray = [];

//     for(item of arr) {
//         newArray.push(item, item);
//     }

//     return newArray;
// }

// console.log(duplicateArray([9,2,3,4,5,6,7,8]));


// 2. 

// var removeDuplicates = function (arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		for (var j = i + 1; j < arr.length; j++) {
// 			if (arr[i] === arr[j]) arr.splice(j, j);
// 		}
// 	}
// 	return arr;
// };

// console.log(removeDuplicates([12,21,55,3,3,3,5,87,9]));



// 3. a)


// function isLengthOdd(arr) {
//     return (arr.length % 2 === 1) ? true : false;
// }

// console.log(isLengthOdd([12, 21, 55, 3, 3, 3, 5, 87, 9]));

// 3. b)

// function countLength(arr) {
//     return (arr.length % 2 === 0) ? "Even number of elements" : Math.floor(arr.length/2) ;
// }

// console.log(countLength([12, 21,3]));

// 4.

// function min(arr) {
//     var result = {
//         minValue: null,
//         minLastIndex:null
//     }

//     result.minValue = Math.min.apply(null, arr);

//     // for(el of arr) {
//     //     if (el < result.minValue) result.minValue = el;
//     // }

//     result.minLastIndex = arr.lastIndexOf(result.minValue);

//     return result;
// }

// function max(arr) {
// 	var result = {
// 		maxValue: null,
// 		maxLastIndex: null,
// 	};

// 	result.maxValue = Math.max.apply(null, arr);

// 	result.maxLastIndex = arr.lastIndexOf(result.maxValue);

// 	return result;
// }

// console.log(max([12, 21, 55, 3, 3, 3, 5, 87, 9]));


// 5. a)

function lessThen(arr, n) {

    for(var i =0; i<arr.length; i++) {
        if(arr[i] >= n) arr.splice(i,i)
    }

    return arr;
}

// console.log(lessThen([1,23,4,57,8], 10));


// 5. b)

function isContained(arr, str) {
    var newArray = [];
    var tmp = "";

    for(el of arr) {
        tmp = el.toLowerCase();
        if (tmp.indexOf(str) !== -1) newArray[newArray.length] = el;
    }

    return newArray;
}

// console.log(isContained(["JavaScript", "Programming", "fun", "product"], "pro"));


// 5. c)

function filter(arr, cond, callbackFun) {

    return callbackFun(arr, cond);
}

// console.log( filter(["JavaScript", "Programming", "fun", "product"], "pro", isContained));


