console.log("4" > 2); // true because JavaScript converted "2" into this 2. "4" is string and 2 is a number.
console.log("4" > "1");//true because they have same dataType
console.log("06" > 3);

//null and undefined comparisons in JavaScript can be confusing because JavaScript has type coercion rules in loose equality (==).
console.log(null > 0); //null means empty value. so it wil be false
console.log(null == 0); // == means conversion
console.log(null >= 0); // JavaScript converted null into zero. so thats why its true.. 
// the operations should not be handled like this. not recomended. 

//other ways to do
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

//===//
//=== is the strict equality operator in JavaScript. It checks: Value and Type. And both must match.
console.log("5" === 5); //false because both have different datatypes.