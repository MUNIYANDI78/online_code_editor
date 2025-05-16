const express = require('express');
const router = express.Router();

const challenges = [
  { id: 1, title: "Challenge 1", description: "Create an HTML document with a heading <h1>Welcome</h1>." },
  { id: 2, title: "Challenge 2", description: "Add a paragraph that says “This is my first HTML page.”" },
  { id: 3, title: "Challenge 3", description: "Insert a horizontal line between two paragraphs." },
  { id: 4, title: "Challenge 4", description: "Create a table with 2 rows and 2 columns." },
  { id: 5, title: "Challenge 5", description: "Add an image with alt text 'Sample Image'." },
  { id: 6, title: "Challenge 6", description: "Create a hyperlink to 'https://www.google.com'." },
  { id: 7, title: "Challenge 7", description: "Create an ordered list with 3 items." },
  { id: 8, title: "Challenge 8", description: "Create an unordered list with 3 items." },
  { id: 9, title: "Challenge 9", description: "Use semantic tags: add <header>, <main>, and <footer>." },
  { id: 10, title: "Challenge 10", description: "Create a form with name and email input fields." },
  { id: 11, title: "Challenge 11", description: "Add a button that says “Submit”." },
  { id: 12, title: "Challenge 12", description: "Create a <div> with a paragraph inside it." },
  { id: 13, title: "Challenge 13", description: "Use the <span> tag to highlight a word in a sentence." },
  { id: 14, title: "Challenge 14", description: "Insert a comment in HTML that says “This is a comment”." },
  { id: 15, title: "Challenge 15", description: "Add a checkbox labeled “I agree to the terms”." },
  { id: 16, title: "Challenge 16", description: "Add a radio button group with two options: Male and Female." },
  { id: 17, title: "Challenge 17", description: "Add a dropdown menu with 3 country names." },
  { id: 18, title: "Challenge 18", description: "Use the <strong> tag to make text bold." },
  { id: 19, title: "Challenge 19", description: "Use the <em> tag to italicize a word." },
  { id: 20, title: "Challenge 20", description: "Create a blockquote with a famous quote." },
  { id: 21, title: "Challenge 21", description: "Create a nested list (a list inside another list)." },
  { id: 22, title: "Challenge 22", description: "Add a line break between two lines of text." },
  { id: 23, title: "Challenge 23", description: "Embed a YouTube video using <iframe>." },
  { id: 24, title: "Challenge 24", description: "Create a table with column headers and row data." },
  { id: 25, title: "Challenge 25", description: "Create an HTML5 layout using <nav>, <section>, and <aside>." },
  { id: 26, title: "Challenge 26", description: "Add a text input with a placeholder 'Enter your name'." },
  { id: 27, title: "Challenge 27", description: "Add an input of type date." },
  { id: 28, title: "Challenge 28", description: "Create a file upload input." },
  { id: 29, title: "Challenge 29", description: "Add a progress bar with value 70%." },
  { id: 30, title: "Challenge 30", description: "Use the <mark> tag to highlight text." },
  { id: 31, title: "Challenge 31", description: "Display code using the <code> tag." },
  { id: 32, title: "Challenge 32", description: "Create an abbreviation using <abbr>." },
  { id: 33, title: "Challenge 33", description: "Insert a superscript and subscript element." },
  { id: 34, title: "Challenge 34", description: "Add an audio player with controls." },
  { id: 35, title: "Challenge 35", description: "Add a video player with controls and a source file." },
  { id: 36, title: "Challenge 36", description: "Create a form that uses method='post'." },
  { id: 37, title: "Challenge 37", description: "Add a required field in a form." },
  { id: 38, title: "Challenge 38", description: "Add an image that links to another webpage." },
  { id: 39, title: "Challenge 39", description: "Create a table with a caption." },
  { id: 40, title: "Challenge 40", description: "Create a heading hierarchy from <h1> to <h6>." },
  { id: 41, title: "Challenge 41", description: "Use the <pre> tag to display preformatted text." },
  { id: 42, title: "Challenge 42", description: "Add a meter element showing 60% completion." },
  { id: 43, title: "Challenge 43", description: "Use the <time> tag to define a datetime." },
  { id: 44, title: "Challenge 44", description: "Use the <details> and <summary> tags." },
  { id: 45, title: "Challenge 45", description: "Insert a favicon in the head section." },
  { id: 46, title: "Challenge 46", description: "Add a <title> to the HTML document." },
  { id: 47, title: "Challenge 47", description: "Use the <meta> tag to define character set as UTF-8." },
  { id: 48, title: "Challenge 48", description: "Create an email link using mailto:." },
  { id: 49, title: "Challenge 49", description: "Disable a button element." },
  { id: 50, title: "Challenge 50", description: "Create a full HTML structure with <!DOCTYPE html>, <html>, <head>, and <body>." }
];

router.get('/html/challenges', (req, res) => {
  res.json(challenges);
});

module.exports = router;
