// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md
// Coding time!

// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let day = String(prompt("Enter a day of the week"));

// if (day.toLowerCase() === 'sunday') {
//     console.log('Tomorrow is Monday')
// } else if (day.toLowerCase() === 'monday') {
//     console.log('Tomorrow is Tuesday')
// } else if (day.toLowerCase() === 'tuesday') {
//     console.log('Tomorrow is Wednesday')
// } else if (day.toLowerCase() === 'wednesday') {
//     console.log('Tomorrow is Thursday')
// } else if (day.toLowerCase() === 'thursday') {
//     console.log('Tomorrow is Friday')
// } else if (day.toLowerCase() === 'friday') {
//     console.log('Tomorrow is Saturday')
// } else if (day.toLowerCase() === 'saturday') {
//     console.log('Tomorrow is Sunday')
// } else {
//     console.log('Not a day of the week')
// }

switch (day.toLocaleLowerCase()) {
    case "sunday":
        console.log('Tomorrow is Monday');
        break;
    case "monday":
        console.log('Tomorrow is Tuesday')
        break;
    case "tuesday":
        console.log('Tomorrow is Wednesday')
        break;
    case "wednesday":
        console.log('Tomorrow is Thursday')
        break;
    case "thursday":
        console.log('Tomorrow is Friday')
        break;
    case "friday":
        console.log('Tomorrow is Saturday')
        break;
    case "saturday":
        console.log('Tomorrow is Sunday')
        break;
    default:
        console.log('Not a day of the week')
}

// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases

let numOne = Number(prompt("Enter the first number"));
let numTwo = Number(prompt("Enter the second number"));

// if (numOne > numTwo) {
//     console.log(`${numOne} is greater than ${numTwo}`);
// } else if (numTwo > numOne) {
//     console.log(`${numTwo} is greater than ${numOne}`);
// } else {
//     console.log(`${numOne} and ${numTwo} are the same value`);
// };

switch (true) {
    case numOne > numTwo:
        console.log(`${numOne} is greater than ${numTwo}`);
        break;
    case numTwo > numOne:
        console.log(`${numTwo} is greater than ${numOne}`);
        break;
    default:
        console.log(`${numOne} and ${numTwo} are the same value`);
}

// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

let monthNum = Number(prompt("Enter the month number 1 - 12"));

// if (monthNum === 1) {
//     console.log("January has 31 days");
// } else if (monthNum === 2) {
//     console.log("February has 28 days, 29 on leap years");
// } else if (monthNum === 3) {
//     console.log("March has 31 days");
// } else if (monthNum === 4) {
//     console.log("April has 30 days");
// } else if (monthNum === 5) {
//     console.log("May has 31 days");
// } else if (monthNum === 6) {
//     console.log("June has 30 days");
// } else if (monthNum === 7) {
//     console.log("July has 31 days");
// } else if (monthNum === 8) {
//     console.log("August has 31 days");
// } else if (monthNum === 9) {
//     console.log("September has 30 days");
// } else if (monthNum === 10) {
//     console.log("October has 31 days");
// } else if (monthNum === 11) {
//     console.log("November has 30 days");
// } else if (monthNum === 12) {
//     console.log("December has 31 days");
// } else {
//     console.log(`Please enter a number 1-12.  ${monthNum} is not a month.`);
// }

switch (true) {
    case (monthNum === 1):
        console.log("January has 31 days");
        break;
    case (monthNum === 2):
        console.log("February has 28 days, 29 on leap years");
        break;
    case (monthNum === 3):
        console.log("March has 31 days");
        break;
    case (monthNum === 4):
        console.log("April has 30 days")
        break;
    case (monthNum === 5):
        console.log("May has 31 days");
        break;
    case (monthNum === 6):
        console.log("June has 30 days");
        break;
    case (monthNum === 7):
        console.log("July has 31 days");
        break;
    case (monthNum === 8):
        console.log("August has 31 days");
        break;
    case (monthNum === 9):
        console.log("September has 30 days");
        break;
    case (monthNum === 10):
        console.log("October has 31 days");
        break;
    case (monthNum === 11):
        console.log("November has 30 days");
        break;
    case (monthNum === 12):
        console.log("December has 31 days");
        break;
    default:
        console.log(`Please enter a number 1-12.  ${monthNum} is not a month.`);
}


// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

//prompt user to enter times

let userHours = Number(prompt("Enter hour"));
let userMinutes = Number(prompt("Enter minutes"));
let userSeconds = Number(prompt("Enter seconds"));
let userTime;

// if (userHours > 23 || userMinutes > 59 || userSeconds > 59) {
//     console.log("Please only enter valid 24-hour military times");
// } else if (userHours === 23 && userMinutes === 59 && userSeconds === 59) {
//     userHours = 0;
//     userMinutes = 0;
//     userSeconds = 0;
//     userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
//     console.log(userTime);
// } else if (userMinutes === 59 && userSeconds === 59) {
    // userHours++;
    // userMinutes = 0;
    // userSeconds = 0;
    // userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
    // console.log(userTime);
// } else if (userSeconds === 59) {
    // userMinutes++;
    // userSeconds = 0;
    // userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
    // console.log(userTime);
// } else {
    // userSeconds++;
    // userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
    // console.log(userTime);
// }

switch (true) {
    case (userHours > 23 || userMinutes > 59 || userSeconds > 59):
        console.log("Please only enter valid 24-hour military times");
        break;
    case (userHours === 23 && userMinutes === 59 && userSeconds === 59):
        userHours = 0;
        userMinutes = 0;
        userSeconds = 0;
        userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
        console.log(userTime);
        break;
    case (userMinutes === 59 && userSeconds === 59):
        userHours++;
        userMinutes = 0;
        userSeconds = 0;
        userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
        console.log(userTime);
        break;
    case (userSeconds === 59):
        userMinutes++;
        userSeconds = 0;
        userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
        console.log(userTime);
        break;
    default:
        userSeconds++;
        userTime = `${userHours}h ${userMinutes}m ${userSeconds}s`;
        console.log(userTime);
}