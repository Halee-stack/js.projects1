// GLOBAL AND LOCAL SCOPES
//var c = 79
let a = 85
if (true) { // curly braces create a block of code. They matter because variables declared with let or const only exist inside those braces.
    let a = 34
    const b = 56
    console.log("INNER: ", a);

}


console.log(a);
//console.log(b);
//console.log();