// Conditions are a way to control the flow of the code execution


var someCondition = 12;

// if(condition) is true or truthy it will execute code in {} 
if(someCondition) {
    // code executed only if condition is true
}


if(someCondition){
    // code executed only if condition is true
}else {
    // code executed only if condition is false
    // this part is optional 
}


if(someCondition) {
    // code executed only if condition is true
}else if(someCondition !== 0){
    // code executed only if first condition is false and second condition is true (someCondition !== 0)
}else {
    // in every other case this code will be executed
}

// explanation: chaining multiple if-else code blocks only one will be executed 
// first true or truthy if condition 
// if every condition is false or falsy then else code block will be executed if exist 




// ternary operators 
// used as a short hand syntax for if-else 

//         if(someCondition){  // code block if true or truthy   } else {// code block if false or falsy }
var test = (someCondition) ? "if someCondition is true or truthy"    :   "if condition is false or falsy";