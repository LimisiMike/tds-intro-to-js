// (a) Conditional statements
// -----------------------------------------------------------------------------
// 1 If statements example
let x = 5;

if (x < 4) {
  //   console.log(`${x} is less than 6`);
}

// If statements syntax
// if (condition) {
//   // block of code to be executed if the condition is true
// }
// -----------------------------------------------------------------------------

// 2 If else statements example
let y = 5;
let z = 3;

if (y < z) {
  //   console.log(`${y} is less than ${z}`);
} else {
  //   console.log(`${y} is greater than ${z}`);
}

// If else statements syntax
// if (condition) {
//   // block of code to be executed if the condition is true
// } else {
//   // block of code to be executed if the condition is false

// -----------------------------------------------------------------------------

// 3 If else if statements example
let a = 5;
let b = 5;

if (a < b) {
  //   console.log(`${a} is less than ${b}`);
} else if (a > b) {
  //   console.log(`${a} is greater than ${b}`);
} else {
  //   console.log(`${a} is equal to ${b}`);
}

// If else if statements syntax
// if (condition1) {
//   // block of code to be executed if condition1 is true
// } else if (condition2) {
//   // block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   // block of code to be executed if the condition1 is false and condition2 is false

// -----------------------------------------------------------------------------

// (a )Iteration statements
// -----------------------------------------------------------------------------
// 1 while loop
let i = 0;

while (i < 5) {
  //   console.log(i);
  i++;
}

// while loop syntax
// while (condition) {
//   // code block to be executed
// }
// -----------------------------------------------------------------------------

// 2 do while loop
let j = 0;

do {
  // console.log(j);
  j++;
} while (j < 5);

// do while loop syntax
// do {
//   // code block to be executed
// } while (condition);
// -----------------------------------------------------------------------------

// 3 for loop
let k = 0;

for (k; k < 5; k++) {
  //   console.log(k);
}

// for loop syntax
// for (initialization; condition; increment) {
//   // code block to be executed
// }
// -----------------------------------------------------------------------------

// 4 for in loop
// An object is a collection of properties, and a property is
// an association between a name (or key) and a value.
let person = {
    name: "Michael",
    age: 41,
    city: "Nairobi",
  },
  text = "";

for (let key in person) {
  text += `${person[key]} `;
}

// console.log(text);

// for in loop syntax
// for (variable in object) {
//   // code block to be executed
// }
// -----------------------------------------------------------------------------

// 5 for of loop
// An array is a special type of object. The typeof operator
// in JavaScript returns "object" for arrays.
let names = ["Michael", "John", "Jane"];

for (let name of names) {
  //   console.log(name);
}

// for of loop syntax
// for (variable of iterable) {
//   // code block to be executed
// }
// -----------------------------------------------------------------------------

// 6 for each loop
// The forEach() method calls a function once for each element in an array,
// in order.
let names1 = ["Michael", "John", "Jane"];

names1.forEach((name) => {
  //   console.log(name);
});

// forEach loop syntax
// array.forEach(function(currentValue, index, arr), thisValue)
// -----------------------------------------------------------------------------

// (c) Repetition statements
// -----------------------------------------------------------------------------
// switch statement
let day = 8;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day!");
}

// switch statement syntax
// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
