//fetch is a built-in JavaScript function used to make HTTP requests (like getting data from an API).
// It is used becuase network requests take time, and JavaScript doesn’t want to block the rest of the code while waiting. Promises let you handle that delay cleanly.

async function getAllUsers(){
   try {
       const response = await fetch('https://jsonplaceholder.typicode.com/users') /// fetch is a promises and it will take time and that is why we put await here. and can be hold in a variable.
       const data = await response.json();
       console.log(data);
   } catch (error) {
       console.log("E: ", error);
    }
}
getAllUsers()

////////////////////////<<<<<<<<<<<<<<<<<<<<<<++++++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>>>///////////////////////


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))