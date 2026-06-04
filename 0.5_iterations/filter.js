//how to use filter

const nums = [0, 1, 2, 3, 4, 5, 6]

//const numbers = nums.filter( (num) => { //when you open the scope {} must write return keyword
   //return num > 2
//})


//console.log(numbers);

//////////////////<<<<<<<<<<<<<<<<<++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>>///////////////////////

// how to use that in forEach

const newNums = []
nums.forEach( (num) => {
    if (num > 2) {
        newNums.push(num)
    }
})

console.log(newNums);