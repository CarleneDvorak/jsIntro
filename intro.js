const celsius = 20;
const fahrenheit = celsius * 9/5 + 32;
console.log(" your conversion of 20 degree celsius is "
 + fahrenheit + " Farenheit");
//Assignment complete

//Times
const four = 4; 
//var mult = (1, 2, 3,4, 5, 6, 7, 8, 9, 10);
//for (var i = 1; i < mult.length, i++;) 
//console.log(`${four} x ${multiplesOf} = ${four * multiplesOf}`);

var multiplesOf  = 1
while (multiplesOf  <= 10) console.log(" 4 x "  + four  * multiplesOf++);
;

//FizzBuss
console.log("Print all numbers between one and one hundred");
var fizz= 1;
var buzz =1;
while (fizz,buzz <= 100)  { if ( fizz % 3 === 0){ console.log("Fizz ");} 
else {( buzz % 5 === 0); console.log("buzz");fizz,buzz += 1;
}}