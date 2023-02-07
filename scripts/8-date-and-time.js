// (a) Date and time in JavaScript
// ------------------------------------------------------------------------------

// What is an object?
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// A property's value can be a function, in which case the property is known as a method.
// In addition to objects that are predefined in the browser, you can define your own objects.

// Different ways to create an object

// 1. Object literal
const person = {
  name: "John",
  age: 30,
};

// 2. Object constructor
const person1 = new Object({
  name: "Jane",
  age: 21,
});

// 3. Object.create()
const person3 = Object.create(null);

// 4. Class
class Person {
  // this keyword is used to refer to the current instance of the class
  // this.name is a property of the class
  // nameArg is a parameter of the constructor
  constructor(nameArg, ageArg) {
    this.name = nameArg;
    this.age = ageArg;
  }
}

const person4 = new Person("John", 30);
// ------------------------------------------------------------------------------

// Built-in objects - comes with JavaScript language by default

// 1. Math object
// ------------------------------------------------------------------------------

console.log(
  "================================== Math Methods =================================="
);

// (i) Math.abs()
// Returns the absolute value of a number
console.log("Math.abs(-5) = ", Math.abs(-5)); // 5

// (ii) Math.ceil() - ceil for ceiling
// Returns the smallest integer greater than or equal to a number
console.log("Math.ceil(5.2) = ", Math.ceil(5.2)); // 6

// (iii) Math.floor() - floor for floor
// Returns the largest integer less than or equal to a number
console.log("Math.floor(5.2) = ", Math.floor(5.2)); // 5

// (iv) Math.round() - round for rounding off
// Returns the value of a number rounded to the nearest integer
console.log("Math.round(7.1) = ", Math.round(7.1)); // 7
console.log("Math.round(7.5) = ", Math.round(7.5)); // 8

// (v) Math.max() - max for maximum
// Returns the largest of zero or more numbers
console.log(
  "Math.max(1.35, 2, 33, 4, 5, 41) = ",
  Math.max(1.35, 2, 33, 4, 5, 41)
); // 41

// (vi) Math.min() - min for minimum
// Returns the smallest of zero or more numbers
console.log(
  "Math.min(1.35, 2, 33, 4, 5, 41) = ",
  Math.min(1.35, 2, 33, 4, 5, 41)
); // 1.35

// (vii) Math.pow() -pow for power
// Returns the base to the exponent power
console.log("Math.pow(3, 3) = ", Math.pow(3, 3)); // 27 (3 power 3)

// (viii) Math.sqrt() -sqrt for square root
// Returns the square root of a number
console.log("Math.sqrt(9) = ", Math.sqrt(9)); // 3

// (ix) Math.random() - random for random number
// Returns a random number between 0 (inclusive), and 1 (exclusive)
console.log("Math.random() = ", Math.random()); // 0.123456789

// (x) Math.PI - PI for pi
// Returns the value of PI
console.log("Math.PI = ", Math.PI); // 3.141592653589793
console.log("Math.PI.toFixed(3) = ", Math.PI.toFixed(3)); // 3.14

// (xi) Math.E - E for Euler's number
// Returns the value of Euler's number
console.log("Math.E = ", Math.E); // 2.718281828459045
console.log("Math.E.toFixed(3) = ", Math.E.toFixed(3)); // 2.718

// ------------------------------------------------------------------------------

// 2. Date object
// ------------------------------------------------------------------------------

console.log(" ");
console.log(
  "================================== Date Methods =================================="
);

// (i) Date.now()
// Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log("Date.now() = ", Date.now()); // 1620000000000

// (ii) Date.getFullYear()
//  Get the year as a four digit number (yyyy)
console.log("Date.getFullYear() = ", new Date().getFullYear()); // 2021

// (iii) Date.getMonth()
// Get the month as a number (0-11)
console.log("Date.getMonth() = ", new Date().getMonth()); // 1

// (iv) Date.getDate()
// Get the day as a number (1-31)
console.log("Date.getDate() = ", new Date().getDate()); // 7

// (v) Date.getDay()
// Get the weekday as a number (0-6)
console.log("Date.getDay() = ", new Date().getDay()); // 2

// (vi) Date.getHours()
// Get the hour (0-23)
console.log("Date.getHours() = ", new Date().getHours()); // 12

// (vii) Date.getMinutes()
// Get the minute (0-59)
console.log("Date.getMinutes() = ", new Date().getMinutes()); // 30
