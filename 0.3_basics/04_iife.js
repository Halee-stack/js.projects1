//Immediately Invoked Function Expression

//An IIFE (Immediately Invoked Function Expression) is used to execute code immediately while creating its own scope. This helps avoid polluting the global namespace, keeps variables private, and prevents naming conflicts.

(function system(){
    //named IIFE (system)
    console.log(`system connected successfully`);
})();
//whenver we have to write two iife make sure to add ; at the end of the iife so it will be easy to execute. 
( (name) => { //arrow function // this is a simple unnamed iife
    console.log(`The system has connected ${name}`); // this console log also expects variable

} )('Kate')


