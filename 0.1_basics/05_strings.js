const name = "John"
const age = 28
console.log(`His name is ${name} and his age is ${age}.`);

const gameName = new String('cricket-123-n4')
console.log(gameName[3]);
console.log(gameName.__proto__) //syntax
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //charAt() to see on which letter this number is.
console.log(gameName.indexOf('k')); //reverse.. to see on which number is the letter.

const newString = gameName.substring(2, 5); //slice.. substring
console.log(newString);

const anotherString = gameName.slice(3, 6);
console.log(anotherString);

const another_String = gameName.slice(-2, 6);
console.log(another_String);

const newStringOne = "   John    "
console.log(newStringOne); //it will give spaces
console.log(newStringOne.trim()); //removes extra spaces

const url = "https://www.google.com/google%20dotcom"
console.log(url.replace('%20', '-')) //if you want to replace something use this syntax
console.log(url.includes('web')) // includes used where you have to check if this word exists in the url.
console.log(gameName.split('-'))
