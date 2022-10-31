// 


function a() {
    console.log("A!");
    return function () {
        console.log("B!");
    }
}


// var someFun = a();
// someFun();



// function b() {
//     var ime = "Neko ime";

//     function hi() {
//         console.log("Hi "+ime);
//     }

//     return hi;
// }

// var cl = b; 
// console.log(cl);
// console.log(cl());
// cl()();


// function biloSta() {
//     var counter = 0;

//     function dodaj() {
//         return counter += 1;
//     }

//     return dodaj;
// }

// var closure = biloSta();

// console.log(closure());
// console.log(closure());
// console.log(closure());
// console.log(closure());

