// Constructor function 
// ime, prezime, godiste, mesto rodjenja, ljubimac

// kolikoImaGodina()
// reciPunoIme()
// gdeSamRodjen()
// imamLjubimca()
// kolikoImamGodZa100God()
// promeniPrezime()




// function BitStudent(name, surname, yearOfBirth, placeOfBirth, pet) {

//     this.ime =  name;
//     this.surname= surname;
//     this.godiste = yearOfBirth;
//     this.mestoRodjenja = placeOfBirth;
//     this.ljubimac = pet;



//     this.kolikoImamGodina = function() {

//         var today = new Date();
//         var year = today.getFullYear();
        
//         return year - this.godiste; 
//     };


//     this.reciPunoIme = function() {
//         return this.ime + " " + this.surname;
//     };

//     this.gdeSamRodjen = function () {
//         return this.mestoRodjenja;
//     };

//     this.kolikoImamGodZa100God = function() {
//           return 100 + this.kolikoImamGodina(); 
//     };

//     this.promeniPrezime = function(newSurname) {
//         this.surname = newSurname;
//     };

//     this.imamLjubimca = function() {
//         return this.ljubimac ? true : false;
//     };


//     this.duzinaImena = function() {
//         var i;
//         for(i=0; i<this.ime.length; i++);

//         return i;
//     };
// }



// var student1 = new BitStudent("Vlastimir", "Bulatovic", 1998, "Pristina", null);

// console.log(student1.gdeSamRodjen());
// console.log(student1.kolikoImamGodZa100God());
// console.log(student1.reciPunoIme());
// student1.promeniPrezime("Nesto");
// console.log(student1.reciPunoIme());
// console.log(student1.imamLjubimca());
// console.log(student1.duzinaImena());




// function someShift(arr, deleteItem) {
//     var counter = 0;

//     for(var i=0; i<arr.length; i++) {
//         if(arr[i] === deleteItem){
//             delete arr[i];
//             counter ++;
//             continue;
//         }
//         if(counter) arr[i-counter] = arr[i];
//     }

//     // arr.length = arr.length - counter;
//     return arr;
// }

// console.log(someShift([7,2,7,2,7,2,7,2] , 7))