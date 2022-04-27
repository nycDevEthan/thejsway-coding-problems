// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md
// Coding time!
// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

let musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");
console.log(musketeers);

musketeers.forEach(musketeerName => {
    console.log(musketeerName);
})

musketeers.splice(2, 1);
console.log(musketeers);

for (const musketeerName of musketeers) {
    console.log(musketeerName);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

function sumOf(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}

sumOf(values);

console.log(sumOf);

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];

function maxValueOfArray (testArray) {
    let max = testArray[0];
    for (let i = 0; i < values.length; i++) {
        if (testArray[i] > max) {
            max = testArray[i];
        }
    }
    return max;
}

maxValueOfArray(values);

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

function askUserForWordUntilStopLogWords () {
    let arr = [];
    for (let userWord; userWord !== 'stop'; arr.push(userWord)) {
        userWord = String(prompt("Enter a word"));
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'stop') {
            arr.splice(i,1);
        }
    }
    console.log(arr);
}

askUserForWordUntilStopLogWords();



