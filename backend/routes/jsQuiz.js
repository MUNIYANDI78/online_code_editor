const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "What does the acronym DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Output Module", "Direct Object Manipulation"],
    answer: "Document Object Model"
  },
  {
    id: 2,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["variable", "let", "const", "var"],
    answer: "var"
  },
  {
    id: 3,
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    options: ["string", "boolean", "object", "number"],
    answer: "object"
  },
  {
    id: 4,
    question: "What is the result of `3 + '3'` in JavaScript?",
    options: ["6", "33", "NaN", "Error"],
    answer: "33"
  },
  {
    id: 5,
    question: "What is the purpose of the `typeof` operator?",
    options: ["To check if a variable is defined", "To determine the data type of a value", "To convert a value to a different type", "To compare two values"],
    answer: "To determine the data type of a value"
  },
  {
    id: 6,
    question: "Which of the following is a comparison operator that checks both value and type?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    id: 7,
    question: "What will `console.log(2 == '2')` output?",
    options: ["true", "false", "NaN", "Error"],
    answer: "true"
  },
  {
    id: 8,
    question: "What will `console.log(2 === '2')` output?",
    options: ["true", "false", "NaN", "Error"],
    answer: "false"
  },
  {
    id: 9,
    question: "What is the purpose of the `if` statement in JavaScript?",
    options: ["To loop through a block of code", "To define a function", "To execute a block of code only if a condition is true", "To declare a variable"],
    answer: "To execute a block of code only if a condition is true"
  },
  {
    id: 10,
    question: "Which loop iterates over the properties of an object?",
    options: ["for loop", "while loop", "do...while loop", "for...in loop"],
    answer: "for...in loop"
  },
  {
    id: 11,
    question: "What is a function in JavaScript?",
    options: ["A data type", "A loop structure", "A block of code designed to perform a particular task", "A way to declare variables"],
    answer: "A block of code designed to perform a particular task"
  },
  {
    id: 12,
    question: "How do you call a function named `myFunction`?",
    options: ["call myFunction", "myFunction()", "invoke myFunction", "run myFunction"],
    answer: "myFunction()"
  },
  {
    id: 13,
    question: "What is the scope of a variable declared with `var` inside a function?",
    options: ["Global scope", "Block scope", "Function scope", "Lexical scope"],
    answer: "Function scope"
  },
  {
    id: 14,
    question: "What is the scope of a variable declared with `let` inside a block?",
    options: ["Global scope", "Function scope", "Block scope", "Lexical scope"],
    answer: "Block scope"
  },
  {
    id: 15,
    question: "What is a closure in JavaScript?",
    options: ["A way to close the browser window", "A function that has access to its outer function's scope even after the outer function has finished executing", "A method to hide variables", "A type of loop"],
    answer: "A function that has access to its outer function's scope even after the outer function has finished executing"
  },
  {
    id: 16,
    question: "What is `this` keyword in JavaScript?",
    options: ["Refers to the previous variable", "Refers to the current function", "Refers to the object it belongs to", "Refers to the global object"],
    answer: "Refers to the object it belongs to"
  },
  {
    id: 17,
    question: "What is an object in JavaScript?",
    options: ["A primitive data type", "A collection of key-value pairs", "A type of loop", "A way to declare functions"],
    answer: "A collection of key-value pairs"
  },
  {
    id: 18,
    question: "How do you access a property named `name` of an object `person`?",
    options: ["person.name", "person('name')", "person->name", "person[name]"],
    answer: "person.name"
  },
  {
    id: 19,
    question: "What is an array in JavaScript?",
    options: ["A primitive data type", "An ordered list of values", "A collection of key-value pairs", "A type of loop"],
    answer: "An ordered list of values"
  },
  {
    id: 20,
    question: "How do you access the first element of an array named `myArray`?",
    options: ["myArray[1]", "myArray.first()", "myArray(0)", "myArray[0]"],
    answer: "myArray[0]"
  },
  {
    id: 21,
    question: "Which array method adds a new element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    id: 22,
    question: "Which array method removes the last element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "pop()"
  },
  {
    id: 23,
    question: "Which array method removes the first element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "shift()"
  },
  {
    id: 24,
    question: "Which array method adds a new element to the beginning of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "unshift()"
  },
  {
    id: 25,
    question: "What is the purpose of the `map()` array method?",
    options: ["To filter elements based on a condition", "To reduce the array to a single value", "To create a new array with the results of calling a provided function on every element", "To sort the array"],
    answer: "To create a new array with the results of calling a provided function on every element"
  },
  {
    id: 26,
    question: "What is the purpose of the `filter()` array method?",
    options: ["To modify the existing array", "To create a new array containing only the elements that pass a certain condition", "To check if at least one element satisfies a condition", "To check if all elements satisfy a condition"],
    answer: "To create a new array containing only the elements that pass a certain condition"
  },
  {
    id: 27,
    question: "What is the purpose of the `reduce()` array method?",
    options: ["To iterate over the array", "To find the index of an element", "To reduce the array to a single value", "To reverse the array"],
    answer: "To reduce the array to a single value"
  },
  {
    id: 28,
    question: "What is an event listener in JavaScript?",
    options: ["A function that is called when an event occurs on an HTML element", "A type of HTML element", "A way to style HTML elements", "A method to create animations"],
    answer: "A function that is called when an event occurs on an HTML element"
  },
  {
    id: 29,
    question: "How do you add an event listener to an HTML element?",
    options: ["element.listen('click', myFunction)", "element.on('click', myFunction)", "element.addEventListener('click', myFunction)", "element.attachEvent('click', myFunction)"],
    answer: "element.addEventListener('click', myFunction)"
  },
  {
    id: 30,
    question: "What is the purpose of the `preventDefault()` method in event handling?",
    options: ["To stop the event from bubbling up the DOM tree", "To prevent the default action of an event", "To immediately trigger the event", "To remove an event listener"],
    answer: "To prevent the default action of an event"
  },
  {
    id: 31,
    question: "What is event bubbling?",
    options: ["When an event is only triggered on the target element", "When an event propagates up the DOM tree from the target element to its ancestors", "When multiple events occur simultaneously", "When an event is prevented from happening"],
    answer: "When an event propagates up the DOM tree from the target element to its ancestors"
  },
  {
    id: 32,
    question: "What is event capturing?",
    options: ["The opposite of event bubbling, where the event propagates down the DOM tree", "When an event is caught before it reaches the target element", "A way to capture all events on a page", "Both A and B"],
    answer: "Both A and B"
  },
  {
    id: 33,
    question: "What is the purpose of the `setTimeout()` function?",
    options: ["To execute a function repeatedly after a fixed delay", "To execute a function once after a specified delay", "To pause the execution of JavaScript code", "To measure the time taken for a function to execute"],
    answer: "To execute a function once after a specified delay"
  },
  {
    id: 34,
    question: "What is the purpose of the `setInterval()` function?",
    options: ["To execute a function once after a specified delay", "To execute a function repeatedly at a fixed interval", "To clear a timeout", "To set a one-time alarm"],
    answer: "To execute a function repeatedly at a fixed interval"
  },
  {
    id: 35,
    question: "How do you stop a `setTimeout()` function from executing?",
    options: ["clearTimeout()", "clearInterval()", "stopTimeout()", "stopInterval()"],
    answer: "clearTimeout()"
  },
  {
    id: 36,
    question: "How do you stop a `setInterval()` function from executing?",
    options: ["clearTimeout()", "clearInterval()", "stopTimeout()", "stopInterval()"],
    answer: "clearInterval()"
  },
  {
    id: 37,
    question: "What is a promise in JavaScript?",
    options: ["A guarantee that a function will return a value", "An object representing the eventual completion (or failure) of an asynchronous operation", "A way to define synchronous code", "A type of event listener"],
    answer: "An object representing the eventual completion (or failure) of an asynchronous operation"
  },
  {
    id: 38,
    question: "What are the possible states of a Promise?",
    options: ["Pending, Success, Failure", "Started, Finished, Error", "Resolved, Rejected, Pending", "Loading, Done, Error"],
    answer: "Resolved, Rejected, Pending"
  },
  {
    id: 39,
    question: "Which method is used to handle the successful resolution of a Promise?",
    options: [".catch()", ".finally()", ".then()", ".resolve()"],
    answer: ".then()"
  },
  {
    id: 40,
    question: "Which method is used to handle the rejection of a Promise?",
    options: [".catch()", ".finally()", ".then()", ".reject()"],
    answer: ".catch()"
  },
  {
    id: 41,
    question: "What is `async/await` in JavaScript?",
    options: ["A way to define synchronous functions", "Syntactic sugar for working with Promises, making asynchronous code look more synchronous", "Keywords used for error handling", "Features for optimizing code execution"],
    answer: "Syntactic sugar for working with Promises, making asynchronous code look more synchronous"
  },
  {
    id: 42,
    question: "What does JSON stand for?",
    options: ["JavaScript Object Notation", "Java Script Object Network", "JavaScript Online Notation", "Java Source Object Notation"],
    answer: "JavaScript Object Notation"
  },
  {
    id: 43,
    question: "Which method is used to parse a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "stringifyJSON()"],
    answer: "JSON.parse()"
  },
  {
    id: 44,
    question: "Which method is used to convert a JavaScript object into a JSON string?",
    options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "stringifyJSON()"],
    answer: "JSON.stringify()"
  },
  {
    id: 45,
    question: "What is the purpose of the `localStorage` in web browsers?",
    options: ["To store data that is deleted when the browser tab is closed", "To store data persistently on the user's browser", "To store temporary session data", "To store cookies"],
    answer: "To store data persistently on the user's browser"
  },
  {
    id: 46,
    question: "What is the purpose of the `sessionStorage` in web browsers?",
    options: ["To store data persistently on the user's browser", "To store data that is deleted when the browser tab is closed", "To store cookies", "To store application cache"],
    answer: "To store data that is deleted when the browser tab is closed"
  },
  {
    id: 47,
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    options: ["A function that is called after a certain delay", "A function that runs as soon as it is defined", "A function that is only called once", "A function defined inside another function"],
    answer: "A function that runs as soon as it is defined"
  },
  {
    id: 48,
    question: "What is the spread syntax in JavaScript?",
    options: ["A way to combine strings", "A way to expand or unpack elements from an iterable (like an array or object)", "A way to define rest parameters in a function", "A method to iterate over an object's properties"],
    answer: "A way to expand or unpack elements from an iterable (like an array or object)"
  },
  {
    id: 49,
    question: "What are template literals in JavaScript?",
    options: ["Strings enclosed in single quotes", "Strings enclosed in double quotes", "Strings enclosed in backticks (` `) that can contain embedded expressions", "A way to define string templates"],
    answer: "Strings enclosed in backticks (` `) that can contain embedded expressions"
  },
  {
    id: 50,
    question: "What is destructuring in JavaScript?",
    options: ["A way to destroy objects and arrays", "A syntax that allows you to extract values from arrays or objects and assign them to distinct variables", "A method to structure your code", "A way to create nested data structures"],
    answer: "A syntax that allows you to extract values from arrays or objects and assign them to distinct variables"
  }
];

for (let i = 21; i <= 50; i++) {
  quiz.push({
    id: i,
    question: `Sample HTML Question ${i}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A"
  });
}

router.get('/js/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;
