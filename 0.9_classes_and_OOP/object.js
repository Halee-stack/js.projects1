function multipleBy2(num){
    return num*2
}
multipleBy2.power = 3

console.log(multipleBy2(2));
console.log(multipleBy2.power); // in function power can be used
console.log(multipleBy2.prototype); // prototype is an empty parantheses in JavaScript everything is object. where function is function and function is also object too. 
// Because at the end of the day, everything meets object and that what is prototype inheritance. as javascript does not give up and keeps chaining until object is null. 

function createUser(username, price){
    this.username = username // with .this current context get setted
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(`The total for your order is $${this.price}`);
}

const burger = new createUser("burger", 20) // new keyword is the game changer heer ewhich will make the code easy to execute.
const fries = createUser("fries", 10)

burger.printMe()