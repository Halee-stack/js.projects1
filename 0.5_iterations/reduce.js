// reduce

const myNum = [1, 2, 3, 4, 5]
//const myTotal = myNum.reduce(function (acc, currval) {
    //console.log(`acc: ${acc} and currval: ${currval}`);
    //return acc + currval 
//}, 0)


// reduce in arrow function

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)


console.log(myTotal);


const fruitBasket = [
    {
        itemName: "apple",
        price: 1.00
    },
     {
        itemName: "pear",
        price: 2.00
    },
     {
        itemName: "orange",
        price: 3.00
    },
]
const priceToPay = fruitBasket.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);