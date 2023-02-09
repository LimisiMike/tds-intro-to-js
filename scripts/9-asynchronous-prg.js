// Introduction to Asynchronous Programming
// ----------------------------------------------------------------------

// 1. Callbacks
// ----------------------------------------------------------------------
// A callback is a function that is passed as an argument to another function
// and is executed after some operation has completed.

// Example 1
// ----------------------------------------------------------------------
function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(nameArg, callback) {
  let name = nameArg;

  callback(name);
}

processUserInput("John", greet);

// Example 2
