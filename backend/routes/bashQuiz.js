const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "What does 'Bash' stand for?",
    options: ["Bourne Again Shell", "Basic Shell", "Best All-purpose Shell", "Boolean and String Handler"],
    answer: "Bourne Again Shell"
  },
  {
    id: 2,
    question: "Which command is used to list files and directories in the current directory?",
    options: ["dir", "ls", "list", "files"],
    answer: "ls"
  },
  {
    id: 3,
    question: "Which command is used to navigate to a different directory?",
    options: ["goto", "cd", "move", "change"],
    answer: "cd"
  },
  {
    id: 4,
    question: "Which command is used to create a new directory?",
    options: ["mkdir", "createdir", "newdir", "make"],
    answer: "mkdir"
  },
  {
    id: 5,
    question: "Which command is used to remove a directory (if it's empty)?",
    options: ["rmdir", "deldir", "removedir", "rm -d"],
    answer: "rmdir"
  },
  {
    id: 6,
    question: "Which command is used to remove files and directories?",
    options: ["delete", "rm", "erase", "del"],
    answer: "rm"
  },
  {
    id: 7,
    question: "What option is commonly used with the `rm` command to recursively remove directories and their contents?",
    options: ["-f", "-r", "-v", "-i"],
    answer: "-r"
  },
  {
    id: 8,
    question: "Which command is used to copy files and directories?",
    options: ["copy", "cp", "duplicate", "clone"],
    answer: "cp"
  },
  {
    id: 9,
    question: "Which command is used to move or rename files and directories?",
    options: ["mv", "rename", "move", "rn"],
    answer: "mv"
  },
  {
    id: 10,
    question: "Which command is used to display the contents of a file?",
    options: ["show", "view", "cat", "display"],
    answer: "cat"
  },
  {
    id: 11,
    question: "Which command is used to display the first few lines of a file?",
    options: ["head", "top", "first", "start"],
    answer: "head"
  },
  {
    id: 12,
    question: "Which command is used to display the last few lines of a file?",
    options: ["tail", "bottom", "last", "end"],
    answer: "tail"
  },
  {
    id: 13,
    question: "Which command is used to search for a specific pattern within files?",
    options: ["find", "search", "grep", "locate"],
    answer: "grep"
  },
  {
    id: 14,
    question: "What does the pipe symbol (`|`) do in Bash?",
    options: ["It redirects the output of a command to a file", "It redirects the input of a command from a file", "It sends the output of one command as the input to another command", "It executes commands in the background"],
    answer: "It sends the output of one command as the input to another command"
  },
  {
    id: 15,
    question: "What does the redirection symbol `>` do in Bash?",
    options: ["It appends the output of a command to a file", "It redirects the input of a command from a file", "It sends the output of one command as the input to another command", "It overwrites a file with the output of a command"],
    answer: "It overwrites a file with the output of a command"
  },
  {
    id: 16,
    question: "What does the redirection symbol `>>` do in Bash?",
    options: ["It overwrites a file with the output of a command", "It redirects the input of a command from a file", "It sends the output of one command as the input to another command", "It appends the output of a command to a file"],
    answer: "It appends the output of a command to a file"
  },
  {
    id: 17,
    question: "What does the redirection symbol `<` do in Bash?",
    options: ["It appends the output of a command to a file", "It redirects the input of a command from a file", "It sends the output of one command as the input to another command", "It overwrites a file with the output of a command"],
    answer: "It redirects the input of a command from a file"
  },
  {
    id: 18,
    question: "Which command is used to find files based on various criteria (like name, size, type)?",
    options: ["search", "locate", "grep", "find"],
    answer: "find"
  },
  {
    id: 19,
    question: "Which command is used to display information about the current user?",
    options: ["whoami", "userinfo", "currentuser", "id"],
    answer: "whoami"
  },
  {
    id: 20,
    question: "Which command is used to change the permissions of a file or directory?",
    options: ["chmod", "chown", "chgrp", "perm"],
    answer: "chmod"
  },
  {
    id: 21,
    question: "Which command is used to change the owner of a file or directory?",
    options: ["chmod", "chown", "chgrp", "owner"],
    answer: "chown"
  },
  {
    id: 22,
    question: "Which command is used to change the group ownership of a file or directory?",
    options: ["chmod", "chown", "chgrp", "group"],
    answer: "chgrp"
  },
  {
    id: 23,
    question: "What are environment variables in Bash?",
    options: ["Variables that are only used within a specific script", "Variables that store information about the system and the user's session", "Variables that are used to define functions", "Variables that store the output of commands"],
    answer: "Variables that store information about the system and the user's session"
  },
  {
    id: 24,
    question: "Which command is used to display the value of an environment variable?",
    options: ["echo $VARIABLE", "printenv VARIABLE", "getvar VARIABLE", "showenv VARIABLE"],
    answer: "echo $VARIABLE"
  },
  {
    id: 25,
    question: "Which command is used to set an environment variable for the current session?",
    options: ["set VARIABLE=value", "export VARIABLE=value", "env VARIABLE=value", "let VARIABLE=value"],
    answer: "export VARIABLE=value"
  },
  {
    id: 26,
    question: "What are shell scripts in Bash?",
    options: ["Interactive commands entered directly into the shell", "Plain text files containing a sequence of Bash commands", "Compiled programs that run in the shell", "Configuration files for the Bash environment"],
    answer: "Plain text files containing a sequence of Bash commands"
  },
  {
    id: 27,
    question: "How do you make a Bash script executable?",
    options: ["Using the `run` command", "Using the `execute` command", "Using the `chmod +x` command", "Using the `sh` command"],
    answer: "Using the `chmod +x` command"
  },
  {
    id: 28,
    question: "How do you execute a Bash script?",
    options: ["./script.sh", "bash script.sh", "sh script.sh", "All of the above"],
    answer: "All of the above"
  },
  {
    id: 29,
    question: "What is a shebang (`#!/bin/bash`) at the beginning of a Bash script?",
    options: ["It's a comment", "It specifies the interpreter to be used to execute the script", "It defines environment variables for the script", "It indicates the script's license"],
    answer: "It specifies the interpreter to be used to execute the script"
  },
  {
    id: 30,
    question: "How do you define a variable in a Bash script?",
    options: ["variable = value", "variable: value", "set variable = value", "let variable = value"],
    answer: "variable=value"
  },
  {
    id: 31,
    question: "How do you access the value of a variable in a Bash script?",
    options: ["$variable", "${variable}", "%variable%", "variable"],
    answer: "${variable}"
  },
  {
    id: 32,
    question: "What are positional parameters in Bash scripts?",
    options: ["Variables that store the current directory", "Variables that store the arguments passed to the script", "Variables that store the exit status of the last command", "Variables that store environment settings"],
    answer: "Variables that store the arguments passed to the script"
  },
  {
    id: 33,
    question: "How do you access the first argument passed to a Bash script?",
    options: ["$0", "$1", "$*", "$#"],
    answer: "$1"
  },
  {
    id: 34,
    question: "How do you access all arguments passed to a Bash script?",
    options: ["$0", "$1", "$*", "$#"],
    answer: "$*"
  },
  {
    id: 35,
    question: "How do you get the number of arguments passed to a Bash script?",
    options: ["$0", "$1", "$*", "$#"],
    answer: "$#"
  },
  {
    id: 36,
    question: "What is command substitution in Bash?",
    options: ["Replacing a command with its exit status", "Replacing a command with its output", "Running multiple commands in parallel", "Defining aliases for commands"],
    answer: "Replacing a command with its output"
  },
  {
    id: 37,
    question: "What are the two common ways to perform command substitution in Bash?",
    options: ["`command` and $(command)", "<<command>> and [[command]]", "{command} and (command)", "<command> and >command>"],
    answer: "`command` and $(command)"
  },
  {
    id: 38,
    question: "How do you use `if` statements for conditional execution in Bash?",
    options: ["if [ condition ]; then commands; fi", "if ( condition ) { commands }", "IF condition THEN commands ENDIF", "if condition commands"],
    answer: "if [ condition ]; then commands; fi"
  },
  {
    id: 39,
    question: "How do you use `else if` (or `elif`) in Bash?",
    options: ["elseif [ condition ]; then", "else if ( condition ) {", "elif [ condition ]; then", "elseif condition then"],
    answer: "elif [ condition ]; then"
  },
  {
    id: 40,
    question: "How do you use `else` in a Bash `if` statement?",
    options: ["OTHERWISE", "default", "else", "ELSE"],
    answer: "else"
  },
  {
    id: 41,
    question: "How do you use `for` loops to iterate over a list of items in Bash?",
    options: ["for item in list; do commands; done", "for (item in list) { commands }", "FOR item = list DO commands ENDFOR", "foreach item in list commands"],
    answer: "for item in list; do commands; done"
  },
  {
    id: 42,
    question: "How do you use `while` loops in Bash?",
    options: ["while [ condition ]; do commands; done", "while ( condition ) { commands }", "WHILE condition DO commands ENDWHILE", "while condition commands"],
    answer: "while [ condition ]; do commands; done"
  },
  {
    id: 43,
    question: "What is the purpose of the `&&` operator in Bash?",
    options: ["It performs a logical OR", "It executes the second command only if the first command succeeds", "It executes both commands regardless of the success of the first", "It redirects standard error"],
    answer: "It executes the second command only if the first command succeeds"
  },
  {
    id: 44,
    question: "What is the purpose of the `||` operator in Bash?",
    options: ["It performs a logical AND", "It executes both commands regardless of the success of the first", "It executes the second command only if the first command fails", "It redirects standard input"],
    answer: "It executes the second command only if the first command fails"
  },
  {
    id: 45,
    question: "What is an alias in Bash?",
    options: ["A way to define environment variables", "A shortcut for a longer command", "A way to create new functions", "A type of loop"],
    answer: "A shortcut for a longer command"
  },
  {
    id: 46,
    question: "How do you create an alias in Bash?",
    options: ["alias shortcut = 'long command'", "shortcut := 'long command'", "def shortcut 'long command'", "set alias shortcut 'long command'"],
    answer: "alias shortcut='long command'"
  },
  {
    id: 47,
    question: "What is the purpose of the `history` command in Bash?",
    options: ["To clear the command history", "To display a list of previously executed commands", "To edit the command history file", "To search the command history"],
    answer: "To display a list of previously executed commands"
  },
  {
    id: 48,
    question: "What is job control in Bash?",
    options: ["Managing the CPU usage of different processes", "Managing and interacting with running processes (jobs) in the shell", "Controlling the input and output of commands", "Managing user accounts"],
    answer: "Managing and interacting with running processes (jobs) in the shell"
  },
  {
    id: 49,
    question: "Which command is used to send a running job to the background?",
    options: ["bg", "fg", "stop", "pause"],
    answer: "bg"
  },
  {
    id: 50,
    question: "Which command is used to bring a background job to the foreground?",
    options: ["bg", "fg", "start", "resume"],
    answer: "fg"
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

router.get('/bash/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;
