// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter02.md
// Coding time!

// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

let firstName = String(prompt("Enter your first name"));
let lastName = String(prompt("Enter your last name"));

console.log(`Hello there ${firstName} ${lastName}`)

// Final values
// Observe the following program and try to predict the final values of its variables.

let a = 2; //
a -= 1; // 1
a++; // 2
let b = 8; //
b += 2; // 10
const c = a + b * b; // 102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a; // 10
console.log(a, b, c, d, e, f, g);

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.


let rawPrice = Number(prompt("Enter a raw price value"));
let vatRate = 0.206;

console.log(rawPrice += (rawPrice * vatRate));

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

let celciusTemp = Number(prompt("Enter a temperature in Celcius"))

let farhenheitTemp = celciusTemp * 9 / 5 + 32;

console.log(farhenheitTemp);

// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

number2 = 5;
number1 = 3;

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.

// T> This exercise has several valid solutions. You may use more than two variables to solve it.
