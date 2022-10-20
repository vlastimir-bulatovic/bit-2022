// function is concept of reusing peace of code multiple times 

// function declaration 
//                   function parameters
function someFunName(parameterA, parameterB) {

  // this variable is only visible in this function 
  var someLocalVariable = 0;


  // do something with our params
  someLocalVariable = parameterA * parameterB;


  // return is a reserved word and everting returned here will be output of our function
  // if return is not not written or just return ; it will output undefined 
  return someLocalVariable;
  
  // return also end our function meaning any code after return will never be executed

}

// to execute our function code we need to call our 
// function by her name and give her our data. Data that function 
//receive is in arguments
//    function arguments
someFunName(37, 56); // parameterA = 37 and parameterB = 56
// function parameters are not required but arguments are


// function can also be created as a function expression 

// variable declaration    functional expression ()
var someDeclaredVariable = function () {
  // do some code
}

// function call 
someDeclaredVariable();



// number of argument that our function is getting can sometimes be pretty big
// for that we can use reserved word "arguments" that is a array of argument values

function someFunction() {

  return arguments; // return all received argument on function call
}

someFunction(1,2,3,45,"test",6,7,77,"test",7,7); // returns [1,2,3,45,"test",6,7,77,"test",7,7]