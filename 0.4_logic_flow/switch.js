//SWITCH
// We use switch when we need to compare one value against multiple possible cases in a cleaner and more readable way than many if...else if statements.
// switch makes things easier, but only in the right situations.

const  day = 2

switch (day) {
    case 0:
        console.log("Sunday");
        break;
     case 1:
        console.log("Monday");
        break;   
     case 2:
        console.log("Tuesday");
        break;
     case 3:
        console.log("Wednesday");
        break;      
   
    default:
        console.log("default matched")
        break;
}


