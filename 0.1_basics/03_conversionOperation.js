/*
let marks = 25
//console.log(typeof marks);
//console.log(typeof(marks));

let valueInNumber = Number(marks)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


Below are the other Data Types:


//STRING//
let rating = "25"
//console.log(typeof rating);
//console.log(typeof(rating));

let valueInNumber = Number(rating)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


let points = "Haleema"
//console.log(typeof points);
//console.log(typeof(points));

let valueInNumber = Number(points)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

UNDEFINED
let score = null
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//NaN//
let rank = "2hut3" // when you print this in the terminal this will give you NaN value due to this is Not a Number.
//console.log(typeof rank);
//console.log(typeof(rank));

let valueInNumber = Number(rank)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//NULL//
let grade = null
//console.log(typeof grade);
//console.log(typeof(grade));

let valueInNumber = Number(grade)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//BOOLEAN//
let score = true
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
//if the boolean has 1 or any value in the string it will show TRUE otheriwise false when there is empty string.

//is it number or string
let someNumber = 25
let stringNumber = String(someNumber)
//console.log(stringNumber); // when print this will show the number 
//console.log(typeof stringNumber); // it will show a string in the terminal.

As seen above
"25" => 25 string
"2hut3" => NaN
boolean => true or false; 
true =>1 and false => 0
"" => false
"haleema" => true
*/

//OPERATIONS//
let value = 10
let negValue = -value
console.log(negValue);


//STRING//
let str1 = "Hey"
let str2 = " Beautiful!"
let str3 = str1 + str2
console.log(str3);

//Number conversion basic rules//
console.log("1" + 2); // "1" is a string, 2 is a number, Since one operand is a string, JavaScript converts 2 → "2" so the outcome will be 12. 
console.log(1 + "2"); // 1 becomes "1" and "2" is a string and it will appear as 2. so the outcome will be 12.
console.log("1" + 2 + 2); // JavaScript evaluates from left to right. String concatenation happens "12" + "2" . And the outcome will be 122.
console.log(1 + 2 + "2"); // JavaScript evaluates the expression from left to right. Both are numbers, so JavaScript does numeric additionwhich will be 3. Then,the expression becomes 3 + "2". One value is a string ("2"), so JavaScript switches to string concatenation. 3 becomes "3". So the output will be 32.
console.log( (4 + 3) * 5 % 2); //JavaScript follows operator precedence rules.

//Boolean conversion
console.log(+false);// when + added in false value, it will show 0 in the terminal.
console.log(+true); // when + is added it will show 1 in the terminal.

//INCREMENT//
let roleCounter = 30
roleCounter++; //Postfix → “use first, change later”
console.log(roleCounter);

let matchCounter = 25
++matchCounter; //Prefix → “change first, use later”
console.log(matchCounter);

//DECREMENT//

let numberCounter = 30
numberCounter--; //Postfix → “use first, change later”
console.log(numberCounter);

let scoreCounter = 25
--scoreCounter; //Prefix → “change first, use later”
console.log(scoreCounter);

