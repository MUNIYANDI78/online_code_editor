const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/java', (req, res) => {
  res.json([
    {
    title: "Lesson 1: What is Java?",
    content: "<p><strong>Java</strong> is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers <strong>write once, run anywhere (WORA)</strong>, meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>"
  },
  {
    title: "Lesson 2: Basic Structure of a Java Program",
    content: `<p>A basic Java program consists of classes and methods. The <code>main</code> method is the entry point of execution.</p><pre><code class="language-java">
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
</code></pre><p>- <code>public class Main</code>: Declares a class named <code>Main</code>.<br>- <code>public static void main(String[] args)</code>: The main method where program execution begins.<br>- <code>System.out.println()</code>: Prints output to the console.</p>`
  },
  {
    title: "Lesson 3: Variables and Data Types",
    content: `<p>In Java, you need to declare the data type of a variable before using it. Primitive data types include:</p>
    <ul>
      <li><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code> (for whole numbers)</li>
      <li><code>float</code>, <code>double</code> (for decimal numbers)</li>
      <li><code>boolean</code> (for true/false values)</li>
      <li><code>char</code> (for single characters)</li>
    </ul><pre><code class="language-java">
int age = 30;
double price = 19.99;
String name = "Alice";
boolean isTrue = true;
char initial = 'A';
</code></pre>`
  },
  {
    title: "Lesson 4: Operators",
    content: `<p>Java supports various types of operators:</p>
    <ul>
      <li><strong>Arithmetic Operators</strong>: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>++</code>, <code>--</code></li>
      <li><strong>Assignment Operators</strong>: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code></li>
      <li><strong>Comparison Operators</strong>: <code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>
      <li><strong>Logical Operators</strong>: <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)</li>
    </ul><pre><code class="language-java">
int x = 10;
int y = 5;
System.out.println(x + y); // 15
System.out.println(x > y);  // true
System.out.println(x % y);  // 0
</code></pre>`
  },
  {
    title: "Lesson 5: Control Flow - if Statements",
    content: `<p>The <code>if</code> statement executes a block of code if a condition is true. You can also use <code>else</code> and <code>else if</code> for alternative conditions.</p><pre><code class="language-java">
int temperature = 25;
if (temperature > 20) {
    System.out.println("It's warm!");
} else if (temperature > 10) {
    System.out.println("It's mild.");
} else {
    System.out.println("It's cold.");
}
</code></pre>`
  },
  {
    title: "Lesson 6: Control Flow - switch Statement",
    content: `<p>The <code>switch</code> statement selects one of several code blocks to execute based on the value of a variable.</p><pre><code class="language-java">
String day = "Monday";
switch (day) {
    case "Monday":
        System.out.println("Start of the week");
        break;
    case "Friday":
        System.out.println("Almost weekend!");
        break;
    default:
        System.out.println("Just another day");
}
</code></pre><p>The <code>break</code> statement is used to exit the <code>switch</code> block.</p>`
  },
  {
    title: "Lesson 7: Loops - for Loop",
    content: `<p>The <code>for</code> loop executes a block of code a specific number of times.</p><pre><code class="language-java">
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}
</code></pre><p>The loop has three parts: initialization, condition, and increment/decrement.</p>`
  },
  {
    title: "Lesson 8: Loops - while Loop",
    content: `<p>The <code>while</code> loop executes a block of code as long as a condition is true.</p><pre><code class="language-java">
int count = 0;
while (count < 3) {
    System.out.println("Count is: " + count);
    count++;
}
</code></pre><p>Ensure the condition eventually becomes false to avoid infinite loops.</p>`
  },
  {
    title: "Lesson 9: Loops - do-while Loop",
    content: `<p>The <code>do-while</code> loop is similar to <code>while</code>, but it executes the code block at least once before checking the condition.</p><pre><code class="language-java">
int i = 0;
do {
    System.out.println("Value of i: " + i);
    i++;
} while (i < 2);
</code></pre>`
  },
  {
    title: "Lesson 10: Arrays",
    content: `<p>Arrays in Java are fixed-size ordered collections of elements of the same data type.</p><pre><code class="language-java">
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];
names[0] = "Bob";
names[1] = "Charlie";
names[2] = "David";

System.out.println(numbers[0]); // Accessing element at index 0
System.out.println(names.length); // Getting the length of the array
</code></pre>`
  },
  {
    title: "Lesson 11: Strings",
    content: `<p>Strings in Java are objects that represent sequences of characters. The <code>String</code> class provides many useful methods for string manipulation.</p><pre><code class="language-java">
String greeting = "Hello";
String name = "Java";
String message = greeting + ", " + name + "!"; // Concatenation

System.out.println(message.length());      // Length of the string
System.out.println(message.toUpperCase());   // Convert to uppercase
System.out.println(message.indexOf("Java")); // Find the index of a substring
</code></pre>`
  },
  {
    title: "Lesson 12: Methods",
    content: `<p>Methods are blocks of code that perform a specific task. They allow you to organize your code and make it reusable.</p><pre><code class="language-java">
public static int add(int a, int b) {
    return a + b;
}

public static void greet(String person) {
    System.out.println("Hello, " + person + "!");
}

public static void main(String[] args) {
    int sum = add(5, 3);
    System.out.println("The sum is: " + sum); // Output: The sum is: 8
    greet("Alice"); // Output: Hello, Alice!
}
</code></pre><p>Methods can have parameters and return values.</p>`
  },
  {
    title: "Lesson 13: Classes and Objects",
    content: `<p>Java is an object-oriented language. A <strong>class</strong> is a blueprint for creating objects. An <strong>object</strong> is an instance of a class.</p><pre><code class="language-java">
class Dog {
    String name;
    String breed;

    public Dog(String name, String breed) {
        this.name = name;
        this.breed = breed;
    }

    public void bark() {
        System.out.println("Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        System.out.println(myDog.name);  // Output: Buddy
        myDog.bark();                   // Output: Woof!
    }
}
</code></pre>`
  },
  {
    title: "Lesson 14: Constructors",
    content: `<p>A constructor is a special method that is called when an object of a class is created. It is used to initialize the object's state.</p><pre><code class="language-java">
class Rectangle {
    int width;
    int height;

    public Rectangle(int w, int h) {
        width = w;
        height = h;
    }

    public int calculateArea() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle(10, 5);
        System.out.println("Area: " + rect.calculateArea()); // Output: Area: 50
    }
}
</code></pre>`
  },
  {
    title: "Lesson 15: Access Modifiers",
    content: `<p>Access modifiers control the visibility (accessibility) of class members (variables and methods). Common access modifiers are:</p>
    <ul>
      <li><code>public</code>: Accessible from any class.</li>
      <li><code>private</code>: Accessible only within the same class.</li>
      <li><code>protected</code>: Accessible within the same package and by subclasses in other packages.</li>
      <li>(default/package-private): Accessible within the same package.</li>
    </ul>`
  },
  {
    title: "Lesson 16: Encapsulation",
    content: `<p>Encapsulation is the practice of hiding the internal implementation details of an object and exposing only what is necessary. It is often achieved using access modifiers (making fields <code>private</code> and providing <code>public</code> getter and setter methods).</p><pre><code class="language-java">
class Person {
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int newAge) {
        if (newAge >= 0) {
            age = newAge;
        }
    }
}
</code></pre>`
  },
  {
    title: "Lesson 17: Inheritance",
    content: `<p>Inheritance is a mechanism in which one class (subclass or derived class) inherits the properties and behaviors of another class (superclass or base class). It promotes code reuse.</p><pre><code class="language-java">
class Animal {
    String name;
    public void eat() {
        System.out.println("Animal is eating.");
    }
}

class Dog extends Animal {
    public void bark() {
        System.out.println("Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.name = "Buddy";
        myDog.eat();  // Inherited from Animal
        myDog.bark(); // Specific to Dog
    }
}
</code></pre>`
  },
  {
    title: "Lesson 18: Polymorphism",
    content: `<p>Polymorphism means "many forms." In Java, it allows objects of different classes to be treated as objects of a common superclass. This can be achieved through method overriding and method overloading.</p>`
  },
  {
    title: "Lesson 19: Method Overriding",
    content: `<p>Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass.</p><pre><code class="language-java">
class Animal {
    public void makeSound() {
        System.out.println("Generic animal sound.");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Animal myCat = new Cat();
        myAnimal.makeSound(); // Output: Generic animal sound.
        myCat.makeSound();    // Output: Meow!
    }
}
</code></pre><p>The <code>@Override</code> annotation is used to indicate that a method is being overridden.</p>`
  },
  {
    title: "Lesson 20: Method Overloading",
    content: `<p>Method overloading occurs when a class has multiple methods with the same name but different parameters (different number, types, or order of parameters).</p><pre><code class="language-java">
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3));       // Output: 5
        System.out.println(calc.add(2.5, 3.5));   // Output: 6.0
        System.out.println(calc.add(1, 2, 3));    // Output: 6
    }
}
</code></pre>`
  },
  {
    title: "Lesson 21: Abstract Classes and Methods",
    content: `<p>An <strong>abstract class</strong> cannot be instantiated. It can contain abstract methods (methods without a body) and non-abstract methods. Subclasses must implement the abstract methods.</p><pre><code class="language-java">
abstract class Shape {
    String color;
    public Shape(String color) {
        this.color = color;
    }
    public abstract double getArea(); // Abstract method
    public String getColor() {
        return color;
    }
}

class Circle extends Shape {
    double radius;
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
</code></pre>`
  },
  {
    title: "Lesson 22: Interfaces",
    content: `<p>An <strong>interface</strong> is a completely abstract class that contains only abstract methods (and constants). A class can implement multiple interfaces.</p><pre><code class="language-java">
interface Drawable {
    void draw();
}

interface Resizable {
    void resize(int width, int height);
}

class Rectangle implements Drawable, Resizable {
    // Implement draw() and resize() methods
}
</code></pre>`
  },
  {
    title: "Lesson 23: Packages",
    content: `<p>Packages are used to organize classes and interfaces into namespaces, providing better code management and preventing naming conflicts.</p><pre><code class="language-java">
// Declaration at the top of the file
package com.example.util;

public class MyUtilityClass {
    // ...
}
</code></pre><p>You can import classes from other packages using the <code>import</code> keyword.</p>`
  },
  {
    title: "Lesson 24: Exception Handling - try-catch",
    content: `<p>Exception handling is a mechanism to deal with runtime errors (exceptions) gracefully. The <code>try-catch</code> block is used to handle potential exceptions.</p><pre><code class="language-java">
try {
    int result = 10 / 0; // This will throw an ArithmeticException
    System.out.println("Result: " + result);
} catch (ArithmeticException e) {
    System.err.println("Error: Cannot divide by zero!");
}
</code></pre>`
  },
  {
    title: "Lesson 25: Exception Handling - finally",
    content: `<p>The <code>finally</code> block is used with <code>try-catch</code>. The code inside the <code>finally</code> block will always be executed, regardless of whether an exception occurred or was caught.</p><pre><code class="language-java">
try {
    // Some code that might throw an exception
} catch (Exception e) {
    // Handle the exception
} finally {
    // Code that will always be executed (e.g., closing resources)
}
</code></pre>`
  }
 
  ]);
});

module.exports = router;

