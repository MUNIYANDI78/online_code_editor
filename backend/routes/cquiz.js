const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "Who is credited with developing the C programming language?",
    options: ["Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup", "James Gosling"],
    answer: "Dennis Ritchie"
  },
  {
    id: 2,
    question: "In which year was the C programming language developed?",
    options: ["1972", "1983", "1991", "2000"],
    answer: "1972"
  },
  {
    id: 3,
    question: "What is the standard library function used to print output to the console in C?",
    options: ["print()", "console.log()", "printf()", "cout <<"],
    answer: "printf()"
  },
  {
    id: 4,
    question: "Which header file is typically included for standard input/output functions like `printf` and `scanf`?",
    options: ["stdio.h", "iostream.h", "conio.h", "stdlib.h"],
    answer: "stdio.h"
  },
  {
    id: 5,
    question: "What is the keyword used to declare an integer variable in C?",
    options: ["int", "integer", "num", "short"],
    answer: "int"
  },
  {
    id: 6,
    question: "Which of the following is NOT a fundamental data type in C?",
    options: ["int", "float", "char", "string"],
    answer: "string"
  },
  {
    id: 7,
    question: "What is the size of an `int` data type in C (typically on a 32-bit system)?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    answer: "4 bytes"
  },
  {
    id: 8,
    question: "What is the size of a `char` data type in C?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    answer: "1 byte"
  },
  {
    id: 9,
    question: "What is the operator used for logical AND in C?",
    options: ["&", "&&", "|", "||"],
    answer: "&&"
  },
  {
    id: 10,
    question: "What is the operator used for logical OR in C?",
    options: ["&", "&&", "|", "||"],
    answer: "||"
  },
  {
    id: 11,
    question: "What is the operator used for logical NOT in C?",
    options: ["!", "~", "^", "%"],
    answer: "!"
  },
  {
    id: 12,
    question: "Which keyword is used to define a function in C?",
    options: ["function", "def", "func", "void (or return type)"],
    answer: "void (or return type)"
  },
  {
    id: 13,
    question: "What is the return type of the `main` function in a standard C program?",
    options: ["void", "int", "char", "float"],
    answer: "int"
  },
  {
    id: 14,
    question: "What is a pointer in C?",
    options: ["A variable that stores a memory address", "A data type that can hold any type of value", "A function that returns an address", "A keyword used for loops"],
    answer: "A variable that stores a memory address"
  },
  {
    id: 15,
    question: "Which operator is used to get the address of a variable in C?",
    options: ["*", "&", "->", "."],
    answer: "&"
  },
  {
    id: 16,
    question: "Which operator is used to dereference a pointer in C (access the value pointed to)?",
    options: ["*", "&", "->", "."],
    answer: "*"
  },
  {
    id: 17,
    question: "What is an array in C?",
    options: ["A collection of different data types", "A single variable that can store multiple values", "A fixed-size, ordered collection of elements of the same data type", "A dynamic data structure"],
    answer: "A fixed-size, ordered collection of elements of the same data type"
  },
  {
    id: 18,
    question: "How do you access the element at index 3 of an array named `arr` in C?",
    options: ["arr[3]", "arr(3)", "arr->3", "*arr + 3"],
    answer: "arr[3]"
  },
  {
    id: 19,
    question: "What is a string in C?",
    options: ["A fundamental data type", "An array of characters terminated by a null character ('\\0')", "A sequence of characters enclosed in double quotes", "A dynamic array of characters"],
    answer: "An array of characters terminated by a null character ('\\0')"
  },
  {
    id: 20,
    question: "Which standard library function is used to read a string from the console in C?",
    options: ["print()", "scanf()", "gets()", "readln()"],
    answer: "scanf()"
  },
  {
    id: 21,
    question: "What is a structure in C?",
    options: ["A collection of functions", "A user-defined data type that can hold elements of different data types", "A type of loop", "A way to define constants"],
    answer: "A user-defined data type that can hold elements of different data types"
  },
  {
    id: 22,
    question: "Which keyword is used to define a structure in C?",
    options: ["class", "struct", "union", "typedef"],
    answer: "struct"
  },
  {
    id: 23,
    question: "How do you access a member named `age` of a structure variable `person` in C?",
    options: ["person.age", "person->age", "person[age]", "*person.age"],
    answer: "person.age"
  },
  {
    id: 24,
    question: "What is a union in C?",
    options: ["Similar to a structure but all members share the same memory location", "A collection of functions", "A type of pointer", "A way to define constants"],
    answer: "Similar to a structure but all members share the same memory location"
  },
  {
    id: 25,
    question: "Which keyword is used for conditional statements in C?",
    options: ["switch", "case", "if", "condition"],
    answer: "if"
  },
  {
    id: 26,
    question: "Which keyword is used for the `else` part of an `if` statement in C?",
    options: ["otherwise", "default", "else", "then"],
    answer: "else"
  },
  {
    id: 27,
    question: "Which keyword is used for multi-way conditional statements in C?",
    options: ["if-elif-else", "switch-case-default", "select-when-otherwise", "multi-if"],
    answer: "switch-case-default"
  },
  {
    id: 28,
    question: "Which keyword is used for a loop that executes a block of code as long as a condition is true?",
    options: ["for", "loop", "while", "do-while"],
    answer: "while"
  },
  {
    id: 29,
    question: "Which keyword is used for a loop that executes a block of code at least once and then continues as long as a condition is true?",
    options: ["for", "loop-until", "while", "do-while"],
    answer: "do-while"
  },
  {
    id: 30,
    question: "Which keyword is used for a loop that iterates a specific number of times?",
    options: ["while", "loop", "for", "repeat"],
    answer: "for"
  },
  {
    id: 31,
    question: "What is the purpose of the `break` statement in a loop in C?",
    options: ["To skip the current iteration", "To exit the loop", "To continue to the next iteration", "To restart the loop"],
    answer: "To exit the loop"
  },
  {
    id: 32,
    question: "What is the purpose of the `continue` statement in a loop in C?",
    options: ["To exit the loop", "To restart the loop", "To skip the current iteration and proceed to the next", "To terminate the program"],
    answer: "To skip the current iteration and proceed to the next"
  },
  {
    id: 33,
    question: "What is a function prototype in C?",
    options: ["The body of a function", "The declaration of a function, specifying its return type, name, and parameters", "A call to a function", "A comment describing the function"],
    answer: "The declaration of a function, specifying its return type, name, and parameters"
  },
  {
    id: 34,
    question: "What is recursion in C?",
    options: ["A loop that runs indefinitely", "A function calling itself", "A way to define recursive data structures", "A technique for optimizing code"],
    answer: "A function calling itself"
  },
  {
    id: 35,
    question: "What is a header file in C?",
    options: ["A file containing only function definitions", "A file containing declarations of functions, data types, and macros", "The main source code file", "A compiled object file"],
    answer: "A file containing declarations of functions, data types, and macros"
  },
  {
    id: 36,
    question: "Which preprocessor directive is used to include a header file in C?",
    options: ["#include", "#define", "#ifdef", "#ifndef"],
    answer: "#include"
  },
  {
    id: 37,
    question: "What is a macro in C (defined using `#define`)?",
    options: ["A constant value", "A piece of code that is replaced by its value by the preprocessor", "A function defined in a header file", "A way to define data types"],
    answer: "A piece of code that is replaced by its value by the preprocessor"
  },
  {
    id: 38,
    question: "What is dynamic memory allocation in C?",
    options: ["Allocating memory at compile time", "Allocating memory during program execution", "Memory that is automatically managed by the system", "Memory used for storing global variables"],
    answer: "Allocating memory during program execution"
  },
  {
    id: 39,
    question: "Which standard library function is used to allocate a block of memory in C?",
    options: ["alloc()", "malloc()", "new()", "allocate()"],
    answer: "malloc()"
  },
  {
    id: 40,
    question: "Which standard library function is used to deallocate memory that was dynamically allocated in C?",
    options: ["free()", "dealloc()", "delete()", "release()"],
    answer: "free()"
  },
  {
    id: 41,
    question: "What is a file pointer in C?",
    options: ["A pointer to the beginning of a file", "A variable that stores the name of a file", "A pointer to a structure that contains information about a file", "An integer representing the file descriptor"],
    answer: "A pointer to a structure that contains information about a file"
  },
  {
    id: 42,
    question: "Which standard library function is used to open a file in C?",
    options: ["open_file()", "fopen()", "create_file()", "file_open()"],
    answer: "fopen()"
  },
  {
    id: 43,
    question: "Which standard library function is used to close a file in C?",
    options: ["close_file()", "fclose()", "end_file()", "file_close()"],
    answer: "fclose()"
  },
  {
    id: 44,
    question: "What is the purpose of the `typedef` keyword in C?",
    options: ["To define a new function", "To create an alias for an existing data type", "To define a constant", "To declare a structure"],
    answer: "To create an alias for an existing data type"
  },
  {
    id: 45,
    question: "What are command-line arguments in C?",
    options: ["Arguments passed to the `main` function when the program is executed", "Input taken from the user during program execution", "Values returned by a function", "Variables declared globally"],
    answer: "Arguments passed to the `main` function when the program is executed"
  },
  {
    id: 46,
    question: "What are the typical parameters of the `main` function that receive command-line arguments?",
    options: ["argc, argv", "count, values", "numArgs, argList", "size, array"],
    answer: "argc, argv"
  },
  {
    id: 47,
    question: "What is a static variable in C?",
    options: ["A variable that cannot be changed", "A variable whose value is stored in a register", "A variable that retains its value between function calls", "A variable with global scope"],
    answer: "A variable that retains its value between function calls"
  },
  {
    id: 48,
    question: "What is a volatile variable in C?",
    options: ["A variable whose value can be changed by the program", "A variable whose value might be changed by factors outside the program's control", "A variable that is stored in non-volatile memory", "A variable with a fixed memory address"],
    answer: "A variable whose value might be changed by factors outside the program's control"
  },
  {
    id: 49,
    question: "What is the difference between `struct` and `union` in C?",
    options: ["`struct` allocates memory for all members, `union` allocates memory for the largest member", "`union` allocates memory for all members, `struct` allocates memory for the largest member", "They are interchangeable", "`struct` can only hold primitive types, `union` can hold any type"],
    answer: "`struct` allocates memory for all members, `union` allocates memory for the largest member"
  },
  {
    id: 50,
    question: "What is the purpose of the preprocessor in C?",
    options: ["To compile the C code into machine code", "To link object files together", "To perform text substitution, include header files, and handle conditional compilation before the actual compilation", "To manage memory allocation"],
    answer: "To perform text substitution, include header files, and handle conditional compilation before the actual compilation"
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

router.get('/c/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;


