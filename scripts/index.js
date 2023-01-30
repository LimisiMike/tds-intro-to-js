/*
 * This is the entry point for the application
 */

console.log(
  "%c *Welcome to learning JavaScript with Talanta Digital School!*",
  "color: aqua; font-size: 14px; font-weight: bold;"
);

// let x = 5;
// let y = 10;

// var z = 15;
// const firstName = "Name";

// let first name = "Name";
// var typeof = 5;

// console.log(x + y);
// console.log(firstName);
// console.log(typeof);

/*
 * Let keyword
 */
let myAge = 41;
// Can reassign variable 'myAge'
myAge = 42;
// Cannot redeclare variable 'myAge'
// let myAge = 43;
console.log(myAge);

/*
 * Var keyword
 */
var myName = "John";
// Can reassign variable 'myName'
// myName = "Jane";
// Can redeclare variable 'myName'
var myName = "Jane";

console.log(myName);

/*
 * Const keyword
 */
const city = "Nairobi";
// Cannot reassign variable 'city'
// city = "Mombasa";

// Cannot redeclare variable 'city'
// const city = "Mombasa";

console.log(city);
