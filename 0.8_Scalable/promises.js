const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){ /// .then() is directly connected to resolve(). and when its resolved then it will move to the next.
    console.log("Promises consumed") // this outcome won't appear if it is not connected to resolve(). Because when resolve(value) is called, the function that is passed to .then() gets executed with that value.
})


///////////////////<<<<<<<<<<<<<<<<<<<<*************************>>>>>>>>>>>>>>>>>>>>>>/////////////////////

//OTHER WAY TO DO PROMISE.
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async is called");
        resolve() /// very important to connected with .then . Without that it won't appear on the screen.
    }, 1000) 
}).then(function(){
    console.log("Async task has been resolved");

})


///////////////////<<<<<<<<<<<<<<<<<<<<*************************>>>>>>>>>>>>>>>>>>>>>>/////////////////////

/// Basics of data consumption and values
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Haleema", email: "haleema@example.com"})

    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);

})

///////////////////<<<<<<<<<<<<<<<<<<<<*************************>>>>>>>>>>>>>>>>>>>>>>/////////////////////

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Haleema", password: "012abc"})
        } else {
            reject('ERROR: Looks like something went wrong')
        }
    }, 1000)

})

//const username =

promiseFour

.then((user) => { // in this situation when we have to extract the data from there, it it is there then we cannot reduce it that much. so cannot keep that inthe variable and have to remove it
    console.log(user);
    return user.username
//console.log(username); this will not work and for that we can do chaining method for .then()
})
.then((username) => {
    console.log(username);
// we add .catch() after .then() to handle errors that happen anywhere in the Promise chain.
})
.catch(function(err){
    console.log("err");
})
.finally(() => console.log("A Promise settles as either resolved or rejected.")) // this is must to appear 

///////////////////<<<<<<<<<<<<<<<<<<<<*************************>>>>>>>>>>>>>>>>>>>>>>/////////////////////


// other way to do is by async/ await method.. both are correct. 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // this can also be changed to false to see if the function gives you error or not. 
        if (!error) {
            resolve({username: "Jake", password: "123ABC"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)

});

async function consumePromiseFive(){
    try { /// try and catch and that is how we beautifully catch the errors.
        const response = await promiseFive
    console.log(response); 
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

