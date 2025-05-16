const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "Who is credited with the design and initial implementation of C++?",
    options: ["Bjarne Stroustrup", "Dennis Ritchie", "Guido van Rossum", "James Gosling"],
    answer: "Bjarne Stroustrup"
  },
  {
    id: 2,
    question: "C++ is an extension of which programming language?",
    options: ["Java", "Python", "C", "Pascal"],
    answer: "C"
  },
  {
    id: 3,
    question: "What is the standard library object used to print output to the console in C++?",
    options: ["print()", "console.log()", "printf()", "std::cout"],
    answer: "std::cout"
  },
  {
    id: 4,
    question: "Which header file is typically included for standard input/output operations in C++?",
    options: ["stdio.h", "iostream", "conio.h", "stdlib.h"],
    answer: "iostream"
  },
  {
    id: 5,
    question: "What is the keyword used to declare an integer variable in C++?",
    options: ["int", "integer", "num", "short"],
    answer: "int"
  },
  {
    id: 6,
    question: "Which of the following is NOT a fundamental data type in C++?",
    options: ["int", "float", "char", "String"],
    answer: "String"
  },
  {
    id: 7,
    question: "What is the operator used for logical AND in C++?",
    options: ["&", "&&", "|", "||"],
    answer: "&&"
  },
  {
    id: 8,
    question: "What is the operator used for logical OR in C++?",
    options: ["&", "&&", "|", "||"],
    answer: "||"
  },
  {
    id: 9,
    question: "What is the operator used for logical NOT in C++?",
    options: ["!", "~", "^", "%"],
    answer: "!"
  },
  {
    id: 10,
    question: "Which keyword is used to define a class in C++?",
    options: ["struct", "object", "class", "type"],
    answer: "class"
  },
  {
    id: 11,
    question: "What is an object in C++?",
    options: ["A data type", "An instance of a class", "A function", "A keyword"],
    answer: "An instance of a class"
  },
  {
    id: 12,
    question: "What is a constructor in C++?",
    options: ["A function used to destroy objects", "A special member function that is automatically called when an object is created", "A regular member function used to initialize data members", "A keyword used to create objects"],
    answer: "A special member function that is automatically called when an object is created"
  },
  {
    id: 13,
    question: "What is a destructor in C++?",
    options: ["A function used to initialize objects", "A special member function that is automatically called when an object is destroyed", "A regular member function used to clean up resources", "A keyword used to delete objects"],
    answer: "A special member function that is automatically called when an object is destroyed"
  },
  {
    id: 14,
    question: "What is inheritance in C++?",
    options: ["The ability of a class to have multiple constructors", "The mechanism by which a class can derive properties and behaviors from another class", "A way to define interfaces", "A technique for handling exceptions"],
    answer: "The mechanism by which a class can derive properties and behaviors from another class"
  },
  {
    id: 15,
    question: "Which keyword is used to implement inheritance in C++?",
    options: ["implements", "extends", ":", "inherits"],
    answer: ":"
  },
  {
    id: 16,
    question: "What is polymorphism in C++?",
    options: ["The ability of an object to take on many forms", "The mechanism of hiding the implementation details", "A way to define multiple classes in a single file", "The process of converting one data type to another"],
    answer: "The ability of an object to take on many forms"
  },
  {
    id: 17,
    question: "What is function overloading in C++?",
    options: ["Defining multiple functions with the same name but different parameter lists within the same scope", "Defining a function with the same name in a derived class that overrides the base class function", "Calling a function of the base class from a derived class", "Defining a function that can accept a variable number of arguments"],
    answer: "Defining multiple functions with the same name but different parameter lists within the same scope"
  },
  {
    id: 18,
    question: "What is function overriding in C++?",
    options: ["Defining multiple functions with the same name but different parameter lists within the same scope", "Defining a function with the same name and parameter list in a derived class that redefines the base class function", "Calling a function of the base class from a derived class", "Defining a function that can accept a variable number of arguments"],
    answer: "Defining a function with the same name and parameter list in a derived class that redefines the base class function"
  },
  {
    id: 19,
    question: "What is a virtual function in C++?",
    options: ["A function that is called only once", "A member function that can be redefined in a derived class, allowing for runtime polymorphism", "A static member function", "A friend function"],
    answer: "A member function that can be redefined in a derived class, allowing for runtime polymorphism"
  },
  {
    id: 20,
    question: "Which keyword is used to declare a virtual function in C++?",
    options: ["static", "override", "virtual", "dynamic"],
    answer: "virtual"
  },
  {
    id: 21,
    question: "What is an abstract class in C++?",
    options: ["A class that cannot be instantiated", "A class that contains only static members", "A class that is automatically garbage collected", "A class that is used to define interfaces"],
    answer: "A class that cannot be instantiated"
  },
  {
    id: 22,
    question: "How do you declare an abstract class in C++?",
    options: ["By using the `abstract` keyword", "By including at least one pure virtual function", "By making the constructor private", "Abstract classes are not supported in C++"],
    answer: "By including at least one pure virtual function"
  },
  {
    id: 23,
    question: "What is a pure virtual function in C++?",
    options: ["A virtual function that has a default implementation", "A virtual function that must be overridden by a derived class and is declared with `= 0`", "A static virtual function", "A virtual function that cannot be overridden"],
    answer: "A virtual function that must be overridden by a derived class and is declared with `= 0`"
  },
  {
    id: 24,
    question: "What is a friend function in C++?",
    options: ["A member function of another class", "A non-member function that has access to the private and protected members of a class", "A virtual function", "A static function"],
    answer: "A non-member function that has access to the private and protected members of a class"
  },
  {
    id: 25,
    question: "What is an operator overload in C++?",
    options: ["Redefining the behavior of operators for user-defined types", "Using operators with their default behavior", "Defining new operators", "Changing the precedence of operators"],
    answer: "Redefining the behavior of operators for user-defined types"
  },
  {
    id: 26,
    question: "What is a template in C++?",
    options: ["A predefined class", "A blueprint for creating generic classes or functions", "A way to define constants", "A mechanism for exception handling"],
    answer: "A blueprint for creating generic classes or functions"
  },
  {
    id: 27,
    question: "What is the Standard Template Library (STL) in C++?",
    options: ["A library for graphical user interfaces", "A set of template classes and functions that provide common programming data structures and algorithms", "A library for network programming", "A tool for debugging C++ code"],
    answer: "A set of template classes and functions that provide common programming data structures and algorithms"
  },
  {
    id: 28,
    question: "Which of the following is NOT a container in the C++ STL?",
    options: ["std::vector", "std::map", "std::string", "std::algorithm"],
    answer: "std::algorithm"
  },
  {
    id: 29,
    question: "Which of the following is an algorithm in the C++ STL?",
    options: ["std::vector", "std::map", "std::sort", "std::iterator"],
    answer: "std::sort"
  },
  {
    id: 30,
    question: "What is an iterator in C++ STL?",
    options: ["A way to iterate through loops", "An object that can traverse through the elements of a container", "A pointer to a memory location", "A type of algorithm"],
    answer: "An object that can traverse through the elements of a container"
  },
  {
    id: 31,
    question: "What is exception handling in C++?",
    options: ["A way to prevent errors in the code", "A mechanism to handle runtime errors gracefully", "A technique for optimizing code performance", "A method for memory management"],
    answer: "A mechanism to handle runtime errors gracefully"
  },
  {
    id: 32,
    question: "Which keywords are used for exception handling in C++?",
    options: ["try, catch, finally", "try, except, finally", "try, catch, throw", "begin, rescue, ensure"],
    answer: "try, catch, throw"
  },
  {
    id: 33,
    question: "What is a namespace in C++?",
    options: ["A region of code", "A declarative region that provides a scope to the identifiers inside it, preventing name collisions", "A way to define classes", "A mechanism for memory management"],
    answer: "A declarative region that provides a scope to the identifiers inside it, preventing name collisions"
  },
  {
    id: 34,
    question: "Which keyword is used to declare a namespace in C++?",
    options: ["scope", "region", "namespace", "package"],
    answer: "namespace"
  },
  {
    id: 35,
    question: "What is dynamic memory allocation in C++?",
    options: ["Allocating memory at compile time", "Allocating memory during program execution using `new` and `delete`", "Memory that is automatically managed by the system", "Memory used for storing global variables"],
    answer: "Allocating memory during program execution using `new` and `delete`"
  },
  {
    id: 36,
    question: "Which keyword is used to allocate dynamic memory for a single object in C++?",
    options: ["malloc", "alloc", "new", "allocate"],
    answer: "new"
  },
  {
    id: 37,
    question: "Which keyword is used to deallocate dynamic memory allocated for a single object in C++?",
    options: ["free", "dealloc", "delete", "release"],
    answer: "delete"
  },
  {
    id: 38,
    question: "Which keyword is used to allocate dynamic memory for an array of objects in C++?",
    options: ["new[]", "new array", "malloc[]", "allocArray"],
    answer: "new[]"
  },
  {
    id: 39,
    question: "Which keyword is used to deallocate dynamic memory allocated for an array of objects in C++?",
    options: ["delete[]", "delete array", "free[]", "releaseArray"],
    answer: "delete[]"
  },
  {
    id: 40,
    question: "What is a pointer in C++?",
    options: ["A variable that stores a memory address", "A data type that can hold any type of value", "A function that returns an address", "A keyword used for loops"],
    answer: "A variable that stores a memory address"
  },
  {
    id: 41,
    question: "What is a reference in C++?",
    options: ["An alias for an existing variable", "A pointer that cannot be null", "A way to pass arguments by value", "A keyword used for inheritance"],
    answer: "An alias for an existing variable"
  },
  {
    id: 42,
    question: "What is the difference between a pointer and a reference in C++?",
    options: ["Pointers can be reassigned and can be null, references cannot be reassigned and must be initialized", "References can be reassigned and can be null, pointers cannot be reassigned and must be initialized", "They are interchangeable", "Pointers are safer to use than references"],
    answer: "Pointers can be reassigned and can be null, references cannot be reassigned and must be initialized"
  },
  {
    id: 43,
    question: "What are inline functions in C++?",
    options: ["Functions that are defined inside a class", "Functions whose code is expanded at the point of call, potentially improving performance", "Recursive functions", "Virtual functions"],
    answer: "Functions whose code is expanded at the point of call, potentially improving performance"
  },
  {
    id: 44,
    question: "What are static member variables in C++?",
    options: ["Variables that cannot be changed", "Variables that belong to the class itself rather than to any specific object", "Variables with local scope", "Variables that are stored in registers"],
    answer: "Variables that belong to the class itself rather than to any specific object"
  },
  {
    id: 45,
    question: "What are static member functions in C++?",
    options: ["Functions that can only access static member variables", "Functions that belong to the class itself and can be called without creating an object of the class", "Virtual functions", "Friend functions"],
    answer: "Functions that belong to the class itself and can be called without creating an object of the class"
  },
  {
    id: 46,
    question: "What is function prototyping in C++?",
    options: ["The body of a function", "The declaration of a function, specifying its return type, name, and parameters", "A call to a function", "A comment describing the function"],
    answer: "The declaration of a function, specifying its return type, name, and parameters"
  },
  {
    id: 47,
    question: "What is the preprocessor in C++?",
    options: ["A part of the compiler that translates C++ code to assembly language", "A tool for linking object files", "A program that processes the source code before compilation, handling directives like `#include` and `#define`", "A debugger"],
    answer: "A program that processes the source code before compilation, handling directives like `#include` and `#define`"
  },
  {
    id: 48,
    question: "What are header files in C++?",
    options: ["Files containing only function definitions", "Files containing declarations of classes, functions, variables, and other entities", "The main source code files", "Compiled object files"],
    answer: "Files containing declarations of classes, functions, variables, and other entities"
  },
  {
    id: 49,
    question: "What are namespaces used for in C++?",
    options: ["To organize code into logical groups and prevent name collisions", "To improve code performance", "To handle exceptions", "To define templates"],
    answer: "To organize code into logical groups and prevent name collisions"
  },
  {
    id: 50,
    question: "What is RTTI (Run-Time Type Identification) in C++?",
    options: ["A feature that allows you to determine the type of an object at runtime", "A technique for optimizing code execution speed", "A mechanism for handling exceptions related to type mismatches", "A way to define generic classes"],
    answer: "A feature that allows you to determine the type of an object at runtime"
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

router.get('/cpp/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;


