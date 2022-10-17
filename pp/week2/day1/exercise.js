
var x=0
while (x<10){
    console.log(x*x)
    x++;    
}

for(var counter = 1; counter < 10; counter++) {

    console.log(counter*counter);

}


// .1 

// var x=0
// while (x<15){
    
//     if(x%2 === 0){
//         console.log("even");
//     }else {
//         console.log("odd");
//     }

//     x++;
// }

for (var i = 0; i < 15 ;i++){
    if(i%2 === 0){
        console.log("even");
    }else {
        console.log("odd");
    }
     

}

//.2

// var sum = 0; // suma 

// var brojac = 0;

// while (brojac<1000){
    
//     if(brojac % 3 === 0 && brojac % 5 === 0){

//         sum += brojac; // sum = sum + brojac
    
//     }

//     brojac++;
// }

// console.log(sum);

sum = 0;

for (var i =0; i < 1000; i++){

    if (i % 3===0 && i % 5===0){
        sum+=i;
    }
}

console.log("\n",sum);

// .3
var niz = [1,14,23,44,64,22];
var sum = 0;
var product = 1;

for(var i = 0; i< niz.length; i++){
    sum += niz[i]; // sum = sum + niz[i]
    product *= niz[i];// product = product * niz[i]
}

console.log("\nSuma je: ", sum);
console.log("Product je: ", product, "\n")


// .4 

var x = ['1', "A", "B", "c", "r", true, NaN, undefined];
var resultString = "";
for (var i in x) {
    resultString += x[i];
}

console.log("\nArray to string: ", resultString, "\n");

// .5 

var niz = [
    [1,2,3,4],
    ["a","b", "c"],
    ["z","e", "d"]
];

for(var i = 0; i < niz.length; i++) {
    
    console.log(niz[i]);
    
    for(var j = 0; j< niz[i].length; j++){

        console.log(niz[i][j]);
    
    }
}

// .6 
var sum = 0;
for(var i =1; i<=20; i++){
    sum += i*i;
}

console.log("\nSum of square of the first 20 numbers is: ", sum);

// .7

var ocene = [80, 77, 88, 95, 68];

var average = 1;

for(var i = 0; i<ocene.length; i++){
    average += ocene[i]; // average = average + ocene[i] 
}

average = average /ocene.length;

console.log("\n",average);

if(average > 90) {
    console.log("desetka");
}else if(average > 80) {
    console.log("devetka");
}else if(average > 70) {
    console.log("osmmica");
}else if (average > 60) {
	console.log("sedmica");
} else if (average > 50) {
	console.log("sestica");
} else {
	console.log("petica");
}


// another way of writing the same thing

switch (true) {
	case (average > 90):
		console.log("desetka");
		break;
	case (average > 80):
		console.log("devetka");
		break;
	case (average > 70):
		console.log("osmica");
		break;
	case (average > 60):
		console.log("sedmica");
		break;
	case (average > 50):
		console.log("sestica");
		break;
	default:
		console.log("petica");
		break;
}


// .8

for(var i=0; i<100;i++) {

    if(i % 3===0){
        console.log("Fizz");
    }else if(i % 5===0) {
        console.log("Buzz");
    }else {
        console.log(i);
    }
}


for (var i = 0; i < 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 5 === 0 ) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}