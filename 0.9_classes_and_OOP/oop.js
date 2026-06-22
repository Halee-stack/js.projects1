// Object literal

const user = {
    username: "Haleema",
    loginCount: 3,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got the details");
        console.log(`Username: ${this.username}`) /// this refers to the object that is currently executing the function.
        console.log(this); /// The value of this is decided at runtime, based on how the function is called, not where it’s written.
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // this wont print at give the outcome {} becuase it is in global.. and there is nothing in the global. 


////////////////////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<+++++++++++++++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//////////////////

// Constructor function 
// A constructor function in JavaScript is a special type of function used to create multiple similar objects.

//const promiseOne = new Promise() 
//// new keyword is used to creates the object and defines how an object should be built
//const data = new Date() 



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){ /// abstraction happening here 
        console.log(`Welcome ${this.username}`)
    }

    return this // define implicitly and will print it too without return this 
}

const userOne = new User("Haleema", 8, true)
const userTwo = new User("Kate", 4, false)
console.log(userOne.constructor);  //encapsulation is happening here. 
//console.log(userTwo);

// 1. Whenever we use new keyword and an empty object gets created {} which is called instance. Like how it worked in .this .. whenver we created .this the new object got created.
// 2. The constructor function is called due to new keyword. It packs all the arguments written here and passed on inside and gives it to you. 
// 3. The this keyword, all the arguments which have written in the keyword, all of them injected inside it.
// 4. we get a function inside it. 
// so this is a basic marking mechanism which is running internally here. 