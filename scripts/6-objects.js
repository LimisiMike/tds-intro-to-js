// (a) Introduction to objects
// -----------------------------------------------------------------

// Objects are a way to store data in a structured way
// Objects are defined using curly braces
// Each property is defined as a key-value pair
// The key is a string, and the value can be any type
// The key-value pairs are separated by commas
// The last key-value pair does not have a comma after it

let person = {
  name: "Jane Doe",
  age: 25,
  hobbies: ["reading", "cooking", "travelling"],
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};
// -----------------------------------------------------------------

// (b) Accessing object properties
// -----------------------------------------------------------------

// Accessing object properties can be done in two ways:
// 1. Using dot notation
// 2. Using bracket notation

// 1. Using dot notation
// The dot notation is used when the property name is a valid JavaScript identifier
// A valid JavaScript identifier is a name that follows certain rules:
// 1. It must start with a letter, underscore (_), or dollar sign ($)
// 2. Subsequent characters can also be digits (0-9)
// 3. JavaScript is case-sensitive
// 4. Reserved words (like JavaScript keywords) cannot be used as identifiers

// Accessing the name property
console.log(person.name);

// Accessing using bracket notation
// The bracket notation is used when the property name is not a valid JavaScript identifier
// The property name is enclosed in quotes
// The quotes can be single or double quotes

// Accessing the age property
// console.log(person["age"]);
// -----------------------------------------------------------------

// (c) Adding new properties to an object
// -----------------------------------------------------------------

// New properties can be added to an object using dot notation or bracket notation
person.email = "email@gmail.com";
// console.log(person);

person["phone"] = "123-456-7890";
// console.log(person);
// -----------------------------------------------------------------

// (d) Object methods
// -----------------------------------------------------------------

// Methods are functions that are stored as object properties
// Methods are defined as key-value pairs, where the value is a function definition

// Defining a method
// person.greet = function () {
//   console.log("Hello there!");
// };

// Calling a method
// person.greet();

// Defining a method that takes in a parameter
person.greet = function (name) {
  console.log(`Hello there, ${name}!`);
};

person.greet("John Doe");

// Check if a property exists in an object
// The in operator can be used to check if a property exists in an object
console.log("name" in person);

// The typeof operator can be used to check the type of a property
console.log(typeof person.age);

// The delete operator can be used to delete a property from an object
delete person.age;
console.log(person);
// -----------------------------------------------------------------
