//How to make the hardcoded values so it can be changed just how pi value cannot be cnahged at all.

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descripter);

const cake = {
    name: 'chocolate cake',
    price: 100,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(cake, "name"));

Object.defineProperty(cake, 'name', {
    writable: false,
    enumerable: false

})

console.log(Object.getOwnPropertyDescriptor(cake, "name"));