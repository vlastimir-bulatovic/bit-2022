// 1.

// function isContains(str, digit=5) {
    
//     for(var i =0; i<str.length; i++) {
//         if(str[i] == digit){
//             return true;
//         }

//     }

//     return false;
// }

// console.log(isContains("ie9219853"));

// 2. 

// function replace(string, rec) {
// 	var noviString = "";
// 	var tmp = "";

// 	for (var i = 0; i < string.length; i++) {
// 		tmp = "";

// 		if (string[i] === rec[0]) {
// 			for (var j = 0; j < rec.length; j++) {
// 				if (string[i + j] === rec[j]) {
// 					tmp += "*";
// 				} else {
// 					noviString += string[i + j];
// 					break;
// 				}

// 				if (j === rec.length - 1) {
// 					noviString += tmp;
// 					i += j;
// 				}
// 			}
// 		} else {
// 			noviString += string[i];
// 		}
// 	}

// 	return noviString;
// }
// console.log(replace("ProgrammJing in JS JS is baba interesting!", "JS"));


// 3. 

// function insertInto(str, index=0, char) {

//     var newStr = "";

//     for(var i=0; i<str.length; i++) {

//         if (i === index - 1) newStr += char;

//         newStr += str[i];
        
//     }

//     return newStr;
// }

// console.log(insertInto("goo morning", 4,"d"));



// 4. 

// function deleteFrom(str, index=0) {

//     var newStr = "";

//     for(var i=0; i<str.length; i++) {

//         if (i === index - 1) continue;
//         newStr += str[i];
        
//     }

//     return newStr;
// }

// console.log(deleteFrom("goo morning", 1));


// 5. 

// function deleteEven(arr) {
//     var newArray = [];

//     for(var i = 0; i<arr.length; i+=2) {
//         newArray[newArray.length] = arr[i];
//     }

//     return newArray;
// }

// console.log(deleteEven([1,2,3,4,5,6,7]));


// 6. 

// function doubleBetween(arr, n,m) {

//     if(n>m || m>=arr.length ) return "Pogresni parametri";

//     for(var i = n; i<=m; i++) {
//         arr[i] = arr[i]*2;
//     }

//     return arr;
// }

// console.log(doubleBetween([12,4,6,7,8,8], 1,4));


// 7. 

// function checkDoubles(arr) {

//     for(var i =0; i<arr.length; i++) {

//         for(var j = i+1; j<arr.length; j++) {
            
//             if(arr[i] === arr[j]){
//                 arr[i] *= 2;
//                 break;
//             } 
            
            
//         }
//     }

//     return arr;
// }


// console.log(checkDoubles([1,2,3,5,1,4,4]));


// 8. 
