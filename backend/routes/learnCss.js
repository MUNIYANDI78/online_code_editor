const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/css', (req, res) => {
  res.json([
     {
    title: "Lesson 1: What is CSS?",
    content: "<p><strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>. It's used to describe how HTML elements should be displayed (styled) on screen, paper, or in other media.<br>CSS controls the <strong>layout</strong>, <strong>colors</strong>, <strong>fonts</strong>, and other visual aspects of web pages.</p>"
  },
  {
    title: "Lesson 2: Basic CSS Syntax",
    content: `<p>A CSS rule consists of a <strong>selector</strong> and a <strong>declaration block</strong>:</p><pre><code>
selector {
  property: value;
  another-property: another-value;
}
</code></pre><p>- <strong>Selector</strong>: Targets the HTML element(s) you want to style (e.g., <code>p</code>, <code>h1</code>, <code>.class</code>, <code>#id</code>).<br>- <strong>Property</strong>: The style attribute you want to change (e.g., <code>color</code>, <code>font-size</code>).<br>- <strong>Value</strong>: The setting for the property (e.g., <code>blue</code>, <code>16px</code>).</p>`
  },
  {
    title: "Lesson 3: Ways to Include CSS",
    content: `<p>There are three main ways to include CSS in your HTML:</p>
    <ol>
      <li><strong>Inline CSS</strong>: Directly within HTML elements using the <code>style</code> attribute (generally not recommended for large styles).</li>
      <li><strong>Internal CSS</strong>: Within the <code>&lt;style&gt;</code> tags in the <code>&lt;head&gt;</code> section of your HTML document.</li>
      <li><strong>External CSS</strong>: In separate <code>.css</code> files linked to your HTML using the <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> (the most common and recommended method).</li>
    </ol>`
  },
  {
    title: "Lesson 4: Selectors - Element Selectors",
    content: `<p>Element selectors target HTML elements by their tag name:</p><pre><code>
p {
  color: green;
}

h1 {
  font-size: 2em;
}
</code></pre><p>- All <code>&lt;p&gt;</code> elements will have green text.<br>- All <code>&lt;h1&gt;</code> elements will have a font size of 2em.</p>`
  },
  {
    title: "Lesson 5: Selectors - Class Selectors",
    content: `<p>Class selectors target HTML elements with a specific <code>class</code> attribute. They start with a dot (<code>.</code>):</p><pre><code>
.important {
  font-weight: bold;
  color: red;
}
</code></pre><pre><code>
&lt;p class=\"important\"&gt;This paragraph is important.&lt;/p&gt;
&lt;h2 class=\"important\"&gt;This heading is also important.&lt;/h2&gt;
</code></pre>`
  },
  {
    title: "Lesson 6: Selectors - ID Selectors",
    content: `<p>ID selectors target a single, unique HTML element with a specific <code>id</code> attribute. They start with a hash symbol (<code>#</code>):</p><pre><code>
#main-title {
  text-align: center;
  background-color: yellow;
}
</code></pre><pre><code>
&lt;h1 id=\"main-title\"&gt;Welcome!&lt;/h1&gt;
</code></pre><p>- IDs should be unique within a document.</p>`
  },
  {
    title: "Lesson 7: Selectors - Universal Selector",
    content: `<p>The universal selector (<code>*</code>) selects all HTML elements on the page:</p><pre><code>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</code></pre><p>- Often used to reset default browser styles.</p>`
  },
  {
    title: "Lesson 8: Selectors - Grouping Selectors",
    content: `<p>You can group multiple selectors to apply the same styles to them:</p><pre><code>
h1, h2, p {
  color: blue;
}
</code></pre><p>- All <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, and <code>&lt;p&gt;</code> elements will have blue text.</p>`
  },
  {
    title: "Lesson 9: The Cascade",
    content: `<p>The "cascade" in CSS refers to how browsers resolve conflicts when multiple styles apply to the same element. The order of importance (from least to most) is generally:</p>
    <ol>
      <li>Browser default styles</li>
      <li>External and internal stylesheets (styles defined later in the document have higher precedence)</li>
      <li>Inline styles (have the highest precedence)</li>
    </ol><p>Specificity of selectors also plays a role in the cascade.</p>`
  },
  {
    title: "Lesson 10: Specificity",
    content: `<p>Specificity determines which CSS rule takes precedence when multiple rules apply to the same element. The specificity hierarchy (from lowest to highest) is:</p>
    <ol>
      <li>Universal selectors (<code>*</code>)</li>
      <li>Element (type) selectors</li>
      <li>Class selectors, attribute selectors, pseudo-classes</li>
      <li>ID selectors</li>
      <li>Inline styles (highest specificity)</li>
    </ol><p>For example, an ID selector is more specific than a class selector.</p>`
  },
  {
    title: "Lesson 11: Colors",
    content: `<p>CSS colors can be specified in several ways:</p>
    <ul>
      <li><strong>Named colors</strong>: Using predefined names (e.g., <code>red</code>, <code>blue</code>, <code>green</code>).</li>
      <li><strong>Hexadecimal (hex) values</strong>: Using a '#' followed by six hexadecimal digits (e.g., <code>#FF0000</code> for red).</li>
      <li><strong>RGB values</strong>: Using <code>rgb(red, green, blue)</code> with values from 0 to 255 (e.g., <code>rgb(255, 0, 0)</code> for red).</li>
      <li><strong>RGBA values</strong>: Similar to RGB, but with an alpha value for transparency: <code>rgba(red, green, blue, alpha)</code> (alpha from 0.0 to 1.0).</li>
    </ul>`
  },
  {
    title: "Lesson 12: Backgrounds",
    content: `<p>CSS allows you to style the background of HTML elements using properties like:</p>
    <ul>
      <li><code>background-color</code>: Sets the background color.</li>
      <li><code>background-image</code>: Sets an image as the background.</li>
      <li><code>background-repeat</code>: Controls how the background image is repeated.</li>
      <li><code>background-position</code>: Specifies the starting position of the background image.</li>
      <li><code>background-size</code>: Specifies the size of the background image.</li>
    </ul><pre><code>
body {
  background-color: #f0f0f0;
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-position: top right;
}
</code></pre>`
  },
  {
    title: "Lesson 13: Text Properties",
    content: `<p>CSS provides various properties to style text:</p>
    <ul>
      <li><code>color</code>: Sets the text color.</li>
      <li><code>font-family</code>: Specifies the font of the text.</li>
      <li><code>font-size</code>: Sets the size of the text.</li>
      <li><code>font-weight</code>: Sets the boldness of the text.</li>
      <li><code>text-align</code>: Aligns the text (left, center, right, justify).</li>
      <li><code>line-height</code>: Sets the spacing between lines.</li>
      <li><code>text-decoration</code>: Adds or removes decorations (underline, overline, line-through).</li>
    </ul>`
  },
  {
    title: "Lesson 14: Borders",
    content: `<p>CSS borders style the outline around HTML elements:</p><pre><code>
div {
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

/* Shorthand property: */
div {
  border: 2px solid black;
}
</code></pre><p>- <code>border-width</code>: Sets the thickness of the border.<br>- <code>border-style</code>: Defines the style (solid, dashed, dotted, etc.).<br>- <code>border-color</code>: Sets the color of the border.</p>`
  },
  {
    title: "Lesson 15: Margins",
    content: `<p>Margins create space around the outside of an HTML element:</p><pre><code>
p {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

/* Shorthand property: top right bottom left */
p {
  margin: 10px 20px; /* top/bottom left/right */
}

p {
  margin: 10px 20px 15px 5px; /* top right bottom left */
}
</code></pre>`
  },
  {
    title: "Lesson 16: Padding",
    content: `<p>Padding creates space inside an HTML element, between the content and the border:</p><pre><code>
div {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid black;
}

/* Shorthand property: top right bottom left */
div {
  padding: 15px 30px; /* top/bottom left/right */
}

div {
  padding: 15px 30px 20px 10px; /* top right bottom left */
  border: 1px solid black;
}
</code></pre>`
  },
  {
    title: "Lesson 17: Box Model",
    content: `<p>The CSS box model describes the rectangular boxes that are generated for HTML elements. It consists of:</p>
    <ul>
      <li><strong>Content</strong>: The actual content of the element (text, images, etc.).</li>
      <li><strong>Padding</strong>: Space around the content.</li>
      <li><strong>Border</strong>: A line surrounding the padding and content.</li>
      <li><strong>Margin</strong>: Space around the border.</li>
    </ul><p>Understanding the box model is crucial for layout and spacing.</p>`
  },
  {
    title: "Lesson 18: Display Property",
    content: `<p>The <code>display</code> property controls how an element is displayed and how other elements flow around it. Common values include:</p>
    <ul>
      <li><code>block</code>: Element takes up the full width and starts a new line.</li>
      <li><code>inline</code>: Element only takes up necessary width and doesn't start a new line.</li>
      <li><code>inline-block</code>: Element flows inline but allows setting width and height.</li>
      <li><code>none</code>: Element is not displayed.</li>
      <li><code>flex</code>: Creates a flex container for flexible layout.</li>
      <li><code>grid</code>: Creates a grid container for grid-based layout.</li>
    </ul>`
  },
  {
    title: "Lesson 19: Positioning - Static",
    content: `<p><code>position: static;</code> is the default value. Elements are positioned according to the normal flow of the document.</p>`
  },
  {
    title: "Lesson 20: Positioning - Relative",
    content: `<p><code>position: relative;</code> positions an element relative to its normal position. Setting <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code> properties will offset the element from its static position without affecting the layout of surrounding elements.</p><pre><code>
.relative {
  position: relative;
  left: 30px;
  top: 20px;
}
</code></pre>`
  },
  {
    title: "Lesson 21: Positioning - Absolute",
    content: `<p><code>position: absolute;</code> positions an element relative to the nearest positioned ancestor (an ancestor with a <code>position</code> other than <code>static</code>). If no positioned ancestor exists, it's positioned relative to the initial containing block (the <code>&lt;html&gt;</code> element).</p><pre><code>
.absolute {
  position: absolute;
  top: 50px;
  right: 0;
}
</code></pre>`
  },
  {
    title: "Lesson 22: Positioning - Fixed",
    content: `<p><code>position: fixed;</code> positions an element relative to the viewport (the browser window). Fixed elements do not scroll with the page.</p><pre><code>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
}
</code></pre>`
  },
  {
    title: "Lesson 23: Floats",
    content: `<p>The <code>float</code> property is used to position an element to the left or right of its container, allowing text and inline elements to wrap around it.</p><pre><code>
.float-left {
  float: left;
  margin-right: 15px;
}

.float-right {
  float: right;
  margin-left: 15px;
}
</code></pre><p>Floats can sometimes cause layout issues (e.g., parent not collapsing); clearing floats is often necessary.</p>`
  },
  {
    title: "Lesson 24: Clearfix",
    content: `<p>The clearfix technique is used to prevent the parent element of floated elements from collapsing. A common method involves adding a pseudo-element:</p><pre><code>
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</code></pre><pre><code>
&lt;div class=\"container clearfix\"&gt;
  &lt;div class=\"float-left\"&gt;Float Left&lt;/div&gt;
  &lt;p&gt;Text wrapping around the floated element.&lt;/p&gt;
&lt;/div&gt;
</code></pre>`
  },
  {
    title: "Lesson 25: Pseudo-classes",
    content: `<p>Pseudo-classes are used to define a special state of an element. Examples include:</p>
    <ul>
      <li><code>:hover</code>: When the mouse cursor hovers over an element.</li>
      <li><code>:active</code>: When an element is being clicked.</li>
      <li><code>:focus</code>: When an element has focus (e.g., an input field).</li>
      <li><code>:visited</code>: For links that have been visited.</li>
      <li><code>:first-child</code>: The first child element within its parent.</li>
      <li><code>:last-child</code>: The last child element within its parent.</li>
    </ul><pre><code>
a:hover {
  color: orange;
}

input:focus {
  border: 2px solid blue;
}
</code></pre>`
  },
  {
    title: "Lesson 26: Pseudo-elements",
    content: `<p>Pseudo-elements are used to style specific parts of an element. They are denoted by a double colon (<code>::</code>):</p>
    <ul>
      <li><code>::before</code>: Inserts something before the content of an element.</li>
      <li><code>::after</code>: Inserts something after the content of an element.</li>
      <li><code>::first-letter</code>: Styles the first letter of a text block.</li>
      <li><code>::first-line</code>: Styles the first line of a text block.</li>
    </ul><pre><code>
p::first-letter {
  font-size: 2em;
  color: red;
}

div::before {
  content: "Start: ";
  color: green;
}
</code></pre>`
  },
  {
    title: "Lesson 27: Units - Pixels (px)",
    content: `<p>Pixels (<code>px</code>) are a fixed unit, representing one dot on the screen. They provide precise control over sizing.</p><pre><code>
p {
  font-size: 16px;
}
</code></pre>`
  },
  {
    title: "Lesson 28: Units - Ems (em)",
    content: `<p>Ems (<code>em</code>) are a relative unit based on the font-size of the parent element. <code>1em</code> is equal to the font-size of the parent.</p><pre><code>
body {
  font-size: 12px;
}

p {
  font-size: 1.5em; /* 1.5 * 12px = 18px */
}
</code></pre>`
  }
  
  ]
  );
});

module.exports = router;


