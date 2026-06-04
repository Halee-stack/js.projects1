//map

const myNumbers = [1, 2, 3, 4, 5]
//const newNums = myNumbers.map( (num) => { return num + 2})

//chaining

const newNums = myNumbers
                .map((num) => num * 2 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 6)



console.log(newNums);

