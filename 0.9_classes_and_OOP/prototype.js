

// PROTOTYPE //
// In JavaScript, a prototype is an object that another object can inherit properties and methods from.

let myName = "Haleema       "

console.log(myName.trim().length); /// this trim function in JavaScript, it's used to remove whitespace from the beginning and end of a string.
console.log(myName.trueLength); /// Though it wil show us undefined but the extra spaces are usually not considered part of the meaningful text, so trueLength() removes them before counting.


let myCars = ["toyota", "ford", "honda"]

let carHorsePower = {
    toyota: "~169 hp",
    ford: "~315–500+ hp",
    honda: "192–204 hp",

    getcarHorsePower: function(){
        console.log(`The horse power of toyota is ${this.toyota}`)
    }
}

Object.prototype.haleema = function(){
    console.log(`This is available in all objects`);
}

Array.prototype.heyHaleema = function(){
    console.log(`hey haleema `) /// array has power to access because we gave it a power.
}

//carHorsePower.haleema()
myCars.haleema()
myCars.heyHaleema()
//carHorsePower.heyHaleema() // won't execute due to no access. 




