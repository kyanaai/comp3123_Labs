//Ex1
const greeter = (myArray, counter) => {
    const greetText = 'Hello';

    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Ex2
const capitalize = (str) => {
    const [first, ...rest] = str;
    return `${first.toUpperCase()}${rest.join('')}`;
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Ex3
//Use capitalize from Ex2
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

//Ex4
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

//Ex5
const array = [1, 2, 3, 4];

const calculateSum =
    array.reduce((acc, curr) => acc + curr, 0);
const calculateProduct =
    array.reduce((acc, curr) => acc * curr, 1);

console.log(calculateSum);
console.log(calculateProduct);

//Ex6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);          // call Car constructor
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
