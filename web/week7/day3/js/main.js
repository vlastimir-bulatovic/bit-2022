// const input = ["cherry", "cherry", "kiwi", "apple", "apple", "cherry"];

// console.log(
// 	input.reduce((acc, element) => {
// 		!acc[element] ? (acc[element] = 1) : (acc[element] += 1);
// 		return acc;
// 	}, {})
// );

const socks = [1,2,1,2,1,3,2];
let pairs = 0;
const obj ={};

socks.forEach((element)=>{
    if(obj[element]){
        pairs += 1;
        obj[element] = 0
    }else obj[element] = 1;
});


console.log(pairs)