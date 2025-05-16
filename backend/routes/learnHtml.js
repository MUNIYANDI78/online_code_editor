const express = require('express');
const router = express.Router();

// HTML Learn Lessons (Beginner Friendly)
router.get('/html', (req, res) => {
  res.json([
    {
    title: "Lesson 1: What is HTML?",
    content: "<p><strong>HTML</strong> stands for <strong>HyperText Markup Language</strong>. It is the basic language used to create and design <strong>web pages</strong>.<br>Think of HTML as the <strong>skeleton of a webpage</strong>—it gives structure to content like text, images, and links.</p>"
  },
  {
    title: "Lesson 2: Basic Structure of an HTML Page",
    content: `<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome!&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><p>- <code>&lt;!DOCTYPE html&gt;</code>: Tells the browser you're using HTML5.<br>- <code>&lt;html&gt;</code>: The root of the HTML document.<br>- <code>&lt;head&gt;</code>: Contains meta information like the page title.<br>- <code>&lt;body&gt;</code>: The visible content (headings, paragraphs, images, etc.).</p>`
  },
  {
    title: "Lesson 3: Headings",
    content: `<p>HTML offers 6 heading levels:</p><pre><code>
&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Sub Title&lt;/h2&gt;
&lt;h3&gt;Section Title&lt;/h3&gt;
...
&lt;h6&gt;Smallest Title&lt;/h6&gt;
</code></pre><p>- <code>&lt;h1&gt;</code> is the biggest and most important.<br>- <code>&lt;h6&gt;</code> is the smallest.</p>`
  },
  {
    title: "Lesson 4: Paragraphs and Line Breaks",
    content: `<p>- Use <code>&lt;p&gt;</code> to create paragraphs.<br>- Use <code>&lt;br&gt;</code> to break a line inside a paragraph.</p><pre><code>
&lt;p&gt;This is a paragraph.&lt;/p&gt;
&lt;p&gt;Line one.&lt;br&gt;Line two.&lt;/p&gt;
</code></pre>`
  },
  {
    title: "Lesson 5: Links",
    content: `<p>Create clickable links using the <code>&lt;a&gt;</code> tag:</p><pre><code>
&lt;a href=\"https://google.com\"&gt;Visit Google&lt;/a&gt;
</code></pre><p>- <code>href</code> is the link URL.<br>- The text between <code>&lt;a&gt;</code> and <code>&lt;/a&gt;</code> is clickable.</p>`
  },
  {
    title: "Lesson 6: Images",
    content: `<p>Insert images using <code>&lt;img&gt;</code>:</p><pre><code>
&lt;img src=\"image.jpg\" alt=\"A beautiful view\"&gt;
</code></pre><p>- <code>src</code>: Path to the image.<br>- <code>alt</code>: Description if the image doesn’t load (important for accessibility).</p>`
  },
  {
    title: "Lesson 7: Lists",
    content: `<p><strong>Ordered List (numbers):</strong></p><pre><code>
&lt;ol&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
&lt;/ol&gt;
</code></pre><p><strong>Unordered List (bullets):</strong></p><pre><code>
&lt;ul&gt;
  &lt;li&gt;Apple&lt;/li&gt;
  &lt;li&gt;Banana&lt;/li&gt;
&lt;/ul&gt;
</code></pre>`
  },
  {
    title: "Lesson 8: Tables",
    content: `<p>HTML tables help display data in rows and columns:</p><pre><code>
&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Name&lt;/th&gt;
    &lt;th&gt;Age&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;John&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre><p>- <code>&lt;th&gt;</code>: Table headings.<br>- <code>&lt;td&gt;</code>: Data cells.<br>- <code>&lt;tr&gt;</code>: Table row.</p>`
  },
  {
    title: "Lesson 9: Forms",
    content: `<p>Forms collect user input:</p><pre><code>
&lt;form&gt;
  &lt;input type=\"text\" placeholder=\"Your Name\" /&gt;
  &lt;input type=\"email\" placeholder=\"Your Email\" /&gt;
  &lt;button type=\"submit\"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre><p>- <code>&lt;input&gt;</code>: For text, email, password, etc.<br>- <code>&lt;button&gt;</code>: For actions like submit.</p>`
  },
  {
    title: "Lesson 10: Semantic Tags",
    content: `<p>Semantic tags help describe the <strong>purpose</strong> of your HTML:</p><pre><code>
&lt;header&gt;Page Header&lt;/header&gt;
&lt;main&gt;Main Content&lt;/main&gt;
&lt;article&gt;News Article&lt;/article&gt;
&lt;footer&gt;Page Footer&lt;/footer&gt;
</code></pre><p>- These make your code <strong>more readable</strong> and <strong>better for SEO</strong>.</p>`
  },
  {
    title: "Lesson 11: Div and Span",
    content: `<p><code>&lt;div&gt;</code> is a block-level container used to group elements.<br><code>&lt;span&gt;</code> is an inline container used to style text or small elements.</p><pre><code>
&lt;div style=\"background-color:lightblue; padding:20px;\"&gt;
  &lt;h2&gt;A Box&lt;/h2&gt;
  &lt;p&gt;This content is inside a &lt;span style=\"color:red;\"&gt;div&lt;/span&gt; element.&lt;/p&gt;
&lt;/div&gt;
</code></pre>`
  },
  {
    title: "Lesson 12: Attributes",
    content: `<p>Attributes provide extra information about HTML elements:</p><pre><code>
&lt;a href=\"https://example.com\" target=\"_blank\"&gt;Visit Example&lt;/a&gt;
</code></pre><p>- <code>href</code> and <code>target</code> are attributes of the <code>&lt;a&gt;</code> tag.<br>- <code>target=\"_blank\"</code> opens the link in a new tab.</p>`
  },
  {
    title: "Lesson 13: Comments",
    content: `<p>Use comments to explain your code; they are not displayed in the browser:</p><pre><code>
&lt;!-- This is an HTML comment --&gt;
&lt;p&gt;This text will be visible.&lt;/p&gt;
</code></pre>`
  },
  {
    title: "Lesson 14: Character Entities",
    content: `<p>Entities are used to display reserved or special characters:</p><pre><code>
&lt;p&gt;&amp;lt;p&amp;gt;This is a paragraph&amp;lt;/p&amp;gt;&lt;/p&gt;
&lt;p&gt;Copyright &amp;copy; 2023&lt;/p&gt;
</code></pre><p>- <code>&amp;lt;</code> for &lt;, <code>&amp;gt;</code> for &gt;, <code>&amp;amp;</code> for &, <code>&amp;copy;</code> for ©.</p>`
  },
  {
    title: "Lesson 15: Inline Styles",
    content: `<p>You can style elements directly using the <code>style</code> attribute (though it's generally better to use CSS):</p><pre><code>
&lt;p style=\"color:blue; font-size:16px;\"&gt;This text is blue and 16 pixels.&lt;/p&gt;
</code></pre>`
  },
  {
    title: "Lesson 16: Internal CSS",
    content: `<p>You can include CSS within the <code>&lt;style&gt;</code> tags in the <code>&lt;head&gt;</code> section:</p><pre><code>
&lt;head&gt;
  &lt;style&gt;
    p { color: green; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;This paragraph will be green.&lt;/p&gt;
&lt;/body&gt;
</code></pre>`
  },
  {
    title: "Lesson 17: External CSS",
    content: `<p>The best way to style HTML is by linking to external CSS files:</p><pre><code>
&lt;head&gt;
  &lt;link rel=\"stylesheet\" href=\"styles.css\"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Styles are defined in styles.css.&lt;/p&gt;
&lt;/body&gt;
</code></pre><p>- <code>rel=\"stylesheet\"</code> indicates it's a stylesheet.<br>- <code>href</code> is the path to the CSS file.</p>`
  },
  {
    title: "Lesson 18: Class Attribute",
    content: `<p>The <code>class</code> attribute is used to style multiple elements with the same CSS rules:</p><pre><code>
&lt;p class=\"important\"&gt;This is important.&lt;/p&gt;
&lt;h2 class=\"important\"&gt;Important Heading&lt;/h2&gt;
</code></pre><pre><code>
/* In your CSS file: */
.important {
  font-weight: bold;
  color: red;
}
</code></pre>`
  },
  {
    title: "Lesson 19: ID Attribute",
    content: `<p>The <code>id</code> attribute is used to style a single, unique element:</p><pre><code>
&lt;div id=\"main-content\"&gt;
  &lt;p&gt;This is the main content.&lt;/p&gt;
&lt;/div&gt;
</code></pre><pre><code>
/* In your CSS file: */
#main-content {
  background-color: #f0f0f0;
  padding: 10px;
}
</code></pre>`
  },
  {
    title: "Lesson 20: Block vs. Inline Elements",
    content: `<p><strong>Block-level elements</strong> take up the full width available and start on a new line (e.g., <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>).<br><strong>Inline elements</strong> only take up as much width as necessary and do not start on a new line (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>).</p>`
  },
  {
    title: "Lesson 21: HTML Forms - Input Types",
    content: `<p>The <code>&lt;input&gt;</code> tag has various types for different input needs:</p><pre><code>
&lt;input type=\"text\" /&gt; &lt;!-- Single-line text --&gt;
&lt;input type=\"password\" /&gt; &lt;!-- Password field --&gt;
&lt;input type=\"radio\" name=\"gender\" value=\"male\" /&gt; Male &lt;!-- Radio buttons --&gt;
&lt;input type=\"checkbox\" name=\"interest\" value=\"coding\" /&gt; Coding &lt;!-- Checkboxes --&gt;
&lt;input type=\"submit\" value=\"Submit\" /&gt; &lt;!-- Submit button --&gt;
</code></pre>`
  },
  {
    title: "Lesson 22: HTML Forms - Select Element",
    content: `<p>The <code>&lt;select&gt;</code> element creates a dropdown list:</p><pre><code>
&lt;select name=\"cars\"&gt;
  &lt;option value=\"volvo\"&gt;Volvo&lt;/option&gt;
  &lt;option value=\"saab\"&gt;Saab&lt;/option&gt;
  &lt;option value=\"fiat\"&gt;Fiat&lt;/option&gt;
&lt;/select&gt;
</code></pre>`
  },
  {
    title: "Lesson 23: HTML Forms - Textarea",
    content: `<p>The <code>&lt;textarea&gt;</code> element creates a multi-line text input area:</p><pre><code>
&lt;textarea name=\"message\" rows=\"10\" cols=\"30\"&gt;
Enter your message here...
&lt;/textarea&gt;
</code></pre>`
  },
  {
    title: "Lesson 24: HTML5 Semantic Elements - article",
    content: `<p>The <code>&lt;article&gt;</code> tag represents a self-contained composition in a document, page, application, or site (e.g., a blog post, a news story).</p><pre><code>
&lt;article&gt;
  &lt;h2&gt;My Blog Post&lt;/h2&gt;
  &lt;p&gt;This is the content of my blog post.&lt;/p&gt;
&lt;/article&gt;
</code></pre>`
  },
  {
    title: "Lesson 25: HTML5 Semantic Elements - aside",
    content: `<p>The <code>&lt;aside&gt;</code> tag represents content aside from the content it is placed in (e.g., sidebars, pull quotes).</p><pre><code>
&lt;article&gt;
  &lt;p&gt;Main content here...&lt;/p&gt;
  &lt;aside&gt;
    &lt;h4&gt;Related Links&lt;/h4&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href=\"#\"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href=\"#\"&gt;Link 2&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/aside&gt;
&lt;/article&gt;
</code></pre>`
  },
  {
    title: "Lesson 26: HTML5 Semantic Elements - nav",
    content: `<p>The <code>&lt;nav&gt;</code> tag represents a section of a page that links to other pages or to parts within the page (e.g., a menu).</p><pre><code>
&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href=\"/home\"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=\"/about\"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href=\"/contact\"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
</code></pre>`
  },
  {
    title: "Lesson 27: HTML5 Semantic Elements - section",
    content: `<p>The <code>&lt;section&gt;</code> tag represents a thematic grouping of content, typically with a heading.</p><pre><code>
&lt;section&gt;
  &lt;h2&gt;Introduction&lt;/h2&gt;
  &lt;p&gt;This is the introduction section.&lt;/p&gt;
&lt;/section&gt;
</code></pre>`
  },
  {
    title: "Lesson 28: HTML5 Media - Audio",
    content: `<p>Embed audio using the <code>&lt;audio&gt;</code> tag:</p><pre><code>
&lt;audio controls&gt;
  &lt;source src=\"audio`}
  ]);
});

module.exports = router;

