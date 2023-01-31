// 1 Function declaration
// A function to add two numbers using the function keyword
function add(a, b) {
  return a + b;
}

let sum = add(1, 2);

// console.log(sum); // 3
// -----------------------------------------------------------------------------

// 2 Funtion expression
// A funtion to add two numbers using the stored function keyword
let add1 = function (a, b) {
  return a + b;
};

let sum1 = add1(1, 2);

// console.log(sum1); // 3
// -----------------------------------------------------------------------------

// 3 Arrow function
// A function to add two numbers using the arrow function
let add2 = (a, b) => {
  return a + b;
};

let sum2 = add2(1, 2);

// console.log(sum2); // 3
