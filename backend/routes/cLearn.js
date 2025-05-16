const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/c', (req, res) => {
  res.json([
     {
    title: "Lesson 1: Introduction to C",
    content: "<p><strong>C</strong> is a powerful and widely-used general-purpose programming language. It was originally developed by Dennis Ritchie at Bell Labs in the early 1970s. C is known for its efficiency, flexibility, and its ability to directly interact with the computer's hardware. It forms the basis for many other programming languages and operating systems.</p>"
  },
  {
    title: "Lesson 2: Basic Structure of a C Program",
    content: `<p>A basic C program typically includes the following components:</p>
    <ul>
      <li><strong>Preprocessing Directives</strong>: Start with <code>#</code> (e.g., <code>#include &lt;stdio.h&gt;</code>).</li>
      <li><strong>Function Declarations</strong>: Declare functions before they are used.</li>
      <li><strong>The <code>main</code> Function</strong>: The entry point of the program execution (<code>int main()</code>).</li>
      <li><strong>Variable Declarations</strong>: Declare variables with their data types.</li>
      <li><strong>Statements</strong>: Instructions that perform actions.</li>
      <li><strong>Return Statement</strong>: Used to exit a function (e.g., <code>return 0;</code> in <code>main</code>).</li>
    </ul><pre><code class="language-c">
#include &lt;stdio.h&gt; // Standard input/output library

int main() {
    printf("Hello, C!\n"); // Print to the console
    return 0;             // Indicate successful execution
}
</code></pre>`
  },
  {
    title: "Lesson 3: Variables and Data Types",
    content: `<p>In C, you need to declare the data type of a variable before using it. Common primitive data types include:</p>
    <ul>
      <li><code>int</code>: Integer (whole numbers).</li>
      <li><code>float</code>: Single-precision floating-point number (decimal numbers).</li>
      <li><code>double</code>: Double-precision floating-point number (more precise decimal numbers).</li>
      <li><code>char</code>: Single character.</li>
      <li><code>_Bool</code> (or <code>bool</code> after including <code>stdbool.h</code>): Boolean (true/false values).</li>
    </ul><pre><code class="language-c">
int age = 30;
float price = 19.99f; // 'f' suffix indicates a float literal
double pi = 3.14159;
char initial = 'A';
_Bool isTrue = 1;    // 1 represents true, 0 represents false
#include &lt;stdbool.h&gt;
bool is_valid = true;
</code></pre>`
  },
  {
    title: "Lesson 4: Operators",
    content: `<p>C supports various types of operators:</p>
    <ul>
      <li><strong>Arithmetic Operators</strong>: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulo), <code>++</code> (increment), <code>--</code> (decrement).</li>
      <li><strong>Assignment Operators</strong>: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>.</li>
      <li><strong>Comparison Operators</strong>: <code>==</code> (equal to), <code>!=</code> (not equal to), <code>></code> (greater than), <code><</code> (less than), <code>>=</code> (greater than or equal to), <code><=</code> (less than or equal to).</li>
      <li><strong>Logical Operators</strong>: <code>&&</code> (logical AND), <code>||</code> (logical OR), <code>!</code> (logical NOT).</li>
      <li><strong>Bitwise Operators</strong>: <code>&</code> (bitwise AND), <code>|</code> (bitwise OR), <code>^</code> (bitwise XOR), <code>~</code> (bitwise NOT), <code>&lt;&lt;</code> (left shift), <code>&gt;&gt;</code> (right shift).</li>
    </ul><pre><code class="language-c">
int x = 10;
int y = 5;
printf("%d\n", x + y);   // 15
printf("%d\n", x > y);   // 1 (true)
printf("%d\n", x % y);   // 0
x++;                     // x becomes 11
</code></pre>`
  },
  {
    title: "Lesson 5: Control Flow - if Statements",
    content: `<p>The <code>if</code> statement executes a block of code if a condition is true. You can also use <code>else</code> and <code>else if</code> for alternative conditions.</p><pre><code class="language-c">
int temperature = 25;
if (temperature > 20) {
    printf("It's warm!\n");
} else if (temperature > 10) {
    printf("It's mild.\n");
} else {
    printf("It's cold.\n");
}
</code></pre>`
  },
  {
    title: "Lesson 6: Control Flow - switch Statement",
    content: `<p>The <code>switch</code> statement selects one of several code blocks to execute based on the value of an expression.</p><pre><code class="language-c">
char grade = 'B';
switch (grade) {
    case 'A':
        printf("Excellent!\n");
        break;
    case 'B':
        printf("Good.\n");
        break;
    case 'C':
        printf("Average.\n");
        break;
    default:
        printf("Needs improvement.\n");
}
</code></pre><p>The <code>break</code> statement is used to exit the <code>switch</code> block.</p>`
  },
  {
    title: "Lesson 7: Control Flow - for Loops",
    content: `<p>The <code>for</code> loop executes a block of code a specific number of times.</p><pre><code class="language-c">
for (int i = 0; i < 5; i++) {
    printf("Iteration: %d\n", i);
}
</code></pre><p>The loop has three parts: initialization, condition, and increment/decrement.</p>`
  },
  {
    title: "Lesson 8: Control Flow - while Loops",
    content: `<p>The <code>while</code> loop executes a block of code as long as a condition is true.</p><pre><code class="language-c">
int count = 0;
while (count < 3) {
    printf("Count is: %d\n", count);
    count++;
}
</code></pre><p>Ensure the condition eventually becomes false to avoid infinite loops.</p>`
  },
  {
    title: "Lesson 9: Control Flow - do-while Loops",
    content: `<p>The <code>do-while</code> loop is similar to <code>while</code>, but it executes the code block at least once before checking the condition.</p><pre><code class="language-c">
int i = 0;
do {
    printf("Value of i: %d\n", i);
    i++;
} while (i < 2);
</code></pre>`
  },
  {
    title: "Lesson 10: Functions - Declaration and Definition",
    content: `<p>Functions are blocks of reusable code that perform a specific task. You need to declare a function before you can define it or call it (though definition can serve as declaration if it appears before the first call).</p><pre><code class="language-c">
// Function declaration
int add(int a, int b);

int main() {
    int sum = add(5, 3); // Function call
    printf("The sum is: %d\n", sum);
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
    content: `<p>Functions can return a value using the <code>return</code> statement. The return type of the function must match the type of the returned value.</p><pre><code class="language-c">
double multiply(double x, double y) {
    return x * y;
}

int main() {
    double product = multiply(2.5, 4.0);
    printf("The product is: %f\n", product);
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 12: Functions - void Functions",
    content: `<p>Functions that do not return any value are declared with the <code>void</code> return type.</p><pre><code class="language-c">
void greet(char name[]) {
    printf("Hello, %s!\n", name);
}

int main() {
    greet("Alice");
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 13: Arrays - Declaration and Initialization",
    content: `<p>Arrays in C are fixed-size ordered collections of elements of the same data type.</p><pre><code class="language-c">
int numbers[5];         // Declare an integer array of size 5
numbers[0] = 10;
numbers[1] = 20;
// ...

int primes[] = {2, 3, 5, 7, 11}; // Declare and initialize
char message[] = "Hello";       // Character array (string)
</code></pre><p>Array indices start from 0.</p>`
  },
  {
    title: "Lesson 14: Arrays - Accessing Elements",
    content: `<p>You can access individual elements of an array using their index within square brackets <code>[]</code>.</p><pre><code class="language-c">
int data[] = {100, 200, 300};
printf("First element: %d\n", data[0]); // Output: First element: 100
printf("Second element: %d\n", data[1]);// Output: Second element: 200
</code></pre><p>Be careful not to access elements outside the array bounds, as this can lead to undefined behavior.</p>`
  },
  {
    title: "Lesson 15: Strings in C",
    content: `<p>Strings in C are typically represented as arrays of characters terminated by a null character (<code>\0</code>).</p><pre><code class="language-c">
char name[] = "Charlie";
printf("Name: %s\n", name);

// You can also initialize character by character:
char city[10] = {'L', 'o', 'n', 'd', 'o', 'n', '\0'};
printf("City: %s\n", city);
</code></pre><p>The <code>stdio.h</code> library provides functions like <code>printf</code> for outputting strings, and the <code>string.h</code> library provides functions for string manipulation.</p>`
  },
  {
    title: "Lesson 16: Pointers - Introduction",
    content: `<p>A pointer is a variable that stores the memory address of another variable. The <code>&</code> operator is used to get the address of a variable, and the <code>*</code> operator is used to dereference a pointer (access the value at the address it points to).</p><pre><code class="language-c">
int num = 25;
int *ptr; // Declare an integer pointer

ptr = &num; // Assign the address of 'num' to 'ptr'

printf("Value of num: %d\n", num);     // 25
printf("Address of num: %p\n", &num);  // Memory address of num
printf("Value of ptr: %p\n", ptr);     // Address stored in ptr (same as &num)
printf("Value pointed to by ptr: %d\n", *ptr); // 25 (dereferencing ptr)
</code></pre>`
  },
  {
    title: "Lesson 17: Pointers - Pointer Arithmetic",
    content: `<p>You can perform arithmetic operations on pointers (addition, subtraction, increment, decrement). Pointer arithmetic is scaled by the size of the data type the pointer points to.</p><pre><code class="language-c">
int arr[] = {10, 20, 30};
int *p = arr; // 'p' points to the first element of 'arr'

printf("Value at p: %d\n", *p);   // 10
p++;                             // Move 'p' to the next integer in memory
printf("Value at p: %d\n", *p);   // 20
printf("Value at arr[1]: %d\n", arr[1]); // Also 20
</code></pre>`
  },
  {
    title: "Lesson 18: Pointers and Arrays",
    content: `<p>There is a close relationship between pointers and arrays in C. The name of an array often decays to a pointer to its first element.</p><pre><code class="language-c">
int data[] = {100, 200, 300};
int *ptr = data; // 'ptr' now points to data[0]

printf("Value at ptr: %d\n", *ptr);       // 100
printf("Value at data[0]: %d\n", data[0]); // 100

printf("Value at (ptr + 1): %d\n", *(ptr + 1)); // 200 (equivalent to data[1])
</code></pre>`
  },
  {
    title: "Lesson 19: Strings and Pointers",
    content: `<p>Strings in C can also be manipulated using pointers.</p><pre><code class="language-c">
char message[] = "Hello";
char *str_ptr = message; // 'str_ptr' points to the first character of 'message'

printf("First char: %c\n", *str_ptr); // 'H'
str_ptr++;
printf("Second char: %c\n", *str_ptr); // 'e'

// You can also iterate through the string using a pointer:
char *s = message;
while (*s != '\0') {
    printf("%c ", *s);
    s++;
}
printf("\n");
</code></pre>`
  },
  {
    title: "Lesson 20: Structures - Introduction",
    content: `<p>A structure is a user-defined data type that allows you to group together variables of different data types under a single name.</p><pre><code class="language-c">
struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1;
    p1.x = 10;
    p1.y = 20;

    printf("Point: (%d, %d)\n", p1.x, p1.y);
    return 0;
}
</code></pre><p>You access members of a structure using the dot operator (<code>.</code>).</p>`
  },
  {
    title: "Lesson 21: Structures - Using Pointers",
    content: `<p>You can also use pointers to structures. To access members of a structure through a pointer, you use the arrow operator (<code>-></code>).</p><pre><code class="language-c">
struct Book {
    char title[50];
    char author[50];
    float price;
};

int main() {
    struct Book book1 = {"The Great Gatsby", "F. Scott Fitzgerald", 10.99f};
    struct Book *book_ptr = &book1;

    printf("Title: %s\n", book_ptr->title);
    printf("Author: %s\n", book_ptr->author);
    printf("Price: %.2f\n", book_ptr->price);
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 22: Unions",
    content: `<p>A union is a special data type that allows you to store different data types in the same memory location. The size of a union is determined by the size of its largest member. Only one member of a union can hold a value at any given time.</p><pre><code class="language-c">
union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data data;
    data.i = 10;
    printf("data.i: %d\n", data.i); // Output: 10

    data.f = 22.5f;
    printf("data.f: %.1f\n", data.f); // Output: 22.5
    // At this point, the integer value is overwritten

    strcpy(data.str, "Hello");
    printf("data.str: %s\n", data.str); // Output: Hello
    // Now, the float value is also likely overwritten
    return 0;
}
</code></pre>`
  },
  {
    title: "Lesson 23: Enums (Enumerations)",
    content: `<p>Enumerations (enums) are user-defined data types that consist of named integer constants. They make code more readable and maintainable by providing meaningful names for a set of values.</p><pre><code class="language-c">
enum Day {
    MON, TUE, WED, THU, FRI, SAT, SUN}`
}
  ]);
});

module.exports = router;





