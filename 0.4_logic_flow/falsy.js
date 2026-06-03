// Falsy Value
// A falsy value is a value that is treated as false when evaluated in a Boolean context (like inside an if statement). Even though the value is not always literally false, JavaScript treats it as false.


const userEmail = ""
if (userEmail) {
    console.log("access allowed");
} else {
    console.log("access denied");
}

//false values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN
// they are all the false value and other values except false mentioned values are true values. 
