// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md

// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  
// TODO: ask user for first and last name

let firstName = String(prompt("What's your first name?"));
let lastName = String(prompt("What's your last name?"));

// TODO: call sayHello() and show its result

sayHello(firstName, lastName);

// Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
    // TODO: complete the function code
    return x * x;
  }
  
// Square the given number x
const square2 = x => x * x;

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// Minimum of two numbers
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function
// function min(num1, num2) {
//     if (num1 < num2) {
//         console.log(num1);
//     } else if (num1 > num2) {
//         console.log(num2);
//     } else {
//         console.log("Numbers are the same value");
//     }
// }

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

// Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
function calculate(num1, operation, num2) {
    // let operation = prompt("Please enter what type of operation (+, -, * or /)");

    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else {
        console.log("Not an operation.  Try again.");
    }

    return result;
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// The value of number π (Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.

let userRadius = Number(prompt("Enter radius of circle"));

function circumferenceOfCircle(radius) {
    circumference = 2 * Math.PI * userRadius;
    return circumference;
}

function areaOfCircle(radius) {
    area = Math.PI * (userRadius * userRadius);
    return area;
}

console.log(circumferenceOfCircle(radius));
console.log(areaOfCircle(radius));




















//

