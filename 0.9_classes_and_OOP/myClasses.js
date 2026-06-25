// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const kalte = new User("kalte", "kalte@gmail.com", "1234")
console.log(kalte.encryptPassword());
console.log(kalte.changeUsername());

// UNDER THE HOOD 
function Uuser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

Uuser.prototype.encryptPassword = function(){
    return `${this.password}bac`
}

Uuser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const jjack = new Uuser("jjack", "jjack@gmail.com", "231")
console.log(jjack.encryptPassword());
console.log(jjack.changeUsername());