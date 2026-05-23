//arrays
const myArr = [0, 1, 2, 3, 4, 5, 6] //beside numbers boolean and name can be in array too and arrays are resizeable too in JavaScript.
const myBooks = ["ABC", "fiction", "novel"]
const myAr2= new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods
myArr.push(7) //push method simple add values in the array.
myArr.push(8)
myArr.pop() // it will simple remove the last value in the array.
myArr.unshift(10) //used to add one or more elements to the beginning of an array.
myArr.shift() //used to remove the first element from an array.
console.log(myArr.includes(10)); //It checks whether an array contains a specific value.
console.log(myArr.indexOf(5));


const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);


// SLICE, SPLICE

console.log("A ", myArr);

const myn_1 = myArr.slice(1, 3)

console.log(myn_1);
console.log("B ", myArr);

const myn_2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn_2);