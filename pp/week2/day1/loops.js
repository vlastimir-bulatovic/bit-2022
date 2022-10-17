// while loop will be execute as long as a condition is true

var i = 0;

while (i < 5) {
  // log value of i
  console.log("while loop", i);

  // increase every time loop is executed
  // we need this counter so that our loop execute only when we want
  i++;
}

// do while will be executed at least one time even if condition is false or falsy

var j = 1;

// execute code once before check condition
do {
  // do something
  j++;
  // check condition if its true execute one more time if false exit
} while (j < 5);

console.log("do-while loop", j++);

// for loop execute code until condition is true

var punishment = "";

//   defined index ; condition ; step for every time loop is executed
for (var index = 0; index < 10; index++) {
  // code to execute in loop until condition is true
  punishment += "I will never do this again \n";
}

console.log(punishment);

// .1
var niz = [1, null, 2, undefined, "0", "nesto", 3];

var arrayCounter = 0; 

console.log("\n \n Array printing");
console.log("while loop results: ");

while(arrayCounter < niz.length) {

    console.log(niz[arrayCounter]);

    arrayCounter++;
}

console.log("for loop result: ");

for (var k = 0; k < niz.length; k++) {
  console.log(niz[k]);
}



// reverse
console.log("\n \n Reverse array printing");

console.log("while loop result: ");
var reverseArrayCounter = niz.length-1;

while(reverseArrayCounter >= 0) {

    console.log(niz[reverseArrayCounter]);

    reverseArrayCounter--
}

console.log("for loop result: ");
for (var i = niz.length-1; i >= 0; i--) {
  console.log(niz[i]);
}

// reverse every second
console.log("\n \nReverse every even");
console.log("while loop result");

var reverseArrayCounter = niz.length-1;

while(reverseArrayCounter >= 0) {
    console.log(niz[reverseArrayCounter]);

    reverseArrayCounter -= 2;
}


console.log("for loop results");
for (var i = niz.length-1; i >= 0; i-=2) {
    console.log(niz[i]);
}


var res="\n";

for (var i=0;i<5;i++){
    //console.log("Ovo je i:", i);
    for (var j=0; j<5; j++){
        res += "*\t";
        //console.log("ovo je j:", j);
    }

    res += "\n";
    
}

for (var i=0;i<5;i++){
    for (var j=0;j<5; j++){
        res+= "*\t";
    }

    res+="\n";
}
console.log(res);

// for-in will execute code for every element in array, object and strings
var a = [1,4,6,9,10];
var result = '\n';

for(var i in a){
    result += 'index: ' + i + ', value: ' +a[i] + '\n';
}

console.log(result);


