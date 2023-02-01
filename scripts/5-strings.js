// (a) Basics of strings
let fullName = "Jane Doe";

// Get the first character
console.log(fullName[0]);

// Return an array of words of a string
console.log(fullName.split(" "));

// (b) String methods
// Return the length of a string
console.log(fullName.length);

// Convert to uppercase
console.log(fullName.toUpperCase());

// Convert to lowercase
console.log(fullName.toLowerCase());

// Character at a given index
console.log(fullName.charAt(2));

// Returns a portion of the string, starting at the specified index and extending for a given number.
console.log(fullName.substring(0, 4));

// Extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(fullName.slice(0, 4));
