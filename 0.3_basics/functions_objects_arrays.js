//shopping cart price add
function calculateGroceryPrice(...num1){ // if there is no rest operator then it will only print first values and will pass all the parameters. so we will use rest operator, denoted by three dots (...).
    return num1
}
console.log(calculateGroceryPrice(50, 100, 150, 200, 250, 300)) 

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
function calculateGroceryPrice(val1, val2, ...num1){ // when added val1, val2 it will not print these values and separately it will print as an array. (...num1 values because of rest operator). 
        return num1
}
console.log(calculateGroceryPrice(50, 100, 150, 200)) 

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

const user = {
    username: "John",
    price: 250
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user) // one way to do like this.



// the other way is to pass the object directly as:
handleObject({
    username: "Kate",
    price: 300
})


//<<<<<<<<<<<<<<<<----------------->>>>>>>>>>>>>>>>//

/// How to make it in ARRAY
const myArr = [32, 40, 65, 78]
//so now we have to create a function which accepts array and returns its second value.
function returnThirdValue(getArr){
    return getArr[2]
}
//console.log(returnThirdValue(myArr));// one way to pass array is either through variable or direct. 
console.log(returnThirdValue([29, 46, 75, 91]));
