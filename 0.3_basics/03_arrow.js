const login = {
    loginname: "John",
    cost: 100,

    greeting: function(){
        console.log(`${this.loginname}, welcome to the website`)
        console.log(this);
    }

}

//login.greeting()
//login.loginname = "Kate" // hard coded... context changed 
//login.greeting()

//console.log(this) // wil show {} empty object

//function one(){
    //let loginname = "John"
    //console.log(this); // when we print THIS in a function in a node environment we have global value and some microtasks and many values.
    //console.log(this.loginname); // will show undefined because we cannot use THIS in a function.
    
//}
//one()


/// how to declare functions through arrow function
//const two = function () {
  //  let loginname = "John"
  //  console.log(this.loginname);
//}
//two() /// this will show undefined because this function does not know how to use THIS.


// this is how to use ARROW function
//const two = () => {
    //let loginname = "John"
    //console.log(this);
//}   
//two()
//() => {} // basic arrow function syntax

//const addTwo (num1, num2) => { // one way to do
    //return num1 + num2. // write return keyword when we have curly bracles {}.
//}

//const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // no need to write return keyqord when you have parenthesis

// how to return object
const addTwo = (num1, num2) => ({loginname: "John"}) 





console.log(addTwo(2, 2))


