const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/bash', (req, res) => {
  res.json([
    {
    title: "Lesson 1: Introduction to Bash",
    content: "<p><strong>Bash (Bourne Again SHell)</strong> is a command-line interpreter (shell) for the GNU operating system. It's also widely available for other Unix-like operating systems, including macOS. Bash allows you to interact with your computer by typing commands, and it's a powerful tool for automation through scripting.</p>"
  },
  {
    title: "Lesson 2: Basic Commands",
    content: `<p>Here are some fundamental Bash commands:</p>
    <ul>
      <li><code>pwd</code>: Print working directory (shows your current location).</li>
      <li><code>ls</code>: List directory contents (shows files and folders in the current directory).</li>
      <li><code>cd</code>: Change directory (navigates to a different directory).</li>
      <li><code>mkdir</code>: Make directory (creates a new folder).</li>
      <li><code>rmdir</code>: Remove directory (deletes an empty folder).</li>
      <li><code>rm</code>: Remove files or directories (use with caution!).</li>
      <li><code>cp</code>: Copy files or directories.</li>
      <li><code>mv</code>: Move or rename files or directories.</li>
      <li><code>cat</code>: Concatenate and display files.</li>
      <li><code>less</code> or <code>more</code>: View file contents page by page.</li>
    </ul><pre><code class="language-bash">
pwd
ls -lha
cd Documents
mkdir new_folder
rmdir empty_folder
rm file.txt
cp source.txt destination.txt
mv old_name.txt new_name.txt
cat my_file.txt
less large_file.txt
</code></pre>`
  },
  {
    title: "Lesson 3: Navigating the File System",
    content: `<p>Understanding how to move around your file system is crucial:</p>
    <ul>
      <li><code>/</code>: The root directory.</li>
      <li><code>.</code>: The current directory.</li>
      <li><code>..</code>: The parent directory.</li>
      <li>Absolute paths start from the root (e.g., <code>/home/user/Documents</code>).</li>
      <li>Relative paths are relative to your current location (e.g., <code>./my_file.txt</code> or <code>../another_folder</code>).</li>
    </ul><pre><code class="language-bash">
cd /home/user/Downloads
cd ..        # Go up one level
cd ./scripts # Go into the 'scripts' folder in the current directory
</code></pre>`
  },
  {
    title: "Lesson 4: Working with Files and Directories",
    content: `<p>More on file and directory manipulation:</p>
    <ul>
      <li><code>touch filename</code>: Creates an empty file or updates the timestamp of an existing one.</li>
      <li><code>cp -r sourcedir destinationdir</code>: Copies a directory and its contents recursively.</li>
      <li><code>mv oldpath newpath</code>: Moves or renames. If <code>newpath</code> is a directory, <code>oldpath</code> is moved into it.</li>
      <li><code>rm -r directory</code>: Removes a directory and its contents recursively (be very careful!).</li>
      <li><code>mkdir -p path/to/new/directory</code>: Creates parent directories if they don't exist.</li>
    </ul><pre><code class="language-bash">
touch new_file.txt
cp -r source_folder backup_folder
mv file.txt Documents/
mkdir -p data/images/thumbnails
</code></pre>`
  },
  {
    title: "Lesson 5: Input and Output Redirection",
    content: `<p>Bash allows you to redirect the standard input, standard output, and standard error streams:</p>
    <ul>
      <li><code>></code>: Redirect standard output to a file (overwrites the file).</li>
      <li><code>>></code>: Redirect standard output to a file (appends to the file).</li>
      <li><code><</code>: Redirect standard input from a file.</li>
      <li><code>2></code>: Redirect standard error to a file (overwrites).</li>
      <li><code>2>></code>: Redirect standard error to a file (appends).</li>
      <li><code>&></code> or <code>>&</code> (Bash 4+): Redirect both standard output and standard error to a file.</li>
    </ul><pre><code class="language-bash">
ls -l > file_list.txt      # Save the output of ls to a file
cat input.txt < another_file.txt # Use content of another_file as input to cat
./my_script.sh 2> errors.log # Save errors from the script to a file
./another_script.sh &> output.log # Save all output (including errors)
</code></pre>`
  },
  {
    title: "Lesson 6: Pipes (|)",
    content: `<p>The pipe operator (<code>|</code>) allows you to send the output of one command as the input to another command.</p><pre><code class="language-bash">
ls -l | grep ".txt"       # List files and then filter for those ending in .txt
cat logfile.log | less    # View a long log file page by page
who | sort | uniq         # List users, sort them, and remove duplicates
</code></pre>`
  },
  {
    title: "Lesson 7: Variables",
    content: `<p>You can define and use variables in Bash to store values:</p>
    <ul>
      <li>Variable names are case-sensitive.</li>
      <li>No spaces around the <code>=</code> sign when assigning values.</li>
      <li>Use <code>$</code> to access the value of a variable (e.g., <code>$MY_VAR</code> or <code>${MY_VAR}</code>).</li>
    </ul><pre><code class="language-bash">
MY_NAME="John Doe"
AGE=30
echo "My name is $MY_NAME and I am ${AGE} years old."
</code></pre>`
  },
  {
    title: "Lesson 8: Environment Variables",
    content: `<p>Environment variables are dynamic named values that can affect the way running processes will work on a computer. Some common environment variables include:</p>
    <ul>
      <li><code>HOME</code>: Your home directory.</li>
      <li><code>PATH</code>: A colon-separated list of directories where the system looks for executable files.</li>
      <li><code>USER</code>: Your username.</li>
      <li><code>PWD</code>: The current working directory (same as <code>pwd</code> command).</li>
      <li><code>SHELL</code>: The path to your default shell.</li>
    </ul><pre><code class="language-bash">
echo "Your home directory is: $HOME"
echo "Your PATH is: $PATH"
echo "Your username is: $USER"
</code></pre>`
  },
  {
    title: "Lesson 9: Shell Scripts - Basic Structure",
    content: `<p>A Bash script is a file containing a sequence of commands. Typically, it starts with a shebang line (<code>#!/bin/bash</code>) to specify the interpreter.</p><pre><code class="language-bash">
#!/bin/bash

echo "This is a simple script."
DATE=$(date)
echo "Current date and time: $DATE"
</code></pre><p>Make the script executable using <code>chmod +x script_name.sh</code>.</p>`
  },
  {
    title: "Lesson 10: Shell Scripts - Variables in Scripts",
    content: `<p>You can use variables within your Bash scripts:</p><pre><code class="language-bash">
#!/bin/bash

USERNAME=$1  # Access the first command-line argument
GREETING="Hello"

echo "$GREETING, $USERNAME!"
</code></pre><p>Run the script with an argument: <code>./my_script.sh Alice</code>.</p>`
  },
  {
    title: "Lesson 11: Shell Scripts - Input and Output in Scripts",
    content: `<p>Scripts can take input and produce output:</p><pre><code class="language-bash">
#!/bin/bash

read -p "Enter your name: " name
echo "Your name is: $name"
</code></pre><p>You can also redirect input and output when running scripts.</p>`
  },
  {
    title: "Lesson 12: Shell Scripts - Conditional Statements (if)",
    content: `<p>The <code>if</code> statement allows you to execute code based on conditions:</p><pre><code class="language-bash">
#!/bin/bash

AGE=20

if [ $AGE -ge 18 ]; then
  echo "You are an adult."
fi

if [ $AGE -lt 18 ]; then
  echo "You are a minor."
else
  echo "You are an adult."
fi
</code></pre><p>Use <code>-eq</code> (equal), <code>-ne</code> (not equal), <code>-gt</code> (greater than), <code>-lt</code> (less than), <code>-ge</code> (greater than or equal to), <code>-le</code> (less than or equal to) for numeric comparisons. For string comparisons, use <code>==</code>, <code>!=</code>.</p>`
  },
  {
    title: "Lesson 13: Shell Scripts - Conditional Statements (elif, else)",
    content: `<p>You can use <code>elif</code> (else if) and <code>else</code> to handle multiple conditions:</p><pre><code class="language-bash">
#!/bin/bash

SCORE=75

if [ $SCORE -ge 90 ]; then
  echo "Grade A"
elif [ $SCORE -ge 80 ]; then
  echo "Grade B"
elif [ $SCORE -ge 70 ]; then
  echo "Grade C"
else
  echo "Grade D or lower"
fi
</code></pre>`
  },
  {
    title: "Lesson 14: Shell Scripts - Loops (for)",
    content: `<p>The <code>for</code> loop allows you to iterate over a sequence of items:</p><pre><code class="language-bash">
#!/bin/bash

for fruit in apple banana cherry; do
  echo "I like $fruit"
done

for i in $(seq 1 5); do
  echo "Number: $i"
done
</code></pre>`
  },
  {
    title: "Lesson 15: Shell Scripts - Loops (while)",
    content: `<p>The <code>while</code> loop executes a block of code as long as a condition is true:</p><pre><code class="language-bash">
#!/bin/bash

COUNT=0
while [ $COUNT -lt 3 ]; do
  echo "Count is: $COUNT"
  COUNT=$((COUNT + 1))
done
</code></pre>`
  },
  {
    title: "Lesson 16: Shell Scripts - Loops (until)",
    content: `<p>The <code>until</code> loop executes a block of code as long as a condition is false (it stops when the condition becomes true):</p><pre><code class="language-bash">
#!/bin/bash

RETRY=1
MAX_RETRIES=3

until [ $RETRY -gt $MAX_RETRIES ]; do
  echo "Attempting connection ($RETRY)..."
  # Simulate a command that might fail
  sleep 2
  RETRY=$((RETRY + 1))
done

echo "Max retries reached."
</code></pre>`
  },
  {
    title: "Lesson 17: Shell Scripts - Functions",
    content: `<p>You can define functions in your Bash scripts to organize code and make it reusable:</p><pre><code class="language-bash">
#!/bin/bash

greet() {
  echo "Hello, $1!"
}

greet "World"
greet "Bash User"
</code></pre><p><code>$1</code> refers to the first argument passed to the function.</p>`
  },
  {
    title: "Lesson 18: Shell Scripts - Function Return Values",
    content: `<p>Bash functions can return an exit status (0 for success, non-zero for failure) using the <code>return</code> command. To return a string or other data, you typically use command substitution.</p><pre><code class="language-bash">
#!/bin/bash

check_file() {
  if [ -f "$1" ]; then
    return 0  # Success (file exists)
  else
    return 1  # Failure (file doesn't exist)
  fi
}

if check_file "my_document.txt"; then
  echo "File exists."
else
  echo "File not found."
fi

get_username() {
  echo "$USER"
}

USERNAME=$(get_username)
echo "Current user: $USERNAME"
</code></pre>`
  },
  {
    title: "Lesson 19: Command Substitution (`$()` or ``)",
    content: `<p>Command substitution allows you to embed the output of a command within another command.</p><pre><code class="language-bash">
CURRENT_DATE=$(date +%Y-%m-%d)
echo "Today's date is: $CURRENT_DATE"

FILE_COUNT=$(ls | wc -l)
echo "There are $FILE_COUNT items in the current directory."
</code></pre><p>Using <code>$()</code> is the preferred modern syntax.</p>`
  },
  {
    title: "Lesson 20: Quoting",
    content: `<p>Quoting is essential for handling spaces and special characters in Bash:</p>
    <ul>
      <li><strong>Single quotes (<code>'</code>)</strong>: Preserve the literal value of each character within the quotes. No variable substitution or command substitution is performed.</li>
      <li><strong>Double quotes (<code>"</code>)</strong>: Allow variable substitution (<code>$VARIABLE</code>) and command substitution (<code>$(command)</code> or ``command``).</li>
      <li><strong>Backslash (<code>\</code>)</strong>: Escape a single character, removing its special meaning.</li>
    </ul><pre><code class="language-bash">
MY_VAR="Hello World"
echo '$MY_VAR'       # Output: $MY_VAR
echo "$MY_VAR"       # Output: Hello World
echo "The date is $(date)" # Command substitution
echo "Special char: \$"   # Escaping $
</code></pre>`
  },
  {
    title: "Lesson 21: Regular Expressions (grep)",
    content: `<p><code>grep</code> is a powerful command-line utility for searching plain-text data sets for lines matching a regular expression.</p><pre><code class="language-bash">
grep "pattern" file.txt         # Find lines containing "pattern"
grep -i "Pattern" file.txt      # Case-insensitive search
grep -r "function" directory/  # Recursive search for "function" in a directory
grep "^#" config.file          # Find lines starting with "#"
grep "log$" log_files/*.log    # Find lines ending with "log" in log files
</code></pre>`
  },
  {
    title: "Lesson 22: Text Manipulation (sed)",
    content: `<p><code>sed</code> (stream editor) is a powerful utility for filtering and transforming text.</p><pre><code class="language-bash">
sed 's/old/new/' file.txt         # Replace the first occurrence of "old" with "new" on each line
sed 's/old/new/g' file.txt        # Replace all occurrences
sed '/pattern/d' file.txt         # Delete lines containing "pattern"
sed '1,5d' file.txt              # Delete lines 1 to 5
sed -i 's/error/warning/g' file.txt # Edit the file in-place
</code></pre>`
  },
  {
    title: "Lesson 23: Text Manipulation (awk)",
    content: `<p><code>awk</code> is another powerful text processing tool, particularly useful for working with structured data (like tables).</p><pre><code class="language-bash">
awk '{print $1}' data.txt          # Print the first field of each line (fields are space-separated by default)
awk -F',' '{print $2}' data.csv    # Print the second field of comma-separated data
awk '$3 > 10 {print $1, $3}' data.txt # Print first and third fields for lines where the third field is greater than 10
awk 'BEGIN {sum=0} {sum += $1} END {print "Sum:", sum}' numbers.txt # Calculate the sum of numbers in a file
</code></pre>`
  },
  {
    title: "Lesson 24: Job Control",
    content: `<p>Bash allows you to manage running processes (jobs):</p>
    <ul>
      <li><code>&</code>: Run a command in the background (e.g., <code>./long_process &</code>).</li>
      <li><code>jobs</code>: List the currently running background jobs.</li>
      <li><code>fg %n</code>: Bring background job <code>%n</code> to the foreground.</li>
      <li><code>bg %n</code>: Continue a stopped background job <code>%n</code> in the background.</li>
      <li><code>Ctrl+Z</code>: Suspend (stop) the current foreground job.</li>
    </ul><pre><code class="language-bash">
./my_backup_script.sh &
jobs
fg %1
</code></pre>`
  }
  ]);
});

module.exports = router;

