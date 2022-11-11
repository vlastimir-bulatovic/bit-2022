//  Errors in js are objects

// var e = new Error("ne"); // reference error, type error etc.


try {
    console.log(name); // this error will break try block
    throw new Error("Novi error");// any code after this line will not be executed

    throw { // we can define our error like this also
        name: "neka greska",
        message: "nesto"
    }
    console.log(name); 
    console.log("Ovo se nece izvrsiti jer nam kod puca na prethodnoj liniji");

}catch(err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
    console.log("Ovo ce se izvrsiti")

}finally {
    console.log("Ovo se uvek izvrsava!");
}


console.log("Nesto");