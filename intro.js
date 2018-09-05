const celsius = 20;
const fahrenheit = celsius * 9/5 + 32;
console.log(" your conversion of 20 degree celsius is "
 + fahrenheit + " Farenheit");


//Times
const four = 4; 
var multiplesOf  = 1
while (multiplesOf  <= 10) console.log(" 4 x "  + multiplesOf + " = " + (four  * multiplesOf++))
;

//FizzBuss

// for loop to iterate numbers 1 - 100
for (i = 1; i <= 100; i++) {

 // (if statement) is divisible by 3 and 5 = FizzBuzz
    if (i% 3 === 0 && i % 5=== 0) {
        console.log("FizzBuzz");
    }

//else  if= the number is divisible by 3 = Fizz
    else if (i % 3=== 0) {
        console.log("Fizz");
    }

 // if the number is divisible by 5 = Buzz
    else if (i % 5=== 0) {
        console.log("Buzz");
    }
 // otherwise, list the number alone
    else {
        console.log(i);
    }
}
