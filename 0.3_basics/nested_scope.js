//NESTED SCOPE
//A nested scope occurs when a function is defined inside another function. The inner function can access variables from its own scope and from all outer scopes.
//A closure in JavaScript is a function that remembers and can access variables from its outer (enclosing) scope even after the outer function has finished executing.

function one(){
    const user = "John "

    function two(){
        const portal = "profile"
        console.log(user);
    }
    //console.log(portal);

    two()
}
one()


// if-else

if (true) {
    const user = "John"
    if (user === "John") {
        const portal = " profile"
        console.log(user + portal); // this will print becuase this all run.
    }
    //console.log(portal); // this won't access because its scope was just if if {}. and it will give us error.

}   
//console.log(user); // this won't access because its scope is not here and it will give us error.

//hoisting is happening here
console.log(addOne(6))
function addOne(num){ ///// expression
    return num + 1
}


///////////////<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>/////////////////////////

//Hoisting is JavaScript's behavior of moving declarations to the top of their scope before the code executes.

//This means you can sometimes use variables or functions before they appear in the code.
addTwo(4)
const addTwo = function(num){ 
    return num + 2
}
// that is why it will not execute.