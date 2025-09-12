const numbers = [1, 2, 3, 4, 5];

const multiplyByTwo = (arr) => {
  for (const num of arr) {
    console.log(`Number: ${num}, Multiplied: ${num * 2}`);
  }
};
multiplyByTwo(numbers);


// Exercise 2
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join("");
console.log(capitalize("hello"));
console.log(capitalize("world"));

// Exercise 3
const colors = ["red", "green", "blue", "yellow"];
const capitalizedColors = colors.map(color => capitalize(color));
console.log(capitalizedColors);


// Exercise 4
const numsForFilter = [5, 12, 25, 30, 7, 18, 40];
const filtered = numsForFilter.filter(num => num >= 20);
console.log(filtered);


// Exercise 5
const numsForReduce = [1, 2, 3, 4];
const sum = numsForReduce.reduce((acc, val) => acc + val, 0);
const product = numsForReduce.reduce((acc, val) => acc * val, 1);
console.log(`Sum: ${sum}, Product: ${product}`);


// Exercise 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
}

const mySedan = new Sedan("Toyota Camry", 2022, 25000);
console.log(mySedan);
