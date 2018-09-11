
// Square the given number x
for (var x = 0; x < 10; x++) { console.log(x) }
function square1(x) {
       
    x = Math.pow(x,2);
    return x;
    
    // TODO: complete the function code
}

// Square the given number x
const square2 = x => Math.pow(x,2);


// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

for (x+ 0; x<10; x++)
console.log(square1(x))

function min(x,y){
    if (x>y){
        return y
    }else if (x<y){
        return x
    }else if (x =y){
        return x || y;
    }
}