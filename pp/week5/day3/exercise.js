// 1.

// function reverseNum(n) {

    
//     var splitString = String(n).split("").reverse().join("");

//     return Number(splitString);

// }


// console.log(reverseNum(12345));

// 2.

// function alphabeticOrder(str) {
//     var newStr = str.toLowerCase().split("").sort().join("");

//     return newStr;
// }

// console.log(alphabeticOrder("dcaB"));


// 3. 

// function alphabeticOrder(str) {
//     var strArr = str.split(" ");
//     for(var i =0; i<strArr.length; i++) {

//         strArr[i] =  strArr[i].split("").sort().join("");
//     }

//     return strArr.join(" ");
// }

// console.log(alphabeticOrder("Republic of Serbia"));


// 4. 

// function splitWord(str) {
//     str = str.split(" ");
//     return str;
// }

// console.log(splitWord("John Snow"));

// function splitWord(str){
//     var newArr = [];
//     var word = "";
//     for(var i =0; i<str.length; i++) {

//         if(str[i] === " ") {
//             newArr[newArr.length] = word;
//             word = "";
//         }else {
//             word+=str[i];

//             if(i === str.length-1) newArr[newArr.length] = word;
//         }
//     }

//     return newArr;

// }

// console.log(splitWord("John Snow"));


// 5.

function splitWord(str) {
    str = str.split(" ");
    str[str.length - 1] = str[str.length - 1][0] + ".";
    return str.join(" ");
}

console.log(splitWord("John Snow"));