const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/js', (req, res) => {
  res.json([
    
  {
    title: "Lesson 1: What is JavaScript?",
    content: "<p><strong>JavaScript (JS)</strong> is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for <strong>Web pages</strong>, many non-browser environments also use it. It's a dynamic language with prototype-based object orientation and multi-paradigm.</p>"
  },
  {
    title: "Lesson 2: Basic Syntax",
    content: `<p>JavaScript syntax is similar to many other programming languages. Here are some basics:</p>
    <ul>
      <li><strong>Statements</strong> are separated by semicolons (<code>;</code>), though they are often optional.</li>
      <li><strong>Variables</strong> are declared using <code>let</code>, <code>const</code>, or <code>var</code>.</li>
      <li><strong>Data types</strong> include numbers, strings, booleans, null, undefined, symbols, and objects.</li>
      <li><strong>Comments</strong> are written using <code>//</code> for single-line and <code>/* ... */</code> for multi-line.</li>
    </ul><pre><code>
let message = "Hello, World!"; // Variable declaration
console.log(message); // Output to the console

/*
This is a
multi-line comment.
*/
</code></pre>`
  },
  {
    title: "Lesson 3: Variables - Declaration and Assignment",
    content: `<p>Variables are used to store data. You can declare them and assign values:</p><pre><code>
let age; // Declare a variable named 'age'
age = 30; // Assign the value 30 to 'age'

let name = "Alice"; // Declare and assign in one step
const PI = 3.14159; // Constant variable (cannot be reassigned)
var oldVariable = "This is an older way to declare variables";
</code></pre><p>It's generally recommended to use <code>let</code> for variables that might be reassigned and <code>const</code> for variables whose value should not change.</p>`
  },
  {
    title: "Lesson 4: Data Types",
    content: `<p>JavaScript has several primitive data types:</p>
    <ul>
      <li><strong>Number</strong>: Represents numeric values (integers and floating-point numbers).</li>
      <li><strong>String</strong>: Represents sequences of characters.</li>
      <li><strong>Boolean</strong>: Represents logical values (<code>true</code> or <code>false</code>).</li>
      <li><strong>Null</strong>: Represents an intentional absence of a value.</li>
      <li><strong>Undefined</strong>: Represents a variable that has been declared but has not been assigned a value.</li>
      <li><strong>Symbol</strong>: Represents a unique and immutable primitive value (introduced in ES6).</li>
    </ul><p>Objects are also a fundamental data type in JavaScript, used to store collections of key-value pairs.</p>`
  },
  {
    title: "Lesson 5: Operators - Arithmetic",
    content: `<p>Arithmetic operators perform mathematical calculations:</p>
    <ul>
      <li><code>+</code> (Addition)</li>
      <li><code>-</code> (Subtraction)</li>
      <li><code>*</code> (Multiplication)</li>
      <li><code>/</code> (Division)</li>
      <li><code>%</code> (Modulo - returns the remainder)</li>
      <li><code>++</code> (Increment)</li>
      <li><code>--</code> (Decrement)</li>
    </ul><pre><code>
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x * y); // 50
console.log(x % y); // 0
x++; // x becomes 11
</code></pre>`
  },
  {
    title: "Lesson 6: Operators - Assignment",
    content: `<p>Assignment operators assign values to variables:</p>
    <ul>
      <li><code>=</code> (Simple assignment)</li>
      <li><code>+=</code> (Add and assign)</li>
      <li><code>-=</code> (Subtract and assign)</li>
      <li><code>*=</code> (Multiply and assign)</li>
      <li><code>/=</code> (Divide and assign)</li>
      <li><code>%=</code> (Modulo and assign)</li>
    </ul><pre><code>
let a = 5;
a += 3; // a becomes 8 (equivalent to a = a + 3)
a *= 2; // a becomes 16 (equivalent to a = a * 2)
</code></pre>`
  },
  {
    title: "Lesson 7: Operators - Comparison",
    content: `<p>Comparison operators compare two values:</p>
    <ul>
      <li><code>==</code> (Equal to - value equality)</li>
      <li><code>===</code> (Strict equal to - value and type equality)</li>
      <li><code>!=</code> (Not equal to - value inequality)</li>
      <li><code>!==</code> (Strict not equal to - value or type inequality)</li>
      <li><code>></code> (Greater than)</li>
      <li><code><</code> (Less than)</li>
      <li><code>>=</code> (Greater than or equal to)</li>
      <li><code><=</code> (Less than or equal to)</li>
    </ul><pre><code>
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(10 > 5); // true
</code></pre>`
  },
  {
    title: "Lesson 8: Operators - Logical",
    content: `<p>Logical operators combine or modify boolean values:</p>
    <ul>
      <li><code>&&</code> (Logical AND) - returns <code>true</code> if both operands are <code>true</code>.</li>
      <li><code>||</code> (Logical OR) - returns <code>true</code> if at least one operand is <code>true</code>.</li>
      <li><code>!</code> (Logical NOT) - returns the opposite boolean value.</li>
    </ul><pre><code>
let sunny = true;
let warm = true;
console.log(sunny && warm); // true

let hasDiscount = true;
let isMember = false;
console.log(hasDiscount || isMember); // true

console.log(!sunny); // false
</code></pre>`
  },
  {
    title: "Lesson 9: Control Flow - if Statement",
    content: `<p>The <code>if</code> statement executes a block of code if a condition is true:</p><pre><code>
let temperature = 25;
if (temperature > 20) {
  console.log("It's warm!");
}
</code></pre>`
  },
  {
    title: "Lesson 10: Control Flow - if...else Statement",
    content: `<p>The <code>if...else</code> statement executes one block of code if a condition is true and another block if it's false:</p><pre><code>
let age = 15;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
</code></pre>`
  },
  {
    title: "Lesson 11: Control Flow - if...else if...else Statement",
    content: `<p>The <code>if...else if...else</code> statement allows you to check multiple conditions:</p><pre><code>
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D or lower");
}
</code></pre>`
  },
  {
    title: "Lesson 12: Control Flow - switch Statement",
    content: `<p>The <code>switch</code> statement evaluates an expression and matches its value against several cases:</p><pre><code>
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day");
}
</code></pre><p>The <code>break</code> statement exits the <code>switch</code> block.</p>`
  },
  {
    title: "Lesson 13: Loops - for Loop",
    content: `<p>The <code>for</code> loop executes a block of code a specific number of times:</p><pre><code>
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}
</code></pre><p>The loop has three parts: initialization, condition, and increment/decrement.</p>`
  },
  {
    title: "Lesson 14: Loops - while Loop",
    content: `<p>The <code>while</code> loop executes a block of code as long as a condition is true:</p><pre><code>
let count = 0;
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}
</code></pre><p>Be careful to ensure the condition eventually becomes false to avoid infinite loops.</p>`
  },
  {
    title: "Lesson 15: Loops - do...while Loop",
    content: `<p>The <code>do...while</code> loop is similar to <code>while</code>, but it executes the code block at least once before checking the condition:</p><pre><code>
let i = 0;
do {
  console.log("Value of i: " + i);
  i++;
} while (i < 2);
</code></pre>`
  },
  {
    title: "Lesson 16: Functions - Definition",
    content: `<p>Functions are blocks of code that can be defined and then executed (called) multiple times:</p><pre><code>
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Bob"); // Calling the function
</code></pre><p>Functions can take parameters (inputs).</p>`
  },
  {
    title: "Lesson 17: Functions - Return Values",
    content: `<p>Functions can return values using the <code>return</code> statement:</p><pre><code>
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log("The sum is: " + sum); // Output: The sum is: 8
</code></pre><p>Once a <code>return</code> statement is executed, the function stops.</p>`
  },
  {
    title: "Lesson 18: Functions - Function Expressions",
    content: `<p>Functions can also be defined as expressions:</p><pre><code>
let multiply = function(x, y) {
  return x * y;
};

let product = multiply(4, 6);
console.log("The product is: " + product); // Output: The product is: 24
</code></pre><p>Function expressions can be anonymous (without a name).</p>`
  },
  {
    title: "Lesson 19: Functions - Arrow Functions (ES6)",
    content: `<p>Arrow functions provide a more concise syntax for writing function expressions:</p><pre><code>
let subtract = (a, b) => {
  return a - b;
};

let difference = subtract(10, 4);
console.log("The difference is: " + difference); // Output: The difference is: 6

// If there's only one parameter, parentheses are optional:
let square = num => num * num;
console.log(square(5)); // Output: 25

// If the function body has only one expression, curly braces and 'return' are optional:
let divide = (x, y) => x / y;
console.log(divide(20, 2)); // Output: 10
</code></pre>`
  },
  {
    title: "Lesson 20: Scope - Global and Local",
    content: `<p><strong>Global scope</strong> refers to variables declared outside of any function or block. They can be accessed from anywhere in the code.<br><strong>Local scope</strong> (or function scope) refers to variables declared inside a function. They can only be accessed within that function.</p><pre><code>
let globalVar = "I am global";

function myFunction() {
  let localVar = "I am local";
  console.log(globalVar); // Can access globalVar
  console.log(localVar); // Can access localVar
}

myFunction();
console.log(globalVar); // Can access globalVar
// console.log(localVar); // Error: localVar is not defined here
</code></pre>`
  },
  {
    title: "Lesson 21: Scope - Block Scope (let and const)",
    content: `<p>Variables declared with <code>let</code> and <code>const</code> have <strong>block scope</strong>, meaning they are only accessible within the block (e.g., inside an <code>if</code> statement or a loop) where they are defined.</p><pre><code>
if (true) {
  let blockVar = "I am in the block";
  const blockConst = 10;
  console.log(blockVar); // Accessible here
  console.log(blockConst); // Accessible here
}

// console.log(blockVar); // Error: blockVar is not defined here
// console.log(blockConst); // Error: blockConst is not defined here
</code></pre><p><code>var</code>, on the other hand, has function scope (or global scope if declared outside a function).</p>`
  },
  {
    title: "Lesson 22: Objects - Basics",
    content: `<p>Objects are collections of key-value pairs (properties). Keys are usually strings, and values can be any data type.</p><pre><code>
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name); // Accessing properties using dot notation
console.log(person["age"]); // Accessing properties using bracket notation
</code></pre>`
  },
  {
    title: "Lesson 23: Objects - Methods",
    content: `<p>Objects can also contain functions as properties, which are called methods:</p><pre><code>
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  start: function() {
    console.log("Car started!");
  },
  getInfo: function() {
    return this.make + " " + this.model + " (" + this.year + ")";
  }
};

car.start(); // Calling a method
console.log(car.getInfo()); // Calling a method that returns a value
</code></pre><p><code>this</code> refers to the object the method is called on.</p>`
  },
  {
    title: "Lesson 24: Arrays - Basics",
    content: `<p>Arrays are ordered lists of items (elements). Elements can be of any data type.</p><pre><code>
let colors = ["red", "green", "blue"];
console.log(colors[0]); // Accessing elements by index (starting from 0)
console.log(colors.length); // Getting the number of elements
</code></pre>`
  },
  {
    title: "Lesson 25: Arrays - Common Methods",
    content: `<p>JavaScript arrays have many built-in methods to manipulate data:</p>
    <ul>
      <li><code>push()</code>: Adds an element to the end of the array.</li>
      <li><code>pop()</code>: Removes the last element from the array.</li>
      <li><code>shift()</code>: Removes the first element from the array.</li>
      <li><code>unshift()</code>: Adds an element to the beginning of the array.</li>
      <li><code>indexOf()</code>: Returns the first index at which a given element can be found.</li>
      <li><code>slice()</code>: Returns a shallow copy of a portion of an array.</li>
      <li><code>splice()</code>: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.</li>
    </ul><pre><code>
let fruits = ["apple", "banana"];
fruits.push("orange"); // ["apple", "banana", "orange"]
let lastFruit = fruits.pop(); // "orange", fruits is now ["apple", "banana"]
</code></pre>`
  },
  {
    title: "Lesson 26: Strings - Basics",
    content: `<p>Strings represent sequences of characters and are immutable.</p><pre><code>
let greeting = "Hello";
let name = 'World';
let message = \`Template literals allow embedding expressions like \${greeting} \${name}!\`;
console.log(greeting.length); // Get the length of the string
</code></pre>`
  },
  {
    title: "Lesson 27: Strings - Common Methods",
    content: `<p>JavaScript strings have various built-in methods:</p>
    <ul>
      <li><code>charAt()</code>: Returns the character at a specified index.</li>
      <li><code>concat()</code>: Joins two or more strings.</li>
      <li><code>slice()</code>: Extracts a part of a string and returns a new string.</li>
      <li><code>substring()</code>: Extracts the characters from a string, between two specified indices.</li>
      <li><code>toUpperCase()</code>: Converts the string to uppercase.</li>
      <li><code>toLowerCase()</code>: Converts the string to lowercase.</li>
      <li><code>indexOf()</code>: Returns the index within the calling String object of the first occurrence of the specified value.</li>
    </ul><pre><code>
let text = "JavaScript";
console.log(text.charAt(0)); // "J"
console.log(text.toUpperCase()); // "JAVASCRIPT"
</code></pre>`
}
  ]);
});

module.exports = router;

