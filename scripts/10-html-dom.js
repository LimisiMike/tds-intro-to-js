// Introduction to the DOM
// The Document Object Model (DOM) is a programming interface for HTML and XML
// documents. It represents the page so that programs can change the document
// structure, style, and content. The DOM represents the document as nodes and
// objects. That way, programming languages can connect to the page.

// The DOM is neither part of HTML, nor part of JavaScript; it is a separate set
// of rules. It is implemented by all major browser vendors, and covers two
// primary areas:

// 1. Making a model of the HTML page and all of its parts
// 2. Accessing and changing the HTML page

// The DOM is called an object model because the model (the DOM structure) is
// made of objects. Each object represents a different part of the page loaded
// in the browser window.

// The DOM is a standard for how to get, change, add, or delete HTML elements.

// The DOM is a W3C (World Wide Web Consortium) standard.

// The W3C is the main international standards organization for the World Wide
// Web.

// The DOM defines a standard for accessing documents:

// "The W3C Document Object Model (DOM) is a platform and language-neutral
// interface that allows programs and scripts to dynamically access and update
// the content, structure, and style of documents."

// The W3C DOM standard is separated into 3 different parts:

// Core DOM - standard model for all document types
// XML DOM - standard model for XML documents
// HTML DOM - standard model for HTML documents

// The HTML DOM is a standard object model and programming interface for HTML.
// It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements

// In other words: The HTML DOM is a standard for how to get, change, add, or
// delete HTML elements.
// ---------------------------------------------------------------------------

// HTML DOM Examples:
// ---------------------------------------------------------------------------

// Example 1: Accessing an HTML Element

// The HTML DOM allows JavaScript to access and change all the elements of an
// HTML document.

// In this example, we access (find) an HTML element (with id="demo"), and
// change the element content (innerHTML) to "Hello JavaScript!":

document.getElementById("demo").innerHTML = "Hello JavaScript!";

// ---------------------------------------------------------------------------

// Example 2: Creating an HTML Element

// The HTML DOM allows JavaScript to create new HTML elements, and change the
// content of existing HTML elements.

// In this example, we create a new <p> element, and add some text to the
// element:

let para = document.createElement("p");
let node = document.createTextNode(
  "This is a new paragraph written using the HTML DOM API."
);
// append the text node to the paragraph
para.appendChild(node);

// get the body element
let body = document.getElementById("body");

// add the paragraph to the body
body.appendChild(para);
// ---------------------------------------------------------------------------

// Example 3: Changing the Style of an HTML Element

// The HTML DOM allows JavaScript to change the style of an HTML element.

// In this example, we change the style of an HTML element (with id="demo"),
// by changing the style attribute:

document.getElementById("para").style.fontSize = "25px";
document.getElementById("para").style.margin = "15px 0";
document.getElementById("para").style.color = "purple";
// ---------------------------------------------------------------------------

// Example 4: Adding an Event Handler

// The HTML DOM allows JavaScript to assign event handlers to elements.

// In this example, we assign a click event handler to a <button> element:

document.getElementById("myBtn").addEventListener("click", function () {
  alert("Hello World!");
});
// ---------------------------------------------------------------------------
