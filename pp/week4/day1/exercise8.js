// 1.

// ( function (a) {

//     var tmp = a[0];
//     a[0] = a[a.length-1];
//     a[a.length-1] = tmp;

//     return a;
// })([4,5,11,9]);

// console.log(newArray)

// 2.

// var a = 5;
// var b = 4;

// var area  = (function (w,h){
//     return w*h;
// })(a,b);

// console.log(area);


// 3. 

// var newStr = (function(str){

//     var counter = 0;
//     var newStr = "";

//     for(var i=0; i<str.length; i++){
//         if(str[i] === "m" || str[i] === "M"){
//             newStr = newStr + "*";
//             counter++;
//         }else {
//             newStr = newStr + str[i];
//         }
//     }

//     return newStr + "\n" + counter ;

// })("prograMming");

// console.log(newStr);



// 4. 

// var emailSuggest = function (name, surname) {

    
//     var email = name + "." + surname + "@gmail.com";

//     return email;

// }

// console.log(emailSuggest("milos", "benke"));


// 5.

// function octal() {
// 	function conversion(a) {
// 		a = a + "";
// 		return parseInt(a);
// 	}

// 	return conversion;
// }

// var b = octal();

// console.log(b(030));


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

