// for of loop

["", "", ""]
[{}, {}, {}]

const myArr = [0, 1, 2, 3, 4]

for (const val of myArr) {
    console.log(val);
}

const greetings = "Hello"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
    
}


// Maps.  

const map  = new Map()
map.set('US', "United States")
map.set('FR', "France")
map.set('Uk', "united Kingdom")
map.set('CA', "Canada")
map.set('FR', "France") //this will not print. map is known for unique values and the order also matters.

console.log(map);


// how the loops work on the map
for (const [key, value] of map) { 
    console.log(key, ':', value); //// this will print in array format
}

const myObject = {
    sport1: 'football',
    sport2: 'basketball'
    
}

//for (const [key, value] of myObject) {
   // console.log(key, ':', value); 
//} 


//this won't print anything because myObject is not iterable means can’t be looped through using iteration like for of , map(). 