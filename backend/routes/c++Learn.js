const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/cpp', (req, res) => {
  res.json([
     {
    title: "Lesson 1: Introduction to C++",
    content: "<p><strong>C++</strong> is a powerful, versatile, and widely-used object-oriented programming language. It was developed by Bjarne Stroustrup starting in 1979 as an extension of the C language. C++ provides high-level and low-level language features, making it suitable for a wide range of applications, including system software, game development, embedded systems, and high-performance computing.</p>"
  },
  {
    title: "Lesson 2: Basic Structure of a C++ Program",
    content: `<p>A basic C++ program typically includes the following components:</p>
    <ul>
      <li><strong>Include Directives</strong>: Start with <code>#include</code> (e.g., <code>#include &lt;iostream&gt;</code>).</li>
      <li><strong>Namespace Declaration</strong>: Using <code>using namespace std;</code> to avoid prefixing standard library elements with <code>std::</code>.</li>
      <li><strong>Function Declarations</strong>: Declare functions before they are used.</li>
      <li><strong>The <code>main</code> Function</strong>: The entry point of the program execution (<code>int main()</code>).</li>
      <li><strong>Variable Declarations</strong>: Declare variables with their data types.</li>
      <li><strong>Statements</strong>: Instructions that perform actions.</li>
      <li><strong>Return Statement</strong>: Used to exit a function (e.g., <code>return 0;</code> in <code>main</code>).</li>
    </ul><pre><code class="language-cpp">
#include &lt;iostream&gt; // Input/output stream library

using namespace std;

int main() {
    cout << "Hello, C++!" << endl; // Print to the console
    return 0;                      // Indicate successful execution
}
</code></pre>`
  },
  {
    title: "Lesson 3: Variables and Data Types",
    content: `<p>C++ supports various primitive data types:</p>
    <ul>
      <li><strong>Integer Types</strong>: <code>int</code>, <code>short</code>, <code>long</code>, <code>long long</code>.</li>
      <li><strong>Floating-Point Types</strong>: <code>float</code>, <code>double</code>, <code>long double</code>.</li>
      <li><strong>Character Type</strong>: <code>char</code>.</li>
      <li><strong>Boolean Type</strong>: <code>bool</code> (<code>true</code> or <code>false</code>).</li>
      <li><strong>Void Type</strong>: <code>void</code> (represents the absence of a value).</li>
    </ul><pre><code class="language-cpp">
int age = 30;
float price = 19.99f;
double pi = 3.14159;
char initial = 'A';
bool isTrue = true;
</code></pre>`
  },
  {
    title: "Lesson 4: Operators",
    content: `<p>C++ supports a wide range of operators:</p>
    <ul>
      <li><strong>Arithmetic Operators</strong>: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulo), <code>++</code> (increment), <code>--</code> (decrement).</li>
      <li><strong>Assignment Operators</strong>: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>.</li>
      <li><strong>Comparison Operators</strong>: <code>==</code> (equal to), <code>!=</code> (not equal to), <code>></code> (greater than), <code><</code> (less than), <code>>=</code> (greater than or equal to), <code><=</code> (less than or equal to).</li>
      <li><strong>Logical Operators</strong>: <code>&&</code> (logical AND), <code>||</code> (logical OR), <code>!</code> (logical NOT).</li>
      <li><strong>Bitwise Operators</strong>: <code>&</code> (bitwise AND), <code>|</code> (bitwise OR), <code>^</code> (bitwise XOR), <code>~</code> (bitwise NOT), <code>&lt;&lt;</code> (left shift), <code>&gt;&gt;</code> (right shift).</li>
      <li><strong>Ternary Operator</strong>: <code>condition ? value_if_true : value_if_false</code>.</li>
    </ul><pre><code class="language-cpp">
int x = 10;
int y = 5;
cout << x + y << endl;   // 15
cout << (x > y) << endl; // 1 (true)
cout << x % y << endl;   // 0
x++;                     // x becomes 11
int max = (x > y) ? x : y; // Ternary operator
</code></pre>`
  },
  {
    title: "Lesson 5: Control Flow - if Statements",
    content: `<p>The <code>if</code> statement executes a block of code if a condition is true. You can also use <code>else</code> and <code>else if</code> for alternative conditions.</p><pre><code class="language-cpp">
int temperature = 25;
if (temperature > 20) {
    cout << "It's warm!" << endl;
} else if (temperature > 10) {
    cout << "It's mild." << endl;
} else {
    cout << "It's cold." << endl;
}
</code></pre>`
  },
  {
    title: "Lesson 6: Control Flow - switch Statement",
    content: `<p>The <code>switch</code> statement selects one of several code blocks to execute based on the value of an expression.</p><pre><code class="language-cpp">
char grade = 'B';
switch (grade) {
    case 'A':
        cout << "Excellent!" << endl;
        break;
    case 'B':
        cout << "Good." << endl;
        break;
    case 'C':
        cout << "Average." << endl;
        break;
    default:
        cout << "Needs improvement." << endl;
}
</code></pre><p>The <code>break</code> statement is used to exit the <code>switch</code> block.</p>`
  },
  {
    title: "Lesson 7: Control Flow - for Loops",
    content: `<p>The <code>for</code> loop executes a block of code a specific number of times.</p><pre><code class="language-cpp">
for (int i = 0; i < 5; i++) {
    cout << "Iteration: " << i << endl;
}
</code></pre><p>The loop has three parts: initialization, condition, and increment/decrement.</p>`
  },
  {
    title: "Lesson 8: Control Flow - while Loops",
    content: `<p>The <code>while</code> loop executes a block of code as long as a condition is true.</p><pre><code class="language-cpp">
int count = 0;
while (count < 3) {
    cout << "Count is: " << count << endl;
    count++;
}
</code></pre><p>Ensure the condition eventually becomes false to avoid infinite loops.</p>`
  },
  {
    title: "Lesson 9: Control Flow - do-while Loops",
    content: `<p>The <code>do-while</code> loop is similar to <code>while</code>, but it executes the code block at least once before checking the condition.</p><pre><code class="language-cpp">
int i = 0;
do {
    cout << "Value of i: " << i << endl;
    i++;
} while (i < 2);
</code></pre>`
  },
  {
    title: "Lesson 10: Functions - Declaration and Definition",
    content: `<p>Functions are blocks of reusable code that perform a specific task. You need to declare a function before you can define it or call it (though definition can serve as declaration if it appears before the first call).</p><pre><code class="language-cpp">
// Function declaration
int add(int a, int b);

int main() {
    int sum = add(5, 3); // Function call
    cout << "The sum is: " << sum << endl;
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}
</code></pre><p>Functions have a return type, a name, and a list of parameters.</p>`
  },
  {
    title: "Lesson 11: Functions - Return Values",
    content: `<p>Functions can return a value using the <code>return</code> statement. The return type of the function must match the type of the returned value.</p><pre><code class="language-cpp">
double multiply(double x, double y) {
    return x * y;
}

int main() {
    double product = multiply(2.5, 4.0);
    cout << "The product is: " << product << endl;
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 12: Functions - void Functions",
    content: `<p>Functions that do not return any value are declared with the <code>void</code> return type.</p><pre><code class="language-cpp">
#include &lt;string&gt;

void greet(std::string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet("Alice");
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 13: Arrays - Declaration and Initialization",
    content: `<p>Arrays in C++ are fixed-size ordered collections of elements of the same data type.</p><pre><code class="language-cpp">
int numbers[5];         // Declare an integer array of size 5
numbers[0] = 10;
numbers[1] = 20;
// ...

int primes[] = {2, 3, 5, 7, 11}; // Declare and initialize
char message[] = "Hello";       // Character array (string)
std::string greeting = "Hi";    // C++ string object
</code></pre><p>Array indices start from 0.</p>`
  },
  {
    title: "Lesson 14: Arrays - Accessing Elements",
    content: `<p>You can access individual elements of an array using their index within square brackets <code>[]</code>.</p><pre><code class="language-cpp">
int data[] = {100, 200, 300};
cout << "First element: " << data[0] << endl; // Output: First element: 100
cout << "Second element: " << data[1] << endl;// Output: Second element: 200
</code></pre><p>Be careful not to access elements outside the array bounds, as this can lead to undefined behavior.</p>`
  },
  {
    title: "Lesson 15: Strings in C++",
    content: `<p>C++ provides the <code>std::string</code> class in the <code>&lt;string&gt;</code> library for more flexible and safer string manipulation compared to C-style character arrays.</p><pre><code class="language-cpp">
#include &lt;string&gt;
#include &lt;iostream&gt;

int main() {
    std::string name = "Charlie";
    std::cout << "Name: " << name << std::endl;

    std::string city = "London";
    std::cout << "City length: " << city.length() << std::endl;
    std::cout << "First char of city: " << city[0] << std::endl;
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 16: Pointers - Introduction",
    content: `<p>A pointer is a variable that stores the memory address of another variable. The <code>&</code> operator is used to get the address of a variable, and the <code>*</code> operator is used to dereference a pointer (access the value at the address it points to).</p><pre><code class="language-cpp">
#include &lt;iostream&gt;

int main() {
    int num = 25;
    int *ptr; // Declare an integer pointer

    ptr = &num; // Assign the address of 'num' to 'ptr'

    std::cout << "Value of num: " << num << std::endl;     // 25
    std::cout << "Address of num: " << &num << std::endl;  // Memory address of num
    std::cout << "Value of ptr: " << ptr << std::endl;     // Address stored in ptr (same as &num)
    std::cout << "Value pointed to by ptr: " << *ptr << std::endl; // 25 (dereferencing ptr)
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 17: Pointers - Pointer Arithmetic",
    content: `<p>You can perform arithmetic operations on pointers (addition, subtraction, increment, decrement). Pointer arithmetic is scaled by the size of the data type the pointer points to.</p><pre><code class="language-cpp">
#include &lt;iostream&gt;

int main() {
    int arr[] = {10, 20, 30};
    int *p = arr; // 'p' points to the first element of 'arr'

    std::cout << "Value at p: " << *p << std::endl;   // 10
    p++;                             // Move 'p' to the next integer in memory
    std::cout << "Value at p: " << *p << std::endl;   // 20
    std::cout << "Value at arr[1]: " << arr[1] << std::endl; // Also 20
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 18: Pointers and Arrays",
    content: `<p>There is a close relationship between pointers and arrays in C++. The name of an array often decays to a pointer to its first element.</p><pre><code class="language-cpp">
#include &lt;iostream&gt;

int main() {
    int data[] = {100, 200, 300};
    int *ptr = data; // 'ptr' now points to data[0]

    std::cout << "Value at ptr: " << *ptr << std::endl;       // 100
    std::cout << "Value at data[0]: " << data[0] << std::endl; // 100

    std::cout << "Value at (ptr + 1): " << *(ptr + 1) << std::endl; // 200 (equivalent to data[1])
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 19: Strings and Pointers (C-style)",
    content: `<p>C-style strings (character arrays) can be manipulated using pointers in C++.</p><pre><code class="language-cpp">
#include &lt;iostream&gt;

int main() {
    char message[] = "Hello";
    char *str_ptr = message; // 'str_ptr' points to the first character of 'message'

    std::cout << "First char: " << *str_ptr << std::endl; // 'H'
    str_ptr++;
    std::cout << "Second char: " << *str_ptr << std::endl; // 'e'

    // Iterate through the string using a pointer:
    char *s = message;
    while (*s != '\\0') {
        std::cout << *s << " ";
        s++;
    }
    std::cout << std::endl;
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 20: Structures (struct)",
    content: `<p>A <code>struct</code> is a user-defined data type that allows you to group together variables of different data types under a single name. In C++, <code>struct</code>s can also contain member functions (methods).</p><pre><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;string&gt;

struct Point {
    int x;
    int y;
};

int main() {
    Point p1;
    p1.x = 10;
    p1.y = 20;

    std::cout << "Point: (" << p1.x << ", " << p1.y << ")" << std::endl;
    return 0;
}
</code></pre><p>You access members of a <code>struct</code> using the dot operator (<code>.</code>).</p>`
  }
  
  ]);
});

module.exports = router;



