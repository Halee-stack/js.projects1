const cars = ["Toyota", "Honda", "Ford"]
const motorcycles = ["Yamaha", "Kawasaki", "Suzuki"]
//cars.push(motorcycles)
//console.log(cars); //arrays take other arrays. //array is a single element here.
//console.log(cars[3][1]);

//const allVehicles = cars.concat(motorcycles);
//console.log(allVehicles); //so to see everything in one array must comment cars.push and along with that console.log to see how the .concat works.

const all_new_Vehicles = [...cars, ...motorcycles] // best practice to use spread operator.
console.log(all_new_Vehicles);

//other ways to use array but rarely used
const another_arr = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]
const true_another_arr = another_arr.flat(Infinity) //infinity is used to check array's depth.
console.log(true_another_arr);

console.log(Array.isArray("Kate")) // it will check if this array is present and the outcome will be in boolean.
console.log(Array.from("Kate")) //every letter will be in string.
console.log(Array.from({name: "Kate"})) // it will give you empty array []. because it cannot diretly convert into and you have to define before what has to go in array like keys or value so if can not convert it, it will just give you an empty array. 


let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1, score2, score3))
