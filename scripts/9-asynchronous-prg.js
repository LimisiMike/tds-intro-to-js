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
// ========================== Example Promise1 ================================
// let promise = new Promise(function (resolve, reject) {
// Do an async task async task and then...

//   if (1 > 2) {
// If it's successful
// resolve();
//   } else {
// If it's failed
//     reject();
//   }
// });

// Consume the promise
// promise
//   .then(() => console.log("Success!"))
//   .catch(() => console.log("Failure!"));

// Example 2
// ----------------------------------------------------
// Create a promise
// function doSomethingAsync() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
// Status is a boolean variable to represent the status of the async task
// We are assuming that the async task is cooking
// true = cooking is done, false = cooking is not done
//       let status = true;

//       if (status) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 1000);
//   });
// }

// Consume the promise
// doSomethingAsync()
//   .then(() => console.log("I'm done cooking!"))
//   .catch(() => console.log("I'm not done cooking!"));
// ----------------------------------------------------------------------

// 3. Async/Await
// ----------------------------------------------------------------------
// Async functions are a new feature in JavaScript that allow you to write
// asynchronous code in a synchronous manner. Async functions are a new way to
// write promises based code. They are a combination of promises and generators
// (which we will learn later).

// Example 1
// ----------------------------------------------------
// Create a async/await function
async function doSomethingAsync() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Status is a boolean variable to represent the status of the async task
      // We are assuming that the async task is cooking
      // true = cooking is done, false = cooking is not done
      let status = false;

      if (status) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

// Consume the async/await function
doSomethingAsync()
  .then(() => console.log("I'm done cooking!"))
  .catch(() => console.log("I'm not done cooking!"));
// ----------------------------------------------------------------------
