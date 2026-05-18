// There are two tyoes of data types: primitive and non- primitive(reference type).
// There are seven primitive data types which are: String, Number, Boolean, Undefined, Null, Bigint, and symbol. They store single values and are usually fast and memory-efficient.
// PRIMITIVE 

const score = 70; //number
const scoreValue = 25.4 // number because decimal does not matter here.

const isLoggedIn = false //boolean type
const weatherToday = null // its null means its completely empty. It does not mean the value is zero it just means its null(empty).

let contactNumber; // will be undefined becuase I did not want to add values right now in it.

//HOW TO DECLARE SYMBOL
const id = Symbol('000')
const backupId = Symbol('000')
console.log(id === backupId); // It’s false because every Symbol() call creates a completely unique value, even if the description string is the same.

const bigNumber = 56714678910203423990n // The n at the end of a big number in JavaScript means it’s a BigInt.

// There are three non-primitive or reference data type. which are: array, objects, and functions. They can store multiple values or more complex data.
// NON- PRIMITIVE (REFERENCE)

// ARRAY
const states = ["New York", "Texas", "California"] 

// OBJECTS
let person = {
    name: "Kate",
    age: 30,
     city: "New York",
 }

//FUNCTIONS
const myFunction = function(){
    console.log("Hey beautiful!");
}

//typeof in JavaScript is an operator used to check the data type of a value or variable.. To do this we have to do like:
console.log(typeof myFunction); // its a function object becuase functions can be stored in variables.
console.log(typeof scoreValue);
console.log(typeof weatherToday); //is an object because it usually stores multiple related values together.
console.log(typeof backupId);


