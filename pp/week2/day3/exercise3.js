// .1 Merge two arrays in one

// var a = [1, 2, 3, 4];
// var b = [5, 6, 7, 8, 9];

// var c = [];

// this loop will work only if length of two array is the same
// for (var i = 0; i < a.length + b.length; i++) {

//     if ( i < a.length) {
//         c[c.length] = a[i];
//     }else {
//         c[c.length] = b[i-a.length];
//     }    
// }

// console.log(c);

// shuffle add two arrays

// var a = [1, 2, 3, 4];
// var b = [5, 6, 7, 8, 9];

// var c = [];

// for (var i = 0; i < a.length || i < b.length; i++) {

//     if (a.length > i) {
//         c[c.length] = a[i];
//     }
//     if (b.length > i) {
//         c[c.length] = b[i];
//     }
// }

// console.log(c);

// .2 convert integer digit to array  123 -> [1,2,3]

// for tree digits only
// var n = 123 ;
// var c = [];

// for(var i = 0; i <3; i++) {

//     c[c.length] = n % 10;

//     n = Math.round(n/10);

// }

// console.log(c);

// for any number of digits
// var n = 1234567;
// var numOfDigits = (n + '').length; // only for integers

// var c = [];

// for (var i = 0; i < numOfDigits; i++) {

//     // save last digit
//     c[c.length] = n % 10;

//     // remove last digit from number
//     n = Math.floor(n / 10);
// }

// console.log(c);


// .3 Reverse digits in integer 123 -> 321

// only for 3 digits
// var n = 123
// var reverseN = 0;

// for (var i = 0; i < 3; i++) {

//     var tmp = n % 10;

//     reverseN = reverseN * 10 + tmp;

//     n = Math.floor(n / 10);
// }

// console.log(reverseN);


// for any numbers of digit

// var n = 123456789;
// var numberOfDigits = (n + "").length;
// var reverseN = 0;

// for (var i = 0; i < numberOfDigits; i++) {

//     var tmp = n % 10;

//     reverseN = reverseN * 10 + tmp;

//     n = Math.floor(n / 10);
// }

// console.log(reverseN);

// how many digits does number have 

// var n = 1355;
// var digitCounter = 0;

// while(n) {
//     n = Math.floor(n/10);
//     digitCounter++;
// }

// console.log(digitCounter);


// .5 
// how many times number repeat it self in array

// var a =[2,5,6,7,2,3,2];
// var number = 2;
// var counter = 0;

// for(var i=0; i<a.length; i++) {
//     if(a[i] === number) counter++;
// }

// console.log(counter);