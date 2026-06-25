function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username) // to hold the reference we will use .call 
    this.email = email
    this.password = password
}

const student = new createUser("student", "student@example.com", "ABC123")
console.log(student);