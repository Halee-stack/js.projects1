class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`The username is ${this.username}`)
    }
    static createId(){
        return `abc`
    }
}
const kate = new User("kate")
//console.log("kate".createId())

class Instructor extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const student = new Instructor("student", "student@example.com")
//student.logMe(); /// this will print

console.log(student.createId()); // so basically this createId 
// the moment we do it static, its not letting us access any of the children or if someone is trying to inherit a class, then it is not giving access to that also, and syntactical sugar is already been seen here. 