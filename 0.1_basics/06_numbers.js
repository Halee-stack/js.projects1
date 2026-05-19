const score = 100
console.log(score);

const funds = new Number(50)
console.log(funds);


console.log(funds.toString());
console.log(typeof funds); //to check the type of 
console.log(funds.toString().length);
console.log(funds.toFixed(2)); // precision value

const otherNumber = 426.634
console.log(otherNumber.toPrecision(3)); // the precision value has to be used very carefully. as it can also give round off and exponenetial values too.

const hundreds = 1000000
console.log(hundreds.toLocaleString());