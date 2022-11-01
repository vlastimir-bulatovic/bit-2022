// 1. Napisati funkciju koja za svaki element niza, mnozi taj 
// element sa 3 i umanjuje ga za 5. Funkcija vraca novi niz! Ne menja originalni

// function compute(arr) {

//     var newArray = [];

//     for(var i=0; i <arr.length; i++){
//         newArray[i] = arr[i]*3 -5;
//     }

//     return newArray;
// }

// console.log(compute([1,3,4]));

// 2. Napisati funkciju koja pronalazi prvi element u nizu koji je manji od 5. Funkcija vraca taj element.

// function getSmallerTheFive(arr) {
//     for(var i=0; i< arr.length; i++) {
//         if(arr[i] < 5) return arr[i];
//     }

//     return "No such number";
// }

// console.log(getSmallerTheFive([44,33,9,576,8,3]));




// 3. Napisati funkciju koja proverava da li su svi elementi niza veci od 10. Funkcija vraca true ili false.

// function isGreaterThenTen(arr) {

//     for(var i = 0; i < arr.length; i++ ) {
//         if(arr[i] <= 10) return false;
//     }

//     return true;
// }

// console.log(isGreaterThenTen([11,34,17]));




// 4. Napisati funkciju koja proverava da li je barem jedan element niza paran. Funkcija vraca true ili false

// function isOneEven(arr) {

//     for(var i = 0; i < arr.length; i++ ) {
//         if(arr[i] % 2 === 0) return true;
//     }

//     return false;
// }

// console.log(isOneEven([11, 35, 17]));


// 5. Napisati funkciju koja filtrira elemente i u novi niz dodaje samo 
// elemente koji su tipa Number i veci od 3.Funkcija vraca novi niz.

// function filter(arr) {

//     var newArray = [];
``
//     for(var i = 0; i < arr.length; i++){
//         if( !isNaN(arr[i]) && arr[i] > 3) newArray[newArray.length] = arr[i]; 
//     }

//     return newArray;
// }

// console.log(filter([10, "Pera", 13, 4, 1, 0, undefined,  -4]));