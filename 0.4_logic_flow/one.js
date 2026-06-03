// if (first control flow is if statement)

// if (condition) {

// }

if (true) {
    // the code here will exeute based on the condition given. 
}

if (false) {
    // the code will not execute based on the condition given. 
}


/////////////////<<<<<<<<<<<<<<<<<<<<<<<<++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>>>//////////////////

const isUserLoggedIn = true
const weather = 50

if ( weather <= 70 ){
    console.log("less than 70");
} else {
    console.log("weather is greater than 70")
}
console.log("Executed");
if ( 3 !== "3" ){
    console.log("done")
}


/////////////////<<<<<<<<<<<<<<<<<<<<<<<<++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>>>//////////////////

const result = 150

if (result > 50) {
    let strength = "high" // its always good to use let instaead of var becuase var always executed outside too which is not a good practice. 
    console.log(`User strength: ${strength}`);
}
//console.log(`User strength: ${strength}`);

/////////////////<<<<<<<<<<<<<<<<<<<<<<<<++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>>>//////////////////
// short hand notation ... how to use implicit scope 
const balance = 100
if (balance > 70) console.log("check"); // implicit scope because it will execute in one line. 

//nesting // to check multiple conditions
if (balance < 70) {
    console.log("less than 70");

} else if (balance < 55) {
    console.log("less than 55");

} else if (balance < 40) {
    console.log("less than 40");

} else {
    console.log("less than 101");
}

/////////////////////////<<<<<<<<<<<<<<<<++++++++++++++++>>>>>>>>>>>>>>>>>>/////////////////////////
const userLoggedIn = true
const debitcard = true
const loggenInFromEmail = false
const loggedInFromGoogle = true

if (userLoggedIn && debitcard && 3==3) { ///&& means both statements have to be true. And Operator, Logical Operator. Logical operators are used to combine or compare conditions and return a boolean value (true or false).
//They are mainly used in if statements and decision-making.
    console.log("Allowed");
}

if(loggenInFromEmail || loggedInFromGoogle) { // one has to be true to execute ||. OR, logical operator
    console.log("Logged in Successfully");
}


////////////////<<<<<<<<<<<<<<<<<<<<++++++++++++++++++++++>>>>>>>>>>>>>>>>>/////////////////////////

// Nullish Coalescing Operator (??): null undefined

// just like its name, the nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined.

let val1;

//val1 = 2 ?? 4 // 2 will be printed. 
//val1 = null ?? 4
//va11 = undefined ?? 6
val1 = null ?? 7 ?? 8 // first value will be printed 
console.log(val1);

////////////////<<<<<<<<<<<<<<<<<<<<++++++++++++++++++++++>>>>>>>>>>>>>>>>>/////////////////////////

// Ternary Operator 

// The ternary operator is a short way of writing an if...else statement in a single line.
// condition ? valueIfTrue : valueIfFalse;

const bagelCost = 3.00

bagelCost >= 2.50 ? console.log("less than 2.50") : console.log("more than 2.50")