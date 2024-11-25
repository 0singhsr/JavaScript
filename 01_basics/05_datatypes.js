// two types of Data are primitive and non prmitive  
// call by value  and  call  by reference  


// Primitive = call by value

// 7 types= String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100 
const scoreValue = 100.3 
const isLoggedIn = false 
const outsideTemp = null


let userEmail;

const  id = Symbol  ('123')

const  anotherID = Symbol('123')
// console.log(id ===  anotherId)

const bigNumber = 345834768734328734877328n  // bigInt

//  Reference or Non primitive  

// Array, Objects, Functions

const  heros = ["shaktiman", "naagraj", "doga"]
 
let myObj = {
    name:  "Sarang",
    age: 22,
}

const  myFunction = function(){
    console.log("Hello Worlddd!!");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


