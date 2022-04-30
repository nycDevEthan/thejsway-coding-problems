// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// Coding time!

// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// TODO: create the character object here

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 50,
    xp: 0,

    describe() {
        console.log(`${this.name} was harmed by an arrow, depleting her health to ${this.health}.  ${this.name} equipped a necklace increasing her strength to ${this.strength}.  ${this.name} learned a new skill, increasing her xp points by ${this.xp}!`);
    }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// Modeling a dog
// Complete the following program to add the dog object definition.

const dog = {
    name: "ScoobyDoobyDoo",
    species: "GreatDane",
    size: "BigAndTall",
    bark() {
        return 'Bark, bark, bark!';
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);

console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius"));

// TODO: create the circle object here

const circle = {
    circumference(radius) {
        return 2 * Math.PI * radius;
    },
    area(radius) {
        return Math.PI * (radius * radius);
    }
}

console.log(`Its circumference is ${circle.circumference(5)}`);

console.log(`Its area is ${circle.area(5)}`);

// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

const account = {
    name: "Alex",
    balance: 0,
    credit(amount) {
        if (Math.sign(amount)) {
            this.balance += amount;
        } else{
            this.balance -= amount;
        }
        return this.balance;
    },
    describe() {
        return `Account information:\n
                Name: ${this.name}\n
                Current balance: ${this.balance}`;
    }
}

account.credit(-5);
console.log(account.describe());