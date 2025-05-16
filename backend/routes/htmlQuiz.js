const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [ "Home Tool Markup Language", "Hyperlinks and Text Markup Language","HyperText Markup Language", "HighText Machine Language"],
    answer: "HyperText Markup Language"
  },
  {
    id: 2,
    question: "Who is the father of HTML?",
    options: ["Tim Berners-Lee", "Brendan Eich", "James Gosling", "Guido van Rossum"],
    answer: "Tim Berners-Lee"
  },
  {
    id: 3,
    question: "What is the correct HTML element for the largest heading?",
    options: ["<h1>", "<heading>", "<h6>", "<head>"],
    answer: "<h1>"
  },
  {
    id: 4,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<break>", "<lb>", "<newline>"],
    answer: "<br>"
  },
  {
    id: 5,
    question: "Choose the correct HTML element to define important text:",
    options: ["<strong>", "<b>", "<important>", "<i>"],
    answer: "<strong>"
  },
  {
    id: 6,
    question: "Which HTML element is used to define emphasized text?",
    options: ["<em>", "<i>", "<italic>", "<strong>"],
    answer: "<em>"
  },
  {
    id: 7,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    answer: "<a>"
  },
  {
    id: 8,
    question: "How can you open a link in a new tab/browser window?",
    options: ["target=\"_blank\"", "target=\"new\"", "new-window=\"true\"", "href=\"new\""],
    answer: "target=\"_blank\""
  },
  {
    id: 9,
    question: "Which of these tags are all <table> tags?",
    options: ["<table> <tr> <td>", "<table> <head> <tfoot>", "<thead> <body> <tr>", "<table> <tr> <tt>"],
    answer: "<table> <tr> <td>"
  },
  {
    id: 10,
    question: "How can you make a numbered list?",
    options: ["<ol>", "<ul>", "<dl>", "<list>"],
    answer: "<ol>"
  },
  {
    id: 11,
    question: "How can you make a bulleted list?",
    options: ["<ul>", "<ol>", "<list>", "<dl>"],
    answer: "<ul>"
  },
  {
    id: 12,
    question: "What is the correct HTML element to insert a horizontal rule?",
    options: ["<hr>", "<line>", "<break>", "<rule>"],
    answer: "<hr>"
  },
  {
    id: 13,
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["alt", "title", "src", "longdesc"],
    answer: "alt"
  },
  {
    id: 14,
    question: "Which doctype is correct for HTML5?",
    options: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE html PUBLIC>", "<!HTML5>"],
    answer: "<!DOCTYPE html>"
  },
  {
    id: 15,
    question: "Which HTML element defines the title of a document?",
    options: ["<title>", "<head>", "<meta>", "<header>"],
    answer: "<title>"
  },
  {
    id: 16,
    question: "Which element is used to specify a footer for a document or section?",
    options: ["<footer>", "<bottom>", "<section>", "<aside>"],
    answer: "<footer>"
  },
  {
    id: 17,
    question: "What is the correct HTML element to define navigation links?",
    options: ["<nav>", "<navigate>", "<navigation>", "<link>"],
    answer: "<nav>"
  },
  {
    id: 18,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    answer: "style"
  },
  {
    id: 19,
    question: "Which tag is used to define a block of text that is quoted from another source?",
    options: ["<blockquote>", "<q>", "<quote>", "<cite>"],
    answer: "<blockquote>"
  },
  {
    id: 20,
    question: "Which HTML tag is used to display a scalar measurement within a known range?",
    options: ["<meter>", "<range>", "<measure>", "<gauge>"],
    answer: "<meter>"
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

router.get('/html/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;
