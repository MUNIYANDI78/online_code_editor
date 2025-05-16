const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "What type of programming language is Python?",
    options: ["Machine Language", "Assembly Language", "Compiled Language", "Interpreted Language"],
    answer: "Interpreted Language"
  },
  {
    id: 2,
    question: "Who developed the Python programming language?",
    options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
    answer: "Guido van Rossum"
  },
  {
    id: 3,
    question: "What is the standard way to indicate code blocks in Python?",
    options: ["Curly braces {}", "Parentheses ()", "Indentation", "Keywords like BEGIN and END"],
    answer: "Indentation"
  },
  {
    id: 4,
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    answer: "def"
  },
  {
    id: 5,
    question: "Which of the following is NOT a built-in data type in Python?",
    options: ["int", "float", "boolean", "character"],
    answer: "character"
  },
  {
    id: 6,
    question: "What is the result of `5 // 2` in Python?",
    options: ["2.5", "2", "3", "2.0"],
    answer: "2"
  },
  {
    id: 7,
    question: "What is the result of `5 % 2` in Python?",
    options: ["2.5", "1", "3", "0"],
    answer: "1"
  },
  {
    id: 8,
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "*", "//"],
    answer: "**"
  },
  {
    id: 9,
    question: "What will `print('Hello' + 'World')` output?",
    options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
    answer: "HelloWorld"
  },
  {
    id: 10,
    question: "What will `print('Hello' * 3)` output?",
    options: ["HelloHelloHello", "Hello 3", "Hello*3", "Error"],
    answer: "HelloHelloHello"
  },
  {
    id: 11,
    question: "Which of the following is an immutable data type in Python?",
    options: ["list", "dictionary", "set", "tuple"],
    answer: "tuple"
  },
  {
    id: 12,
    question: "How do you access the element at index 2 of a list named `my_list`?",
    options: ["my_list[2]", "my_list(2)", "my_list.get(2)", "my_list{2}"],
    answer: "my_list[2]"
  },
  {
    id: 13,
    question: "Which list method adds an element to the end of the list?",
    options: ["append()", "add()", "insert()", "extend()"],
    answer: "append()"
  },
  {
    id: 14,
    question: "Which list method removes the last element of the list?",
    options: ["remove()", "delete()", "pop()", "discard()"],
    answer: "pop()"
  },
  {
    id: 15,
    question: "What is a dictionary in Python?",
    options: ["An ordered sequence of items", "A collection of unique elements", "A collection of key-value pairs", "A mutable sequence of characters"],
    answer: "A collection of key-value pairs"
  },
  {
    id: 16,
    question: "How do you access the value associated with the key 'name' in a dictionary named `my_dict`?",
    options: ["my_dict['name']", "my_dict.get('name')", "my_dict->name", "my_dict.name"],
    answer: "my_dict['name']"
  },
  {
    id: 17,
    question: "What is a set in Python?",
    options: ["An ordered sequence of items", "A collection of key-value pairs", "A collection of unique, unordered elements", "A mutable sequence of characters"],
    answer: "A collection of unique, unordered elements"
  },
  {
    id: 18,
    question: "What is a tuple in Python?",
    options: ["A mutable sequence of items", "An ordered, immutable sequence of items", "A collection of key-value pairs", "A collection of unique elements"],
    answer: "An ordered, immutable sequence of items"
  },
  {
    id: 19,
    question: "Which keyword is used for conditional statements in Python?",
    options: ["switch", "case", "if", "condition"],
    answer: "if"
  },
  {
    id: 20,
    question: "Which keyword is used for loops that iterate a specific number of times?",
    options: ["while", "loop", "for", "iterate"],
    answer: "for"
  },
  {
    id: 21,
    question: "Which keyword is used for loops that continue as long as a condition is true?",
    options: ["for", "loop", "while", "until"],
    answer: "while"
  },
  {
    id: 22,
    question: "What is the purpose of the `break` statement in a loop?",
    options: ["To skip the current iteration and continue to the next", "To exit the loop immediately", "To pause the loop", "To restart the loop"],
    answer: "To exit the loop immediately"
  },
  {
    id: 23,
    question: "What is the purpose of the `continue` statement in a loop?",
    options: ["To exit the loop immediately", "To restart the loop", "To skip the current iteration and continue to the next", "To pause the loop"],
    answer: "To skip the current iteration and continue to the next"
  },
  {
    id: 24,
    question: "What is a module in Python?",
    options: ["A single line of code", "A collection of related functions and classes", "A way to define variables", "A type of loop"],
    answer: "A collection of related functions and classes"
  },
  {
    id: 25,
    question: "Which keyword is used to import modules in Python?",
    options: ["include", "require", "import", "using"],
    answer: "import"
  },
  {
    id: 26,
    question: "What is a package in Python?",
    options: ["A single Python file", "A directory of Python modules", "A way to compress Python code", "A tool for running Python scripts"],
    answer: "A directory of Python modules"
  },
  {
    id: 27,
    question: "What is the purpose of the `__init__.py` file in a Python package?",
    options: ["To define the main function of the package", "To indicate that a directory is a Python package", "To store installation instructions for the package", "To define the package's metadata"],
    answer: "To indicate that a directory is a Python package"
  },
  {
    id: 28,
    question: "What is an exception in Python?",
    options: ["A syntax error", "An error that occurs during the execution of a program", "A warning message", "A type of loop"],
    answer: "An error that occurs during the execution of a program"
  },
  {
    id: 29,
    question: "Which block is used to handle exceptions in Python?",
    options: ["try-except", "if-else", "for-else", "while-else"],
    answer: "try-except"
  },
  {
    id: 30,
    question: "Which block is executed if no exception is raised in the `try` block?",
    options: ["except", "finally", "else", "pass"],
    answer: "else"
  },
  {
    id: 31,
    question: "Which block is always executed, regardless of whether an exception occurred or not?",
    options: ["try", "except", "finally", "else"],
    answer: "finally"
  },
  {
    id: 32,
    question: "What is a class in Python?",
    options: ["An instance of an object", "A blueprint for creating objects", "A type of function", "A way to define variables"],
    answer: "A blueprint for creating objects"
  },
  {
    id: 33,
    question: "What is an object in Python?",
    options: ["A definition of attributes and methods", "An instance of a class", "A type of loop", "A way to import modules"],
    answer: "An instance of a class"
  },
  {
    id: 34,
    question: "What is the special method called when an object is created?",
    options: ["__init__", "__new__", "__create__", "__construct__"],
    answer: "__init__"
  },
  {
    id: 35,
    question: "What is inheritance in Python?",
    options: ["The ability of a class to have multiple constructors", "The mechanism by which a class can acquire the attributes and methods of another class", "A way to define interfaces", "A technique for handling exceptions"],
    answer: "The mechanism by which a class can acquire the attributes and methods of another class"
  },
  {
    id: 36,
    question: "What is polymorphism in Python?",
    options: ["The ability of an object to take on many forms", "The mechanism of hiding the implementation details", "A way to define multiple classes in a single file", "The process of converting one data type to another"],
    answer: "The ability of an object to take on many forms"
  },
  {
    id: 37,
    question: "What is a decorator in Python?",
    options: ["A way to add styling to output", "A function that modifies the behavior of another function", "A type of loop", "A way to define classes"],
    answer: "A function that modifies the behavior of another function"
  },
  {
    id: 38,
    question: "What is a generator in Python?",
    options: ["A function that always returns a list", "A function that produces a sequence of values using the `yield` keyword", "A way to generate random numbers", "A tool for creating documentation"],
    answer: "A function that produces a sequence of values using the `yield` keyword"
  },
  {
    id: 39,
    question: "What is a lambda function in Python?",
    options: ["A named function", "A small anonymous function", "A recursive function", "A built-in function"],
    answer: "A small anonymous function"
  },
  {
    id: 40,
    question: "What is list comprehension in Python?",
    options: ["A way to understand lists", "A concise way to create lists", "A method to sort lists", "A way to iterate over lists"],
    answer: "A concise way to create lists"
  },
  {
    id: 41,
    question: "What is dictionary comprehension in Python?",
    options: ["A way to understand dictionaries", "A concise way to create dictionaries", "A method to sort dictionaries", "A way to iterate over dictionaries"],
    answer: "A concise way to create dictionaries"
  },
  {
    id: 42,
    question: "What is the purpose of the `with` statement in Python?",
    options: ["To define a loop", "To handle exceptions", "To simplify resource management (e.g., file handling)", "To define a function"],
    answer: "To simplify resource management (e.g., file handling)"
  },
  {
    id: 43,
    question: "What is pickling in Python?",
    options: ["A way to preserve food", "The process of converting Python objects into a byte stream for storage or transmission", "A method for handling exceptions", "A way to optimize Python code"],
    answer: "The process of converting Python objects into a byte stream for storage or transmission"
  },
  {
    id: 44,
    question: "What is the opposite of pickling?",
    options: ["Unpacking", "Slicing", "Unpickling", "Deserializing"],
    answer: "Unpickling"
  },
  {
    id: 45,
    question: "What is the purpose of the `pip` command?",
    options: ["To install Python itself", "To manage Python packages", "To run Python scripts", "To create virtual environments"],
    answer: "To manage Python packages"
  },
  {
    id: 46,
    question: "What is a virtual environment in Python?",
    options: ["A simulated operating system", "An isolated Python environment for projects", "A way to run Python in the cloud", "A tool for debugging Python code"],
    answer: "An isolated Python environment for projects"
  },
  {
    id: 47,
    question: "What is the purpose of the `__name__ == '__main__'` block?",
    options: ["To define the main function of a module", "To ensure that certain code only runs when the script is executed directly, not when imported as a module", "To declare global variables", "To handle exceptions at the module level"],
    answer: "To ensure that certain code only runs when the script is executed directly, not when imported as a module"
  },
  {
    id: 48,
    question: "What is a docstring in Python?",
    options: ["A string literal used to document Python code", "A way to define string variables", "A type of comment", "A tool for generating documentation files"],
    answer: "A string literal used to document Python code"
  },
  {
    id: 49,
    question: "What is the purpose of the `map()` function in Python?",
    options: ["To filter elements based on a condition", "To apply a given function to each item of an iterable", "To reduce an iterable to a single value", "To sort an iterable"],
    answer: "To apply a given function to each item of an iterable"
  },
  {
    id: 50,
    question: "What is the purpose of the `filter()` function in Python?",
    options: ["To apply a given function to each item of an iterable", "To create a new iterable with elements that pass a certain condition", "To reduce an iterable to a single value", "To sort an iterable"],
    answer: "To create a new iterable with elements that pass a certain condition"
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

router.get('/python/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;
