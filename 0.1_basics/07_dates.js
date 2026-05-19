// Date //

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //date is an object in JavaScript

// DECLARE SPECIFIC DATE//

let date_Created = new Date(2025, 5, 15)
console.log(date_Created.toDateString());

//other way to declare date.
let dateCreated = new Date(2024, 8, 20, 6, 4)
console.log(dateCreated.toLocaleDateString());

let createdDate = new Date("2023-02-18") //when doing like yyyy-mm-dd, it wll appear from one not from zero.
console.log(createdDate.toLocaleDateString());

//TimeStamp//
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(createdDate.getTime());

console.log((Date.now()/1000)) // the problem is when we divide with 100 see decimal so to avoid we will do math.floor method.
console.log(Math.floor(Date.now()/1000))//comparison always be one in milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //starts counting from zero
console.log(newDate.getDay()); //starts from one

newDate.toLocaleString('default', {
    weekday: "long",
})

