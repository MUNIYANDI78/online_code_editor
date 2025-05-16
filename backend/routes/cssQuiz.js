const express = require('express');
const router = express.Router();

const quiz = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    id: 2,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<style>", "<stylesheet>", "<styling>"],
    answer: "<style>"
  },
  {
    id: 3,
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    id: 4,
    question: "How do you insert a comment in a CSS file?",
    options: ["// this is a comment", "/* this is a comment */", "# this is a comment", ""],
    answer: "/* this is a comment */"
  },
  {
    id: 5,
    question: "Which CSS property is used to change the background color of an element?",
    options: ["color-background", "bg-color", "background-color", "background"],
    answer: "background-color"
  },
  {
    id: 6,
    question: "How do you select all <p> elements on a page?",
    options: [".p", "all.p", "p", "#p"],
    answer: "p"
  },
  {
    id: 7,
    question: "How do you select an element with the ID 'demo'?",
    options: [".demo", "demo", "#demo", "*demo"],
    answer: "#demo"
  },
  {
    id: 8,
    question: "How do you select all elements with the class name 'intro'?",
    options: ["#intro", "*intro", ".intro", "intro"],
    answer: ".intro"
  },
  {
    id: 9,
    question: "Which CSS property is used to control the element's font?",
    options: ["text-font", "font", "font-family", "typeface"],
    answer: "font-family"
  },
  {
    id: 10,
    question: "Which CSS property is used to add space around elements, OUTSIDE of any defined borders?",
    options: ["padding", "border", "margin", "spacing"],
    answer: "margin"
  },
  {
    id: 11,
    question: "Which CSS property is used to add space around the content of an element, INSIDE of any defined borders?",
    options: ["margin", "border", "spacing", "padding"],
    answer: "padding"
  },
  {
    id: 12,
    question: "Which CSS property is used to set the color of text?",
    options: ["text-color", "font-color", "color", "foreground-color"],
    answer: "color"
  },
  {
    id: 13,
    question: "Which CSS property specifies the thickness of the element's four borders?",
    options: ["border-style", "border-thickness", "thickness", "border-width"],
    answer: "border-width"
  },
  {
    id: 14,
    question: "Which CSS property is used to make rounded corners?",
    options: ["corner-style", "rounded-corners", "border-radius", "border-round"],
    answer: "border-radius"
  },
  {
    id: 15,
    question: "How do you make a list-item markers not appear?",
    options: ["list-style: none;", "ul-style: none;", "marker: none;", "list-style-type: none;"],
    answer: "list-style-type: none;"
  },
  {
    id: 16,
    question: "Which CSS property is used to set the stacking order of positioned elements?",
    options: ["stack-order", "layer", "order", "z-index"],
    answer: "z-index"
  },
  {
    id: 17,
    question: "Which CSS property is used to control the layout of multiple columns?",
    options: ["multi-column", "column-layout", "columns", "text-columns"],
    answer: "columns"
  },
  {
    id: 18,
    question: "Which value of the 'display' property creates a block-level box?",
    options: ["inline", "inline-block", "block", "none"],
    answer: "block"
  },
  {
    id: 19,
    question: "Which value of the 'display' property creates an inline-level box?",
    options: ["block", "inline-block", "none", "inline"],
    answer: "inline"
  },
  {
    id: 20,
    question: "Which CSS property is used for shadows around an element's frame?",
    options: ["shadow", "element-shadow", "box-shadow", "frame-shadow"],
    answer: "box-shadow"
  },
  {
    id: 21,
    question: "What is the default value of the 'position' property?",
    options: ["relative", "absolute", "static", "fixed"],
    answer: "static"
  },
  {
    id: 22,
    question: "Which value of the 'position' property is positioned relative to the viewport?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: "fixed"
  },
  {
    id: 23,
    question: "Which value of the 'position' property is positioned relative to its normal position?",
    options: ["absolute", "fixed", "relative", "static"],
    answer: "relative"
  },
  {
    id: 24,
    question: "Which value of the 'position' property is positioned relative to the first positioned (not static) ancestor element?",
    options: ["relative", "fixed", "static", "absolute"],
    answer: "absolute"
  },
  {
    id: 25,
    question: "Which CSS property is used to control the flow and positioning of elements for different screen sizes?",
    options: ["float", "position", "display", "layout"],
    answer: "display"
  },
  {
    id: 26,
    question: "Which CSS property is used to wrap text around an element?",
    options: ["wrap", "text-wrap", "float", "align"],
    answer: "float"
  },
  {
    id: 27,
    question: "Which CSS property is used to clear floated elements?",
    options: ["float-clear", "clearfix", "unfloat", "clear"],
    answer: "clear"
  },
  {
    id: 28,
    question: "What are the possible values for the 'clear' property?",
    options: ["left, right, top, bottom", "start, end, both, none", "inline, block, both, none", "left, right, both, none"],
    answer: "left, right, both, none"
  },
  {
    id: 29,
    question: "Which CSS property is used to control the spacing between lines of text?",
    options: ["text-spacing", "line-space", "line-height", "spacing"],
    answer: "line-height"
  },
  {
    id: 30,
    question: "Which CSS property is used to align text horizontally?",
    options: ["align-text", "horizontal-align", "align", "text-align"],
    answer: "text-align"
  },
  {
    id: 31,
    question: "Which CSS property adds decoration to text?",
    options: ["decoration", "text-style", "text-decoration", "style-text"],
    answer: "text-decoration"
  },
  {
    id: 32,
    question: "Which CSS property is used to transform the case of text?",
    options: ["transform-text", "case", "text-case", "text-transform"],
    answer: "text-transform"
  },
  {
    id: 33,
    question: "Which CSS property controls the spacing between characters?",
    options: ["character-spacing", "word-spacing", "spacing", "letter-spacing"],
    answer: "letter-spacing"
  },
  {
    id: 34,
    question: "Which CSS property controls the spacing between words?",
    options: ["letter-spacing", "character-spacing", "spacing", "word-spacing"],
    answer: "word-spacing"
  },
  {
    id: 35,
    question: "Which CSS property is used to create a shadow effect on text?",
    options: ["shadow-text", "font-shadow", "shadow", "text-shadow"],
    answer: "text-shadow"
  },
  {
    id: 36,
    question: "What is the purpose of CSS selectors?",
    options: ["To define the structure of an HTML document", "To add interactivity to a website", "To target HTML elements you want to style", "To create animations"],
    answer: "To target HTML elements you want to style"
  },
  {
    id: 37,
    question: "What is the specificity of an ID selector in CSS?",
    options: ["Medium", "Lowest", "Highest", "Equal to class selector"],
    answer: "Highest"
  },
  {
    id: 38,
    question: "What is the specificity of a class selector in CSS?",
    options: ["Highest", "Lowest", "Medium", "Equal to ID selector"],
    answer: "Medium"
  },
  {
    id: 39,
    question: "What is the specificity of an element (type) selector in CSS?",
    options: ["Medium", "Highest", "Equal to universal selector", "Lowest"],
    answer: "Lowest"
  },
  {
    id: 40,
    question: "Which selector matches all elements?",
    options: ["all", "every", "*", "element"],
    answer: "*"
  },
  {
    id: 41,
    question: "Which selector selects all <p> elements that are inside a <div> element?",
    options: ["div.p", "div>p", "div p", "div+p"],
    answer: "div p"
  },
  {
    id: 42,
    question: "Which selector selects the first <p> element that is a child of a <div> element?",
    options: ["div p", "div + p", "div > p", "div ~ p"],
    answer: "div > p"
  },
  {
    id: 43,
    question: "Which selector selects the first <p> element that is a sibling of a <div> element?",
    options: ["div > p", "div p", "div ~ p", "div + p"],
    answer: "div + p"
  },
  {
    id: 44,
    question: "Which selector selects all <p> elements that are siblings of a <div> element?",
    options: ["div + p", "div > p", "div p", "div ~ p"],
    answer: "div ~ p"
  },
  {
    id: 45,
    question: "Which pseudo-class is used to define the style of an element when you mouse over it?",
    options: [":active", ":focus", ":hover", ":visited"],
    answer: ":hover"
  },
  {
    id: 46,
    question: "Which pseudo-class is used to define the style of a link that has been visited?",
    options: [":hover", ":active", ":focus", ":visited"],
    answer: ":visited"
  },
  {
    id: 47,
    question: "Which pseudo-class is used to define the style of an active link?",
    options: [":hover", ":visited", ":active", ":focus"],
    answer: ":active"
  },
  {
    id: 48,
    question: "Which pseudo-class is used to select the input element that currently has focus?",
    options: [":hover", ":visited", ":active", ":focus"],
    answer: ":focus"
  },
  {
    id: 49,
    question: "What is the purpose of the CSS box model?",
    options: ["To define the layout of a webpage", "To style the fonts and colors of elements", "To add interactivity to HTML elements", "To describe the rectangular boxes that are generated for elements in the document tree"],
    answer: "To describe the rectangular boxes that are generated for elements in the document tree"
  },
  {
    id: 50,
    question: "In the CSS box model, what is the order of the layers from innermost to outermost?",
    options: ["Content, Border, Padding, Margin", "Padding, Content, Border, Margin", "Border, Padding, Content, Margin", "Content, Padding, Border, Margin"],
    answer: "Content, Padding, Border, Margin"
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

router.get('/css/quiz', (req, res) => {
  res.json(quiz);
});

module.exports = router;
