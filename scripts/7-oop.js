// (a) Introduction to object oriented programming
// -----------------------------------------------------------------

// Object oriented programming (OOP) is a programming paradigm that uses objects
// to model real-world objects
// OOP is a way of structuring a program by bundling related properties and
// behaviors into individual objects
// OOP is a way of writing code that is easy to read and maintain

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
  walk: function () {
    console.log("I am walking!");
  },
};
// ------------------------------------------------------------------------

// (b) Introduction to classes

// Classes are a way to define a blueprint for creating objects
// Classes are defined using the class keyword
// The class keyword is followed by the name of the class
// The class name should be in PascalCase
// The class name should be a noun
// The class name should be a single word
// The class name should be descriptive

class Person {
  // The constructor method is a special method that is used to initialize objects
  // The constructor method is called when an object is created using the new keyword
  // The constructor method is called automatically when an object is created
  // The constructor method is called only once when an object is created
  // The constructor method is used to initialize properties of an object
  // The constructor method is used to set the initial values of properties of an object
  // "this" keyword is used to refer to the current object
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Methods are functions that are defined inside a class
  walk() {
    console.log("I am walking!");
  }
}

// Instances are objects that are created using a class
let person1 = new Person("Jane Doe", 25);
// "new" keyword is used to create an instance of a class
let person2 = new Person("Mike Smith", 30);

// console.log(person1);
// console.log(person2);
// ------------------------------------------------------------------------

// (c) Accessing object properties
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
console.log(person2.name);

// Accessing using bracket notation
// The bracket notation is used when the property name is not a valid JavaScript identifier
// The property name is enclosed in quotes
// The quotes can be single or double quotes

// Accessing the age property
// console.log(person["age"]);
// -----------------------------------------------------------------

// (d) Encapsulation
// -----------------------------------------------------------------

// Encapsulation is a way to restrict access to certain properties and methods
// Encapsulation is a way to hide the implementation details of a class
// Encapsulation is a way to protect the data of a class
// Encapsulation is a way to prevent the data of a class from being modified by accident
// Encapsulation is a way to prevent the data of a class from being modified by malicious code

// Encapsulation is achieved by using access modifiers
// Access modifiers are keywords that are used to set the accessibility of properties and methods
// There are three types of access modifiers:
// 1. Public
// 2. Private
// 3. Protected

// 1. Public access modifier is used to make properties and methods accessible from outside the class
// 2. Private access modifier is used to make properties and methods accessible only from inside the class
// 3. Protected access modifier is used to make properties and methods accessible only from inside the class and from classes that inherit from this class

// Public access modifier is the default access modifier
// Private access modifier is prefixed with the # symbol
// Protected access modifier is prefixed with the _ symbol

// Public access modifier example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

let person3 = new Person("Jane Doe", 25);
console.log(person3.name);
