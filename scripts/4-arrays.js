// (a) Introduction to Arrays
// -----------------------------------------------------------

// Arrays are a way to store multiple values in a single variable.
// Arrays are zero-indexed, meaning the first element is at index 0.
// Arrays are also dynamic, meaning they can grow and shrink in size.
// Arrays are also heterogenous, meaning they can store multiple types.
// Arrays are created using square brackets.
// Arrays are accessed using square brackets and an index.
// Arrays are iterated using a for loop.

// Create an array of 5 numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Index for array numbers   [0,  1,  2,  3,  4,  5,  6,  7]

// Create an array of 5 strings of user names
let names = ["John", "Jane", "Jack", "Jill", "Joe"];

// Create an array of 5 booleans
let booleans = [true, false, true, false, true];

// Create an array of 5 different data types
let mixed = [1, "John", true, 3.14, null];

// Create an array of 5 arrays
let arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

// Create an array of 5 objects
let objects = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 20 },
  { name: "Jill", age: 15 },
  { name: "Joe", age: 10 },
];

// Create an array of 5 functions
let functions = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  },
  function () {
    return 4;
  },
  function () {
    return 5;
  },
];

// Create an array of 5 arrays of 5 numbers
let nested = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
// -----------------------------------------------------------

// (b) Array methods
// -----------------------------------------------------------
// Access the first element of the numbers array
// console.log(numbers[4]);

// Replace the fifth element of the numbers array with 100
// numbers[4] = 100;

// Adding an element to the end of the numbers array
numbers.push(100);

// Adding an element to the beginning of the numbers array
numbers.unshift(0);

// Removing an element from the end of the numbers array
numbers.pop();

// Removing an element from the beginning of the numbers array
numbers.shift();

// console.log(numbers);

// NOTE: Look at some more array methods:
// -----------------------------------------------------------

// (c) Iterating over arrays
// -----------------------------------------------------------
// Iterate over the numbers array and print each element to the console
console.log("Looping using a regular loop!");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Looping using a for...of loop
console.log("Looping using a for... of loop!");
for (let number of numbers) {
  console.log(number);
}

// Looping using a forEach loop
console.log("Looping using a forEach loop!");
numbers.forEach(function (number) {
  console.log(number);
});
