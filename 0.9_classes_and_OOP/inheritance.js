

// INHERITANCE //


const User = {
    name: "Kate",
    email: "kate@example.com"

}
const Employee = {
    work: true
}

const EmployeeSupport = {
    isAvailable: false
}

const EMSupport = {
    doesWork: 'cashier',
    fullTime: true,
    __proto__: EmployeeSupport
}

// __proto__ is a property that points to an object's prototype.

//It lets you see the object that JavaScript uses for inheritance.

Employee.__proto__ = User 

// this is prototype inheritance like how we create someone else property and how we access it.


//modern syntax structure 

Object.setPrototypeOf(EmployeeSupport, Employee) // this is how we can actually do the inheritance too. same like__proto__ syntactic sugar.


let anotherUser = "Jake        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The true length is: ${this.trim().length}`);
}

anotherUser.trueLength()
"haleema".trueLength()
"school".trueLength()