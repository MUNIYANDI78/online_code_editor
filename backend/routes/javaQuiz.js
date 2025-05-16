const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "What is the primary purpose of the Java Virtual Machine (JVM)?",
    options: ["To compile Java code into machine code", "To execute Java bytecode", "To manage computer hardware resources", "To provide a platform-specific environment for Java applications"],
    answer: "To execute Java bytecode"
  },
  {
    id: 2,
    question: "Which of the following is NOT a primitive data type in Java?",
    options: ["int", "boolean", "String", "double"],
    answer: "String"
  },
  {
    id: 3,
    question: "What is the keyword used to define a class in Java?",
    options: ["struct", "object", "class", "type"],
    answer: "class"
  },
  {
    id: 4,
    question: "What is the entry point of a Java application?",
    options: ["start() method", "main() method", "run() method", "init() method"],
    answer: "main() method"
  },
  {
    id: 5,
    question: "Which access modifier makes a member visible only within its own class?",
    options: ["public", "private", "protected", "default"],
    answer: "private"
  },
  {
    id: 6,
    question: "What is the purpose of the `static` keyword in Java?",
    options: ["To make a method abstract", "To define a constant variable", "To associate a member with the class itself rather than with a specific instance", "To prevent a class from being subclassed"],
    answer: "To associate a member with the class itself rather than with a specific instance"
  },
  {
    id: 7,
    question: "What is inheritance in Java?",
    options: ["The ability of a class to have multiple constructors", "The mechanism by which a class can acquire the properties and methods of another class", "A way to define interfaces", "A technique for handling exceptions"],
    answer: "The mechanism by which a class can acquire the properties and methods of another class"
  },
  {
    id: 8,
    question: "Which keyword is used to implement inheritance in Java?",
    options: ["implements", "extends", "inherits", "subclass"],
    answer: "extends"
  },
  {
    id: 9,
    question: "What is polymorphism in Java?",
    options: ["The ability of an object to take on many forms", "The mechanism of hiding the implementation details", "A way to define multiple classes in a single file", "The process of converting one data type to another"],
    answer: "The ability of an object to take on many forms"
  },
  {
    id: 10,
    question: "What is method overloading in Java?",
    options: ["Defining multiple methods with the same name but different parameter lists within the same class", "Defining a method with the same name in a subclass that overrides the superclass method", "Calling a method of the superclass from a subclass", "Defining a method that can accept a variable number of arguments"],
    answer: "Defining multiple methods with the same name but different parameter lists within the same class"
  },
  {
    id: 11,
    question: "What is method overriding in Java?",
    options: ["Defining multiple methods with the same name but different parameter lists within the same class", "Defining a method with the same name and parameter list in a subclass that redefines the superclass method", "Calling a method of the superclass from a subclass", "Defining a method that can accept a variable number of arguments"],
    answer: "Defining a method with the same name and parameter list in a subclass that redefines the superclass method"
  },
  {
    id: 12,
    question: "What is an abstract class in Java?",
    options: ["A class that cannot be instantiated", "A class that contains only static methods", "A class that is automatically garbage collected", "A class that is used to define interfaces"],
    answer: "A class that cannot be instantiated"
  },
  {
    id: 13,
    question: "Which keyword is used to declare an abstract class or method?",
    options: ["final", "static", "abstract", "interface"],
    answer: "abstract"
  },
  {
    id: 14,
    question: "What is an interface in Java?",
    options: ["A class that cannot be instantiated", "A blueprint of a class that specifies methods that a class must implement", "A class that contains only static methods", "A mechanism for handling exceptions"],
    answer: "A blueprint of a class that specifies methods that a class must implement"
  },
  {
    id: 15,
    question: "Which keyword is used to implement an interface in Java?",
    options: ["extends", "inherits", "implements", "subclass"],
    answer: "implements"
  },
  {
    id: 16,
    question: "What is a package in Java?",
    options: ["A way to compress Java files", "A mechanism to group related classes and interfaces", "A tool for compiling Java code", "A feature for managing memory"],
    answer: "A mechanism to group related classes and interfaces"
  },
  {
    id: 17,
    question: "Which keyword is used to import a package or a class in Java?",
    options: ["include", "using", "import", "package"],
    answer: "import"
  },
  {
    id: 18,
    question: "What is an exception in Java?",
    options: ["A syntax error in the code", "An event that occurs during the execution of a program that disrupts the normal flow of instructions", "A warning message from the compiler", "A type of loop"],
    answer: "An event that occurs during the execution of a program that disrupts the normal flow of instructions"
  },
  {
    id: 19,
    question: "Which block is used to handle exceptions in Java?",
    options: ["if-else block", "for loop", "try-catch block", "while loop"],
    answer: "try-catch block"
  },
  {
    id: 20,
    question: "Which block is always executed, regardless of whether an exception is thrown or caught?",
    options: ["try block", "catch block", "finally block", "else block"],
    answer: "finally block"
  },
  {
    id: 21,
    question: "What is multithreading in Java?",
    options: ["Executing multiple programs concurrently", "Executing multiple parts of the same program concurrently", "Running Java on multiple operating systems", "Compiling Java code into multiple bytecode files"],
    answer: "Executing multiple parts of the same program concurrently"
  },
  {
    id: 22,
    question: "Which class is used to create threads in Java?",
    options: ["Runnable", "Thread", "Task", "Process"],
    answer: "Thread"
  },
  {
    id: 23,
    question: "What is the purpose of the `run()` method in a `Thread` class?",
    options: ["To start the execution of the thread", "To define the code that will be executed by the thread", "To pause the execution of the thread", "To terminate the thread"],
    answer: "To define the code that will be executed by the thread"
  },
  {
    id: 24,
    question: "What is synchronization in Java?",
    options: ["A way to make code run faster", "A mechanism to control the access of multiple threads to shared resources", "A method for handling exceptions in multithreaded environments", "A technique for managing memory in concurrent programs"],
    answer: "A mechanism to control the access of multiple threads to shared resources"
  },
  {
    id: 25,
    question: "Which keyword is used to achieve synchronization in Java?",
    options: ["volatile", "transient", "synchronized", "strictfp"],
    answer: "synchronized"
  },
  {
    id: 26,
    question: "What is a deadlock in multithreading?",
    options: ["A situation where a thread is blocked indefinitely waiting for a resource that is held by another thread, which is also blocked indefinitely waiting for a resource held by the first thread", "A condition where multiple threads try to access the same resource simultaneously", "An error that occurs when a thread tries to access an invalid memory location", "A state where a thread finishes its execution"],
    answer: "A situation where a thread is blocked indefinitely waiting for a resource that is held by another thread, which is also blocked indefinitely waiting for a resource held by the first thread"
  },
  {
    id: 27,
    question: "What is the Java Collections Framework?",
    options: ["A set of interfaces and classes that provide a way to store and manipulate groups of objects", "A tool for compiling Java code", "A library for creating graphical user interfaces", "A framework for building web applications in Java"],
    answer: "A set of interfaces and classes that provide a way to store and manipulate groups of objects"
  },
  {
    id: 28,
    question: "Which of the following is an interface in the Java Collections Framework?",
    options: ["ArrayList", "HashMap", "Set", "Vector"],
    answer: "Set"
  },
  {
    id: 29,
    question: "Which of the following is a class that implements the `List` interface?",
    options: ["HashSet", "TreeMap", "ArrayList", "PriorityQueue"],
    answer: "ArrayList"
  },
  {
    id: 30,
    question: "Which of the following is a class that implements the `Map` interface?",
    options: ["LinkedList", "TreeSet", "HashMap", "Stack"],
    answer: "HashMap"
  },
  {
    id: 31,
    question: "What is garbage collection in Java?",
    options: ["A process of manually freeing up memory", "An automatic memory management process that reclaims memory occupied by objects that are no longer in use", "A technique for optimizing code execution speed", "A way to handle exceptions related to memory allocation"],
    answer: "An automatic memory management process that reclaims memory occupied by objects that are no longer in use"
  },
  {
    id: 32,
    question: "Can you manually trigger garbage collection in Java?",
    options: ["Yes, by calling the `gc()` method of the `System` class", "No, garbage collection is fully automatic and cannot be manually triggered", "Yes, by using a specific command-line argument when running the JVM", "Only in older versions of Java"],
    answer: "Yes, by calling the `gc()` method of the `System` class"
  },
  {
    id: 33,
    question: "What are Java Annotations?",
    options: ["Special comments in Java code", "Metadata about the code that can be used by the compiler or JVM", "Keywords used for exception handling", "A way to define interfaces"],
    answer: "Metadata about the code that can be used by the compiler or JVM"
  },
  {
    id: 34,
    question: "Which is a built-in annotation in Java?",
    options: ["@Override", "@Deprecated", "@SuppressWarnings", "All of the above"],
    answer: "All of the above"
  },
  {
    id: 35,
    question: "What is Java Generics?",
    options: ["A feature for creating reusable code that can work with different data types without losing type safety", "A way to define generic interfaces", "A mechanism for handling generic exceptions", "A set of predefined generic classes in the Java API"],
    answer: "A feature for creating reusable code that can work with different data types without losing type safety"
  },
  {
    id: 36,
    question: "What are lambda expressions in Java?",
    options: ["Anonymous inner classes", "A concise way to represent an anonymous function", "A feature for handling events", "A type of loop"],
    answer: "A concise way to represent an anonymous function"
  },
  {
    id: 37,
    question: "What is the purpose of the Java Stream API?",
    options: ["To handle input and output operations", "To provide a functional way to process collections of objects", "To manage threads", "To interact with databases"],
    answer: "To provide a functional way to process collections of objects"
  },
  {
    id: 38,
    question: "Which is an intermediate operation in a Java Stream?",
    options: ["forEach()", "collect()", "reduce()", "filter()"],
    answer: "filter()"
  },
  {
    id: 39,
    question: "Which is a terminal operation in a Java Stream?",
    options: ["map()", "sorted()", "distinct()", "collect()"],
    answer: "collect()"
  },
  {
    id: 40,
    question: "What is serialization in Java?",
    options: ["Converting Java objects into a stream of bytes for storage or transmission", "Converting primitive data types to their object wrappers", "A way to handle exceptions", "A mechanism for synchronizing threads"],
    answer: "Converting Java objects into a stream of bytes for storage or transmission"
  },
  {
    id: 41,
    question: "Which interface needs to be implemented for a class to be serializable?",
    options: ["Serializable", "Externalizable", "DataInput", "DataOutput"],
    answer: "Serializable"
  },
  {
    id: 42,
    question: "What is reflection in Java?",
    options: ["The ability of a Java program to examine and manipulate the runtime behavior of classes, interfaces, objects, and methods", "A way to optimize Java code", "A mechanism for handling runtime errors", "A feature for creating dynamic proxies"],
    answer: "The ability of a Java program to examine and manipulate the runtime behavior of classes, interfaces, objects, and methods"
  },
  {
    id: 43,
    question: "What is a constructor in Java?",
    options: ["A special method used to initialize objects of a class", "A method used to define the behavior of an object", "A block of code that is executed when the class is loaded", "A method used to destroy objects"],
    answer: "A special method used to initialize objects of a class"
  },
  {
    id: 44,
    question: "Can a constructor be overloaded in Java?",
    options: ["Yes", "No", "Only in abstract classes", "Only in final classes"],
    answer: "Yes"
  },
  {
    id: 45,
    question: "What is the purpose of the `super()` keyword in Java?",
    options: ["To refer to the current instance of the class", "To call a method of the superclass", "To define a static method", "To declare a constant variable"],
    answer: "To call a method of the superclass"
  },
  {
    id: 46,
    question: "What is the purpose of the `this()` keyword in Java?",
    options: ["To refer to the superclass instance", "To call another constructor of the same class", "To define an instance variable", "To declare an abstract method"],
    answer: "To call another constructor of the same class"
  },
  {
    id: 47,
    question: "What is the difference between `==` and `.equals()` method in Java when comparing objects?",
    options: ["`==` compares object references, `.equals()` compares the content of the objects", "`==` compares the content of the objects, `.equals()` compares object references", "They are interchangeable", "`.equals()` can only be used for primitive data types"],
    answer: "`==` compares object references, `.equals()` compares the content of the objects"
  },
  {
    id: 48,
    question: "What is the purpose of the `hashCode()` method in Java?",
    options: ["To generate a unique ID for an object", "To return a hash code value for the object, supporting hash-based collections", "To compare the content of two objects", "To encrypt the object's data"],
    answer: "To return a hash code value for the object, supporting hash-based collections"
  },
  {
    id: 49,
    question: "What is the difference between `final`, `finally`, and `finalize` in Java?",
    options: ["`final` is used for constants, `finally` for exception handling, `finalize` for garbage collection", "`final` is for exception handling, `finally` for constants, `finalize` for garbage collection", "They are synonyms", "They are all related to memory management"],
    answer: "`final` is used for constants, `finally` for exception handling, `finalize` for garbage collection"
  },
  {
    id: 50,
    question: "What is the diamond problem in the context of multiple inheritance, and how does Java address it?",
    options: ["A problem with garbage collection in complex inheritance hierarchies; Java uses reference counting.", "A naming conflict that can arise when a class inherits methods with the same signature from multiple superclasses; Java resolves it by allowing only single class inheritance and interfaces.", "An issue with thread synchronization in deeply nested inheritance structures; Java uses monitors.", "A performance bottleneck in applications with extensive use of inheritance; Java recommends composition over inheritance."],
    answer: "A naming conflict that can arise when a class inherits methods with the same signature from multiple superclasses; Java resolves it by allowing"
  }] 
  for (let i = 21; i <= 50; i++) {
  quiz.push({
    id: i,
    question: `Sample HTML Question ${i}`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A"
  });
}

router.get('/java/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;

