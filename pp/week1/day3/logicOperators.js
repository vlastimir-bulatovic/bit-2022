// Truthy and falsy values in js

//Falsy values are: 

// false
// 0, -0 
// null
// undefined
// "", '', ``
// NaN

// Truthy value are everting else that includes  [] empty array, {} empty object and function() {} empty function



// Logic operators !(not), &&(and), ||(or)


// !(not) is a unary operator that convert truthy and false values to boolean 
// when stand with truthy value then convert to false
console.log(!"some truthy value");// expected false
console.log(!1);// expected false
console.log(!true);// expected false

// when stand with falsy values then convert to true
console.log(!"");// expected true
console.log(!0);// expected true
console.log(!false);// expected true
console.log(!null);// expected true
console.log(!NaN);// expected true
console.log(!undefined);// expected true

// when we put !! that convert 
//truthy to true and 
console.log(!!"some string");// expected true

//falsy to false
console.log(!!"");// expected false



// Logic operator &&(and) is binary(need two operands) operator that need both operands to be truthy
// It check from left to right and if first operand is true return second operand 
"some text" && "123";// expected "123"
true && "";// expected ""


// if first operand is falsy then it return that operand  
0 && true;// expected 0 
null && undefined;// expected null

//explanation: This vay of handling logical operation (with &&) is called "lazy evaluation"
// meaning that if first operand is falsy then it doesn't check second operand just return first value
// and only if first operand is truthy will return second operand 



// Logic operator ||(or) is binary(need two operands) operator that only one operand to be truthy
// It check from left to right and the first truthy operand that can find will return 
"some text" || "123";// expected "come text"
true || "";// expected true
undefined || 23;// expected true

// if there isn't truthy operand then it will return last operand   
null || undefined;// expected undefined
NaN || "";// expected ""


//explanation: This vay of handling logical operation (with ||) is called "lazy evaluation"
// meaning that if first operand is truthy then it doesn't check second operand just return first value
// and only if first  operand is falsy will return second operand 

// practical use of lazy evaluation 


var a; 

a && a++; // only if variable a is truthy will be incremented 
a && console.log("A is truthy");
true&&console.log("Do something");


