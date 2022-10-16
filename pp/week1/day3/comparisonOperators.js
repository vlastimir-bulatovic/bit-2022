// comparison operators (==, ===, !=, !==, >, >=, <, <=) return boolean value(true, false) as a result of comparison

// Operation of equality (==, ===) compare two values
// operator == (equal) only check if two values are the same by value
"some" == "some"; // expected true
false == "some";// expected false
1 == 55;// expected false


false == 0; // expected true
false == "";// expected true
true == 1;// expect true
false == null; //expect true
//explanation: comparator == only compare value , he doesn't care about type. That mean that 
// JS will do conversion between types and compare conversed values 
// we should not use this operator lightly because it can create problems


// operator ===(strictly equal)  check if two values are the same by value and by data type.
"some" === "some"; // expected true
false === "some";// expected false
1 === 55;// expected false
false === 0; // expected false 
false === "";// expected false
true === 1;// expect false
false === null; //expect false



// operators of not-equal-to != and !== are exact opposite of equality operators.
// !=(not equal) compare two values by there value and if they are different will return true. 
// If the values are the same it will return false  
"some" != "some"; // expected false
false != "some";// expected true
1 != 55;// expected true

false !== "false"; // expected false
false != 0; // expected false
false != "";// expected false
true != 1;// expect false
false != null; //expect false
//explanation: comparator != only compare value , he doesn't care about type. That mean that 
// JS will do conversion between types and compare conversed values 
// we should not use this operator lightly because it can create problems


// operator !== (not strictly equal) check if two values are not the same by value or by data type. 
"some" !== "some"; // expected false
false !== "false";// expected true
1 !== 55;// expected true
false !== 0; // expected true 
false !== "";// expected true
true !== 1;// expect true
false !== null; //expect true



// operators <(smaller than), <= (smaller or equal then), >(grater then), >=(grater or equal then) 
// only compare values of two operators. Should be used only when numerical values are compared
1 < 2;// expected true
2 < 1;// expected false

2 <= 2;// expected true
2 <= 1;// expected false
