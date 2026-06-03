// Truthy Value
// A truthy value is any value that is considered true when used in a Boolean context, even though it is not literally the boolean true.
//it can alos work with [] empty array and will show true value. However, if there is empty string it will not show any value. 

const userEmail = "fgh@gmail.com"
if (userEmail) {
    console.log("access allowed");
} else {
    console.log("access denied");
}


//truthy values
// "0" (because this is in string), 'false', " ", [], {}, function(){} .. this is empty function. 