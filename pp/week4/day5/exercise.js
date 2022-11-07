// Napraviti funkciju koja izbacuje duplikate iz niza brojeva.

// function removeDuplicates(arr) {
    
//     var newArray = []; // array of uniques
//     var isDuplicate = false;

//     for(var i = 0; i < arr.length; i++) {
        
//         for(var j = 0; j < newArray.length; j++) {
//             if(arr[i] === newArray[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         if(!isDuplicate) newArray[newArray.length] = arr[i];
//         isDuplicate = false;
//     }

//     return newArray;
// }



// console.log(removeDuplicates([1,3,3,3,1,5,6,7,8,1]));



// Napraviti funkciju koja izvrce reci u recenici.

function reversWords(str) {
    
    var newStr = "";
    var word = "";
    var interpunction = "";

    for(var i = str.length -1; i>=0 ;i--) {
        
        

        if(str[i] === " " || i === 0) {
            word += interpunction;
            word += (i === 0) ? str[i] + " " : " ";
            newStr = word + newStr;
            word = "";
            interpunction = "";

        }else {
            if(str[i] === "." || str[i] === "," || str[i] === "?" || str[i] === "!") {
                    interpunction = str[i];
                }else {
                    word += str[i];
                }
        }

    }

    newStr = newStr[0].toUpperCase() + newStr.slice(1);// capitalize first letter of the string
    // .charAt(index) returns a character at given index (in our case index = 0 so first character)
    // .toUpperCase() convert string to uppercase
    // .slice(start, end) returns string from index start to index end. In our case we start from 1 to the end of string. In our case we don't have to specify the end index because it is by default string.length -1
    return newStr;
}
 

console.log(reversWords("capitalize first Letter of the string."));



// Napraviti funkciju koja spaja dva sortirana niza.


// standard bubble sort algorithm
// function sortArray(arr) {
//     var tmp= 0;

//     for(var i= 0; i < arr.length; i++) {
//         for(var j = i +1; j< arr.length; j++) {
//             if(arr[i] > arr[j]) {
//                 tmp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tmp;

//             }
//         }
//     }

//     return arr;
// }


// function mergeSortedArrays(arr1, arr2) {

//     var newArray = [];

//     for(var i = 0; i<arr1.length; i++) {
//         newArray[2 * i] = arr1[i]; 
//         newArray[2 * i + 1] = arr2[i];
//     }

//     return sortArray(newArray);
// }

// console.log(mergeSortedArrays([2, 5, 6, 9], [1, 2, 3, 29]));


// Napraviti funkciju koja nalazi prvi karakter u strignu koji se ne ponavlja.

// function firstUniqueChar(str) {
//     var isUniq = false;

//     for(var i =0; i<str.length; i++) {
//         isUniq = true;

//         for(var j = 0; j < str.length; j++) {
        
//             if(str[i] === str[j] && i !== j) { 
//                 isUniq = false;
//                 break;
//             }
        
//         }

//         if (isUniq) return str[i];
//     }

//     return "No uniq characters!";
// }

// console.log(firstUniqueChar("the quick brown fox jumps then quickly blow air")); 





// function sumOdd(n) {
//     if(n%2 === 0) n /=2;
//     else n = (n+1)/2;

//     // n = Math.ceil(n/2);

//     return n*n;
// }

// function sumEven(n) {
// 	if (n % 2 === 0) n /= 2;
// 	else n = (n - 1) / 2;

//     // n = Math.floor(n/2);

// 	return n*(n+1);
// }

// // console.log(sumOdd(201))