const userId = 12345
let userEmail = "halsa@gmail.com"
var userPassword = "78611"
userCity = "Brooklyn"
let userState;
/* it is not recommended to write varibale value without declaring variable. It is not a good practice. */

//userId = 4 //no allowed
userEmail = "kat@yahoo.com"
userPassword = "23456"
userCity = "London"
/* 
It is preferred no to use var due to issue in block scope and functional scope.
*/

console.log(userId);
console.table([userId, userEmail, userPassword, userCity, userState])
