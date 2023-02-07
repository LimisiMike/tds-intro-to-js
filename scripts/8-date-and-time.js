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
