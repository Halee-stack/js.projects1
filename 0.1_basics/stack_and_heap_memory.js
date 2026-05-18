//Stack and heap are two areas of a program’s memory used for different kinds of data storage while your program runs.
//Stack (Primitive)- It is a special part of a program’s memory that is used to store temporary data while functions are running.

let myEmail = "has@gmail.com"

let anotherEmail = myEmail
anotherEmail = "kat@email.com"

console.log(myEmail);
console.log(anotherEmail);

//Heap (Non-Primitive)- It is a large memory area where objects, arrays, and functions are stored dynamically while your program runs and this is where you get reference in original value.

let member_1 = {
    email: "mem@gmail.com",
    pin: 7865
}

let member_2 = member_1

member_2.email = "zee@gmail.com"
console.log(member_1.email);
console.log(member_2.email);
