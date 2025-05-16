const express = require('express');
const router = express.Router();

const challenges  = [
  { id: 1, title: "Challenge 1", description: "Change the background color of the page to lightblue." },
  { id: 2, title: "Challenge 2", description: "Make all <h1> elements center aligned." },
  { id: 3, title: "Challenge 3", description: "Change the font size of all paragraphs to 18px." },
  { id: 4, title: "Challenge 4", description: "Make all links have no underline." },
  { id: 5, title: "Challenge 5", description: "Add a red border around all images." },
  { id: 6, title: "Challenge 6", description: "Set the font family of the body to Arial." },
  { id: 7, title: "Challenge 7", description: "Change the color of all <h2> headings to green." },
  { id: 8, title: "Challenge 8", description: "Set padding of 20px to a <div> with class 'box'." },
  { id: 9, title: "Challenge 9", description: "Make a button background color blue and text white." },
  { id: 10, title: "Challenge 10", description: "Apply a hover effect to links to turn them red." },
  { id: 11, title: "Challenge 11", description: "Set a background image for the body." },
  { id: 12, title: "Challenge 12", description: "Make all list items have square bullets." },
  { id: 13, title: "Challenge 13", description: "Add margin of 10px to all <p> tags." },
  { id: 14, title: "Challenge 14", description: "Style an element with ID 'header' to have bold text." },
  { id: 15, title: "Challenge 15", description: "Add a box shadow to a <div>." },
  { id: 16, title: "Challenge 16", description: "Change the cursor to pointer when hovering over a button." },
  { id: 17, title: "Challenge 17", description: "Make an image circular using border-radius." },
  { id: 18, title: "Challenge 18", description: "Use flexbox to center a <div> horizontally." },
  { id: 19, title: "Challenge 19", description: "Apply a linear gradient to a background." },
  { id: 20, title: "Challenge 20", description: "Set max-width to 100% for images." },
  { id: 21, title: "Challenge 21", description: "Make a sticky header using position: sticky." },
  { id: 22, title: "Challenge 22", description: "Add a transition to change button color smoothly." },
  { id: 23, title: "Challenge 23", description: "Set a fixed width and height to a div." },
  { id: 24, title: "Challenge 24", description: "Add spacing between letters in a heading." },
  { id: 25, title: "Challenge 25", description: "Style the placeholder text in an input." },
  { id: 26, title: "Challenge 26", description: "Use media query to make text smaller on mobile." },
  { id: 27, title: "Challenge 27", description: "Style even table rows with a background color." },
  { id: 28, title: "Challenge 28", description: "Change font color of visited links." },
  { id: 29, title: "Challenge 29", description: "Use z-index to layer elements." },
  { id: 30, title: "Challenge 30", description: "Make an element semi-transparent using opacity." },
  { id: 31, title: "Challenge 31", description: "Use border-radius to make a rounded button." },
  { id: 32, title: "Challenge 32", description: "Center text inside a <div> vertically and horizontally." },
  { id: 33, title: "Challenge 33", description: "Add a dashed border to a container." },
  { id: 34, title: "Challenge 34", description: "Hide an element using display: none." },
  { id: 35, title: "Challenge 35", description: "Use grid layout to arrange items in 2 columns." },
  { id: 36, title: "Challenge 36", description: "Make a responsive image gallery with flexbox." },
  { id: 37, title: "Challenge 37", description: "Style a form input with padding and border." },
  { id: 38, title: "Challenge 38", description: "Set text-transform to uppercase for all headings." },
  { id: 39, title: "Challenge 39", description: "Add a hover effect to scale an image." },
  { id: 40, title: "Challenge 40", description: "Use nth-child to style alternate list items." },
  { id: 41, title: "Challenge 41", description: "Set a background color for the <footer> section." },
  { id: 42, title: "Challenge 42", description: "Use absolute positioning to place an element in a corner." },
  { id: 43, title: "Challenge 43", description: "Add a custom font using @font-face." },
  { id: 44, title: "Challenge 44", description: "Use overflow: hidden to hide extra content." },
  { id: 45, title: "Challenge 45", description: "Animate a button using @keyframes." },
  { id: 46, title: "Challenge 46", description: "Style a disabled input field differently." },
  { id: 47, title: "Challenge 47", description: "Use rem units for font sizes." },
  { id: 48, title: "Challenge 48", description: "Add a border only on the top of a div." },
  { id: 49, title: "Challenge 49", description: "Create a shadow effect for text." },
  { id: 50, title: "Challenge 50", description: "Add a hover effect to change font size smoothly." }
];


router.get('/css/challenges', (req, res) => {
  res.json(challenges);
});

module.exports = router;