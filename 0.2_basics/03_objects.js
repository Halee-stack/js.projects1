// Singleton- A singleton is a design pattern where only one object instance is created and shared throughout the program.
// There are two ways to declare/create objects in JavaScript: Literal and Constructor.
// Object Literals- An object literal is an object created directly using curly braces {} with key–value pairs.

const mySym = Symbol("k2")
const member = {
    name: "Haleema",
    "full-name": "Haleema Sajjad",
    [mySym]: "k2",
    age: 23,
    location: "New York",
    email: "Haleema@aol.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday"]
}
//how to access object in different eays.

console.log(member.email)
console.log(member["email"])
console.log(member["full-name"])
console.log(typeof member[mySym])
member.email = "Haleema@aol.com"

//Object.freeze(member)

member.email = "HALEEMA@gmail.com"
console.log(member);

// function in javascript
//where functions can be treated like variables.
member.greeting = function(){
    console.log("Hello there 👋");
}
// the use of .this --- {.this} in JavaScript is a keyword that refers to the object that is currently calling or executing the function.
member.greeting_Two = function(){
    console.log(`Hello, ${this.name}`);
    console.log(`Hello, ${this.email}`);
}

console.log(member.greeting());
console.log(member.greeting_Two());