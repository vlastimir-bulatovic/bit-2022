// loops_2

// .1
var a = [5, -4.5, 3, 7];
var e = 3;
var isElement = "no";

for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {

        isElement = "yes";

        break;

    }
}
console.log("1. exercise");
console.log("Is in array?: ", isElement);

// .2 
var arr = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
        arr[i] *= 2;
    }
}

console.log("\n2. exercise");
console.log(arr);


// .3

var arr = [4, 2, 2, -1, 6];
var indexMin = 0;
var min = Infinity;

for (var i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
        min = arr[i];
        indexMin = i;
    }
}

console.log("\n3. exercise");
console.log("Min:", min);
console.log("Index of min:", indexMin);


// .4

var arr = [4, -2, 2, -1, 6, -12, 22, -11];
var min = Infinity;
var secondMin = Infinity;

for(var i=0; i<arr.length; i++) {

    if(arr[i]<min) {
        secondMin = min;

        min = arr[i];
    }else if(arr[i] < secondMin) {
        secondMin = arr[i]
    }
}

console.log("\n4. exercise");
console.log("Min:", min);
console.log("Second min:", secondMin);


// .5

var arr = [4, -2, 2, -1, 6, -12, 22, -11];
var sum = 0;

for(var i=0; i<arr.length; i++) {

    if(arr[i]>0) sum+= arr[i]
}

console.log("\n5. exercise");
console.log("Sum of all positive:", sum);


// .6 

var arr = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric = "yes";

for(var i=0; i< arr.length/2; i++) {

    if(arr[i] !== arr[arr.length -i-1]){
        isSymmetric = "no";
        break;
    }

}

console.log("\n6. exercise");
console.log("Is array symmetric:", isSymmetric);

// .7

var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8, 9];

var c = [];

for (var i = 0; i < a.length || i < b.length; i++) {

    if (a.length > i) c[c.length] = a[i];
    
    if (b.length > i)  c[c.length] = b[i];
}

console.log("\n7. exercise");
console.log("The new array:", c);



// .8 

var a = [1, 2, 3, 4];
var b = [5, 6, 7, 8, 9];

var c = [];

for (var i = 0; i < a.length +  b.length; i++) {
	if (a.length > i) c[c.length] = a[i];

	else c[c.length] = b[i-a.length];
}

console.log("\n8. exercise");
console.log("The new array:", c);


// .9

var a = [4, 6, 2, 8, 2, 2];
var e = 2;

var b = [];

for(var i =0; i<a.length; i++) {

    if(a[i] !== e) b[b.length] = a[i];

}

console.log("\n9. exercise");
console.log("The new array:", b);


// .10

var a = [2, -2, 33, 12, 5, 8];
var b = [];
var e = 78;
var p = 3;

for(var i=0; i<a.length; i++) {

    if(i === p) b[b.length] = e;

    b[b.length] = a[i];
}

console.log("\n10. exercise");
console.log("The new array:", b);