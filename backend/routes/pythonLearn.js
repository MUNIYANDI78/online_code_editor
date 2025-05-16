const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/python', (req, res) => {
  res.json([
    {
    title: "Lesson 1: What is Python?",
    content: "<p><strong>Python</strong> is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with its notable use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (procedural), object-oriented, and functional programming.</p>"
  },
  {
    title: "Lesson 2: Basic Syntax",
    content: `<p>Python's syntax is designed to be readable and concise. Key aspects include:</p>
    <ul>
      <li><strong>Indentation</strong>: Used to define code blocks (instead of curly braces). Consistent indentation is crucial.</li>
      <li><strong>Statements</strong>: Typically end at the end of a line.</li>
      <li><strong>Variables</strong>: Dynamically typed, so you don't need to declare the type explicitly.</li>
      <li><strong>Comments</strong>: Use <code>#</code> for single-line comments. Multi-line strings (using triple quotes <code>'''</code> or <code>"""</code>) are often used for multi-line comments or docstrings.</li>
    </ul><pre><code class="language-python">
message = "Hello, Python!"  # Variable assignment
print(message)              # Output to the console

'''
This is a
multi-line comment.
'''
</code></pre>`
  },
  {
    title: "Lesson 3: Variables and Data Types",
    content: `<p>Python has several built-in data types:</p>
    <ul>
      <li><strong>Numbers</strong>: <code>int</code> (integers), <code>float</code> (floating-point numbers), <code>complex</code> (complex numbers).</li>
      <li><strong>String</strong>: Represents sequences of characters.</li>
      <li><strong>Boolean</strong>: Represents logical values (<code>True</code> or <code>False</code>).</li>
      <li><strong>List</strong>: Ordered and mutable sequence of items.</li>
      <li><strong>Tuple</strong>: Ordered and immutable sequence of items.</li>
      <li><strong>Set</strong>: Unordered collection of unique items.</li>
      <li><strong>Dictionary</strong>: Unordered collection of key-value pairs.</li>
    </ul><pre><code class="language-python">
age = 30
price = 19.99
name = "Alice"
is_true = True
my_list = [1, 2, "three"]
my_tuple = (4, 5, "six")
my_set = {7, 8, 9}
my_dict = {"name": "Bob", "age": 25}
</code></pre>`
  },
  {
    title: "Lesson 4: Operators",
    content: `<p>Python supports various types of operators:</p>
    <ul>
      <li><strong>Arithmetic Operators</strong>: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulo), <code>**</code> (exponentiation), <code>//</code> (floor division).</li>
      <li><strong>Assignment Operators</strong>: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>, <code>**=</code>, <code>//=</code>.</li>
      <li><strong>Comparison Operators</strong>: <code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>.</li>
      <li><strong>Logical Operators</strong>: <code>and</code>, <code>or</code>, <code>not</code>.</li>
      <li><strong>Identity Operators</strong>: <code>is</code>, <code>is not</code> (check if two variables refer to the same object).</li>
      <li><strong>Membership Operators</strong>: <code>in</code>, <code>not in</code> (check if a value is present in a sequence).</li>
    </ul><pre><code class="language-python">
x = 10
y = 5
print(x + y)   # 15
print(x > y)    # True
print(x % y)    # 0
print(x ** 2)   # 100
print("b" in "abc") # True
</code></pre>`
  },
  {
    title: "Lesson 5: Control Flow - if Statements",
    content: `<p>The <code>if</code> statement executes a block of code if a condition is true. You can use <code>elif</code> (else if) and <code>else</code> for alternative conditions.</p><pre><code class="language-python">
temperature = 25
if temperature > 20:
    print("It's warm!")
elif temperature > 10:
    print("It's mild.")
else:
    print("It's cold.")
</code></pre>`
  },
  {
    title: "Lesson 6: Control Flow - for Loops",
    content: `<p>The <code>for</code> loop in Python is used to iterate over a sequence (like a list, tuple, string) or other iterable objects.</p><pre><code class="language-python">
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

for i in range(5):  # Iterating a specific number of times
    print(i)
</code></pre>`
  },
  {
    title: "Lesson 7: Control Flow - while Loops",
    content: `<p>The <code>while</code> loop executes a block of code as long as a condition is true.</p><pre><code class="language-python">
count = 0
while count < 3:
    print("Count is:", count)
    count += 1
</code></pre><p>Be careful to ensure the condition eventually becomes false to avoid infinite loops.</p>`
  },
  {
    title: "Lesson 8: Functions - Definition",
    content: `<p>Functions are blocks of reusable code that perform a specific task.</p><pre><code class="language-python">
def greet(name):
    print(f"Hello, {name}!")

greet("Bob")  # Calling the function
</code></pre><p>Functions are defined using the <code>def</code> keyword and can take arguments (parameters).</p>`
  },
  {
    title: "Lesson 9: Functions - Return Values",
    content: `<p>Functions can return values using the <code>return</code> statement.</p><pre><code class="language-python">
def add(a, b):
    return a + b

sum_result = add(5, 3)
print("The sum is:", sum_result)  # Output: The sum is: 8
</code></pre><p>The <code>return</code> statement ends the function execution and optionally sends a value back to the caller.</p>`
  },
  {
    title: "Lesson 10: Functions - Default Arguments",
    content: `<p>You can provide default values for function parameters. If a value is not provided when calling the function, the default value is used.</p><pre><code class="language-python">
def power(base, exponent=2):
    return base ** exponent

print(power(5))       # Output: 25 (exponent is 2 by default)
print(power(5, 3))    # Output: 125 (exponent is 3)
</code></pre>`
  },
  {
    title: "Lesson 11: Functions - Keyword Arguments",
    content: `<p>When calling a function, you can use keyword arguments to pass values by parameter name, which allows you to pass arguments out of order and makes the code more readable.</p><pre><code class="language-python">
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type} named {pet_name}.")

describe_pet(pet_name="Lucy", animal_type="dog")
</code></pre>`
  },
  {
    title: "Lesson 12: Functions - Variable Arguments (*args)",
    content: `<p>The <code>*args</code> syntax allows a function to accept a variable number of positional arguments. These arguments are passed as a tuple.</p><pre><code class="language-python">
def print_all(*args):
    for arg in args:
        print(arg)

print_all("hello", 1, True)
</code></pre>`
  },
  {
    title: "Lesson 13: Functions - Keyword Variable Arguments (**kwargs)",
    content: `<p>The <code>**kwargs</code> syntax allows a function to accept a variable number of keyword arguments. These arguments are passed as a dictionary.</p><pre><code class="language-python">
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="John", age=30, city="New York")
</code></pre>`
  },
  {
    title: "Lesson 14: Scope - Global and Local",
    content: `<p><strong>Global scope</strong> refers to variables defined outside of any function. They can be accessed from anywhere in the code.<br><strong>Local scope</strong> refers to variables defined inside a function. They are only accessible within that function.</p><pre><code class="language-python">
global_var = "I am global"

def my_function():
    local_var = "I am local"
    print(global_var)  # Can access global_var
    print(local_var)   # Can access local_var

my_function()
print(global_var)  # Can access global_var
# print(local_var) # Error: local_var is not defined here
</code></pre>`
  },
  {
    title: "Lesson 15: Scope - The 'global' Keyword",
    content: `<p>To modify a global variable from within a function, you need to use the <code>global</code> keyword.</p><pre><code class="language-python">
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)  # Output: 1
</code></pre>`
  },
  {
    title: "Lesson 16: Data Structures - Lists",
    content: `<p>Lists are ordered, mutable sequences. They can contain items of different data types.</p><pre><code class="language-python">
my_list = [1, "hello", 3.14]
print(my_list[0])    # Accessing elements by index
my_list.append("world") # Adding an element to the end
my_list[1] = "hi"     # Modifying an element
print(my_list)
</code></pre>`
  },
  {
    title: "Lesson 17: Data Structures - Tuples",
    content: `<p>Tuples are ordered, immutable sequences. Once created, their elements cannot be changed.</p><pre><code class="language-python">
my_tuple = (1, "hello", 3.14)
print(my_tuple[0])    # Accessing elements
# my_tuple[1] = "hi"  # Error: 'tuple' object does not support item assignment
</code></pre>`
  },
  {
    title: "Lesson 18: Data Structures - Sets",
    content: `<p>Sets are unordered collections of unique elements. They do not allow duplicate values.</p><pre><code class="language-python">
my_set = {1, 2, 2, 3}  # Duplicates are automatically removed
print(my_set)          # Output: {1, 2, 3}
my_set.add(4)
my_set.remove(2)
</code></pre>`
  },
  {
    title: "Lesson 19: Data Structures - Dictionaries",
    content: `<p>Dictionaries are unordered collections of key-value pairs. Keys must be unique and immutable.</p><pre><code class="language-python">
my_dict = {"name": "Alice", "age": 30}
print(my_dict["name"])  # Accessing value by key
my_dict["city"] = "New York" # Adding a new key-value pair
del my_dict["age"]        # Deleting a key-value pair
print(my_dict)
</code></pre>`
  },
  {
    title: "Lesson 20: Modules and Packages",
    content: `<p><strong>Modules</strong> are Python files containing Python definitions and statements. <strong>Packages</strong> are collections of modules (and can contain sub-packages).</p><pre><code class="language-python">
import math  # Importing the math module
print(math.sqrt(16))

from datetime import date  # Importing a specific name from a module
today = date.today()
print(today)
</code></pre><p>You can also create your own modules and packages to organize your code.</p>`
  },
  {
    title: "Lesson 21: File I/O - Reading Files",
    content: `<p>Python provides built-in functions for reading from files.</p><pre><code class="language-python">
try:
    with open("my_file.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File not found.")
</code></pre><p>The <code>with open(...)</code> statement ensures the file is properly closed even if errors occur.</p>`
  },
  {
    title: "Lesson 22: File I/O - Writing to Files",
    content: `<p>You can also write data to files in Python.</p><pre><code class="language-python">
with open("output.txt", "w") as file:  # 'w' mode overwrites the file
    file.write("Hello, file!\n")
    file.write("This is another line.\n")

with open("append.txt", "a") as file: # 'a' mode appends to the file
    file.write("Appending some text.\n")
</code></pre>`
  },
  {
    title: "Lesson 23: Exception Handling - try-except",
    content: `<p>The <code>try-except</code> block is used to handle potential runtime errors (exceptions) gracefully.</p><pre><code class="language-python">
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
except TypeError as e:
    print(f"Type error occurred: {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
</code></pre><p>You can catch specific exception types or a more general <code>Exception</code>.</p>`
  },
  {
    title: "Lesson 24: Exception Handling - else and finally",
    content: `<p>The <code>else</code> block in a <code>try-except</code> statement executes if no exceptions were raised in the <code>try</code> block. The <code>finally</code> block always executes, regardless of whether an exception occurred or not.</p><pre><code class="language-python">
try:
    num = int(input("Enter a number: "))
except ValueError:
    print("Invalid input. Please enter a number.")
else:
    print("You entered:", num)
finally:
    print("Execution complete.")
</code></pre>`
  },
  {
    title: "Lesson 25: Object-Oriented Programming (OOP) - Classes",
    content: `<p>Classes are blueprints for creating objects. They define attributes (data) and methods (behavior).</p><pre><code class="language-python">
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        print("Woof!")

my_dog = Dog("Buddy", "Golden Retriever")
print(my_dog.name)
my_dog.bark()
</code></pre><p>The <code>__init__</code> method is the constructor.</p>`
  },
  {
    title: "Lesson 26: OOP - Objects and Instances",
    content: `<p>An object is a specific instance of a class. You create objects by calling the class like a function.</p><pre><code class="language-python">
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

car1 = Car("Toyota", "Camry")
car2 = Car("Honda", "Civic")

print(car1.make)
print(car2.model)
</code></pre>`
  },
  {
    title: "Lesson 27: OOP - Inheritance",
    content: `<p>Inheritance allows a new class (subclass or derived class) to inherit attributes and methods from an existing class (superclass or base class), promoting code reuse.</p><pre><code class="language-python">
class Animal:
    def speak(self):
        print("Generic animal sound")

class Cat(Animal):
    def speak(self):
        print("Meow!")

my_cat = Cat()
my_cat.speak()  # Output: Meow!
</code></pre>`
  }
  ]);
});

module.exports = router;

