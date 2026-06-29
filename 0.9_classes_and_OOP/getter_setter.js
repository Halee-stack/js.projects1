class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){ // setter are never return
        this._email = value
    }
    get password(){
        return `${this._password}kate`
    }
    /// with this _ the value will be printed many times as getter setter in the console. so to avoid that we have a keyword which avaoids all these 
    set password(value){
        this._password = value 
    }
}
const kate = new User("kate@example.com", "a1b2c3")
console.log(kate.password);
console.log(kate.email);