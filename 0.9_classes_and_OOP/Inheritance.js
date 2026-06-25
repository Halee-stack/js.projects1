class User {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
// no call is being used here. 
class Instructor extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addSubject(){
        console.log(`A new subject has been added by ${this.username}`);
    }

}
const book = new Instructor("book", "book@example.com", "a1b2c3") 
//new keyword is very important to execute the code here. 

book.addSubject()
const scienceSubject = new User("scienceSubject")

scienceSubject.logMe()
console.log(book instanceof User); //instanceof means an object that was created from a constructor function or a class. Provides the instanceof operator to check this this true or not.
