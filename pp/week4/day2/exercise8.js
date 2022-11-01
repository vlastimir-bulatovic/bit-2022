// 6.

// function errorCallback(){
//     return "Your password is invalid";
// }

// function successCallback() {
//     return "Your password is cool!";
// }

// function passwordChecker(pass, error, success) {

//     if(pass.length < 6) return error;

//     for(var i =0; i < pass.length; i++) {

//         if(parseInt(pass[i]) == pass[i]) return success;

//     }

//     return error;
// }

// var b = passwordChecker("bababa1", errorCallback, successCallback);
// console.log(b())

// 7.

function conditionCallback(el) {
    return el % 2 === 0 ? true : false ;
}

function filterArray(arr, condition) {
    var newArray = [];

    for(var i =0; i < arr.length; i++) {
        if(condition(arr[i])) {
            newArray[newArray.length] = arr[i];
        }   
    }

    return newArray;
}

console.log(filterArray([1, 2, 3, 577, 43, 2, 0], conditionCallback));