//In JavaScript, a function is a block of code that performs a task. It is used to group reusable code that performs a specific task.
//Instead of writing the same code many times, we write it once in a function and call it whenever needed.


/*
console.log("H");
console.log("E");
console.log("L");
console.log("L");
console.log("O");
*/

function sayWord(){ //definition
console.log("H");
console.log("E");
console.log("L");
console.log("L");
console.log("O");
}


//to print function
sayWord() //this is basic calling function
//sayWord in the reference and () is used for execution of the code. If there is not () after reference then nothing will print.

//function sumNumbers(num1, num2){ 
    //here num1 and num 2 are parameters
    //Parameters in JavaScript are variables listed inside a function definition.
    //They act as placeholders for the values (arguments) you pass into the function.
    //we have to check the data types (typeof) if they both are numbers. and if both are numbers then we can allow to add them.
    //console.log(num1 + num2);
//}    

//sumNumbers(num1, num2) // NaN //
//sumNumbers(5, 5) // simple addition
//sumNumbers(6, "7") // working like strings
//sumNumbers(2, "k") 
//sumNumbers(2, null)
//Arguments in JavaScript is the actual value we pass to a function when calling it. 
//const result = sumNumbers(2, 2) // this can also be stored in a variable by adding "const result ="
//console.log("Result: ", result); //so when we cosole, the value inside the Result is undefined. Console print does not mean that its also returning the value. 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>//

function sumNumbers(num1, num2){ 
    //let result = num1 + num2
    //return result /// nothing can be executed after Return. so what ever has to be retured must be written before Return.
    return num1 + num2
}  
const result = sumNumbers(2, 8)
console.log("Result: ", result)// so it can be seen how the result defined and gave the value Result: 10. 

function memberSignInText(username = "John"){ // by default we can add this valuue  if the user did not add any value.
    //if(username === undefined){ // this can only run if the situation evalautes true and will show undefined.
        //other method to write this above code is:
    if(!username){ // ! means opposite
        console.log("Please sign in");
        return
    }
    return `${username} just signed in`
}
//console.log(memberSignInText("Helen")) 

//console.log(memberSignInText()) // if nothing is passed then it would show undefined. and if the user does  not pass anything here we can give it in default value (parameter -- John).

//and it won't go though <if> statemnt. and if we add any value in the console.log  then it would override the value and gives what ever the user added... as seen below.

console.log(memberSignInText("Haleema"))


