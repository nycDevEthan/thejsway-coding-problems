// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// Coding time!


// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.

// while loop

let numTurns = prompt("How many turns will you take?", "0");

while (numTurns <= 10) {
    console.log(numTurns);
    numTurns++;
}

// for loop

let numTurns = prompt("How many turns will you take?", "0");

console.log(numTurns);

for (let i = numTurns; i <= 10; i++) {
    console.log(i);
}

// Parity

// while loop

let userNum = prompt("Enter a number to see if it\'s even or odd", "0");

let x = 1;

while (x <= 10) {
    if (x % 2 === 0) {
        console.log(`${x} is an even number`);
    } else if (x % 2 === 1) {
        console.log(`${x} is an odd number`);
    };
    x++;
};


// for loop

let userNum = prompt('Enter a number to see if it\'s even or odd');

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    };
};

// Input validation

//while loop

let num = Number(prompt("Enter a number", 0));

while (num < 50 || num > 100) {
    num = Number(prompt("Enter a number", 0));
    console.log(num);
};


// for loop

for (i = 0; i < 5; i++) {

    let num = Number(prompt("Enter a number", 0));

    if (num > 50 && num < 100) {
        console.log("You did it")
        break;
    } else {
        console.log("Try again");
    };
};

// Multiplication table

// while loop

let num = Number(prompt("Enter a number to see multiplication table", 0));

let i = 0;

while (i <= 12) {
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
}

// for loop

let num = Number(prompt("Enter a number to see multiplication table", 0));

for (let i = 0; i <= 12; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}

// FIZZ BUZZ

// while

let i = 1;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log(`${i} Buzz`);
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i)
    };
    i++;
};

// for loop

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log(`${i} Buzz`);
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FizzBuzz`);
    } else {
        console.log(i);
    }
}