// https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/


// .1

// var a = [3, 5, 22, 5, 7, 2, 45];
// var b = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// var sumOfArray1 = 0;
// var sumOfArray2 = 0;

// // with two loops 

// for (var i = 0; i < a.length; i++) {
//     sumOfArray1 += a[i];
// }

// for (var i = 0; i < b.length; i++) {
//     sumOfArray2 += b[i];
// }

// console.log(sumOfArray1 + " + " + sumOfArray2 + " = " + (sumOfArray1 + sumOfArray2));

// // with one loop 
// sumOfArray1 = 0;
// sumOfArray2 = 0;

// for(var i=0; i<a.length || i<b.length; i++) {

//     sumOfArray1 += (a[i]) ? a[i] : 0;
//     sumOfArray2 += (b[i]) ? b[i] : 0;

// }

// console.log(sumOfArray1 + " + " + sumOfArray2 + " = " + (sumOfArray1 + sumOfArray2));

// .2 

// var n = 22; 

// for(var i = 1; i<=n; i ++) {

//     if(i%2 === 0) {
//         console.log(i);
//     }

// }


// .3 

// var arr = [43, 'what', 9, true, 'cannot', false, 'be', 3, true];

// for(var i = arr.length -1; i >= 0; i-- ) {
//     console.log(arr[i]);
// }

// .4 

// var a = [4, 6, 7];
// var b = [8, 1, 9];
// var c = [];

// // creating new array 
// for (var i = 0; i < a.length; i++) {
//     c[i] = a[i] + b[i];
// }

// console.log(c);


// for (var i = 0; i < a.length; i++) {
//     a[i] += b[i];
// }

// console.log(a);

// .5

// we can loop over string because string is array of characters

// var str1 = "javascript"; // ['j', 'a', 'b', ...]
// var str2 = ""; // we need new variable because string is immutable(we can't change character in string)

// for (var i = 0; i < str1.length; i++) {
//     if (i % 2 === 0) {
//         str2 += 'Z';
//     } else {
//         str2 += str1[i];
//     }
// }

// console.log(str2);

// .6 

// var str = "don't know why";
// var isCharIn = false;

// for(var i = 0; i<str.length; i++) {

//     if(str[i] === "y" || str[i] === "Y") {
//         isCharIn = true;
//         break;
//     }
// }

// console.log( isCharIn);

// .7

// var n = 5;
// var factorial = 1;

// while(n > 0) {
//     factorial *= n;

//     n--;
// }

// console.log(factorial);

// .9 

// var str = "racecar";
// var isPalindrome = true;

// for (var i = 0; i < str.length / 2; i++) {

//     if (str[i] !== str[str.length - i - 1]) {
//         isPalindrome = false;
//         break;
//     }
// }

// console.log("Is string palindrome?: ", isPalindrome)

// .10

// var num1 = 10;
// var str = ""; 
// var sum = 0;

// for(var i = 1; i<=num1; i++) {
//     sum += i;

//     if( i === num1) str += i;
//     else str += i + " + ";  
// }

// console.log(str+ " = " + sum);