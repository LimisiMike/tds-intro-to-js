// Introduction to Asynchronous Programming
// ----------------------------------------------------------------------

// 1. Callbacks
// ----------------------------------------------------------------------
// A callback is a function that is passed as an argument to another function
// and is executed after some operation has completed.

// Example 1
// ----------------------------------------------------
function greet(name) {
  console.log("Hello " + name);
}

function processUserInput(nameArg, callback) {
  let name = nameArg;

  callback(name);
}

// processUserInput("John", greet);

// Example 2
// ----------------------------------------------------
function imDone() {
  console.log("I'm done!");
}

function doSomething(callback) {
  // setTimeout is a built-in function that takes a callback function as an
  //   argument and executes it after a specified amount of time
  setTimeout(function () {
    console.log("I'm doing something!");

    // Call the callback function
    callback();
  }, 3000);
}

// doSomething(imDone);
// ----------------------------------------------------------------------

// 2. Promises
// ----------------------------------------------------------------------
// A promise is an object that may produce a single value some time in the
// future: either a resolved value, or a reason that it’s not resolved (e.g.,
// a network error occurred). A promise may be in one of 3 possible states:
// fulfilled, rejected, or pending. Promise users can attach callbacks to handle
// the fulfilled value or the reason for rejection.

// Example 1
// ----------------------------------------------------
// Create a promise
let promise = new Promise(function (resolve, reject) {
  // Do an async task async task and then...

  if (1 > 2) {
    // If it's successful
    resolve();
  } else {
    // If it's failed
    reject();
  }
});

// Consume the promise
promise
  .then(() => console.log("Success!"))
  .catch(() => console.log("Failure!"));
