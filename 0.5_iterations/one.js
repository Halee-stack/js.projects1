// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 8) {
       console.log("8 is a perfect number ")
    }
}


for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`)
    for (let a = 0; a <= 10; a++) {
        console.log(`Inner loop value: ${a} and inner loop ${i}`)
        console.log(i + '*' + a + ' = ' + i*a );
    }
}


let myArray = ["spiderman", "thor", "hulk", "iron man"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


//BREAK (stop the loop completely)

for (let index = 20; index <=30; index++) {
    if (index == 25) {
        console.log(`Detected 25`);
        break
    }
    console.log(`Value of i is ${index}`);
    
}


//CONTINUE // (skip one iteration)
for (let index = 20; index <=30; index++) {
    if (index == 25) {
        console.log(`Detected 25`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}