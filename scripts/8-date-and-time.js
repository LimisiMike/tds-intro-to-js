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
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person4 = new Person("John", 30);
