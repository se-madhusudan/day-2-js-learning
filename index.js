let x = 5, y = 2.5;
console.log("x + y = ", x+y);
console.log("x - y = ", x-y);
console.log("x * y = ", x*y);
console.log("x / y = ", x/y);
console.log("x % y = ", x%y);

let num = parseInt(prompt("Enter a number: "));
if (num > 0) {
    console.log("Positive integer:", num);
} else if (num < 0 ){
    console.log("Negative integer:", num);
} else if (num === 0) {
    console.log("Neither positive nor negative integer:", num);
} else {
    console.log("Kindly enter a valid integer.");
}

console.log('::::::::::::::::Using for loop::::::::::::::::::::::')
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(":::::::::::::::Using while loop:::::::::::::::::::::")
let i = 10;
while(i >= 1) {
    console.log(i);
    i--;
}
console.log("End"); 