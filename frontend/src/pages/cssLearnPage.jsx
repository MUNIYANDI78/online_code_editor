// // src/pages/cssLearnPage.jsx

// import React from 'react';
// import Navbar from '../components/Navbar';

// const cssConcepts = [
//   {
//     title: "Selectors",
//     description: "Used to target HTML elements using tag, class, or ID.",
//     example: `p { color: red; }  .box { border: 1px solid; }  #title { font-size: 20px; }`
//   },
//   {
//     title: "Colors",
//     description: "CSS supports color keywords, hex, RGB, RGBA, and HSL values.",
//     example: `body { background-color: #f0f0f0; color: #333; }`
//   },
//   {
//     title: "Background Color",
//     description: "Use background-color to set the background.",
//     example: `div { background-color: yellow; }`
//   },
//   {
//     title: "Text Color",
//     description: "Use color to set the text color.",
//     example: `h1 { color: blue; }`
//   },
//   {
//     title: "Font Family",
//     description: "Change font style using font-family.",
//     example: `body { font-family: Arial, sans-serif; }`
//   },
//   {
//     title: "Font Size",
//     description: "Change font size using font-size property.",
//     example: `p { font-size: 16px; }`
//   },
//   {
//     title: "Font Weight",
//     description: "Use font-weight to set text thickness.",
//     example: `strong { font-weight: bold; }`
//   },
//   {
//     title: "Text Align",
//     description: "Align text using text-align.",
//     example: `p { text-align: center; }`
//   },
//   {
//     title: "Text Decoration",
//     description: "Underline or remove underline using text-decoration.",
//     example: `a { text-decoration: none; }`
//   },
//   {
//     title: "Text Transform",
//     description: "Transform text using uppercase/lowercase.",
//     example: `h2 { text-transform: uppercase; }`
//   }
//   // Add 40 more concepts similarly if needed
// ];

// const CssLearnPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
//       <Navbar />

//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">🎨 Learn CSS</h1>

//         <div className="space-y-8 text-lg leading-relaxed">
//           <section>
//             <h2 className="text-2xl font-semibold text-blue-300">1. What is CSS?</h2>
//             <p>CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to change fonts, colors, spacing, and positioning.</p>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-blue-300">2. Basic Syntax</h2>
//             <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">
// {`selector {
//   property: value;
// }`}
//             </pre>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-blue-300">3. Example</h2>
//             <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">
// {`h1 {
//   color: blue;
//   font-size: 24px;
// }`}
//             </pre>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-blue-300">4. How to Include CSS</h2>
//             <ul className="list-disc ml-5">
//               <li><strong>Inline:</strong> &lt;h1 style="color:red"&gt;Hello&lt;/h1&gt;</li>
//               <li><strong>Internal:</strong> use &lt;style&gt; in HTML head</li>
//               <li><strong>External:</strong> link a .css file using &lt;link&gt;</li>
//             </ul>
//           </section>

//           {cssConcepts.map((concept, index) => (
//             <section key={index + 5}>
//               <h2 className="text-2xl font-semibold text-blue-300">{index + 5}. {concept.title}</h2>
//               <p>{concept.description}</p>
//               {concept.example && (
//                 <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">
// {concept.example}
//                 </pre>
//               )}
//             </section>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CssLearnPage;


// src/pages/cssLearnPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const cssLearnPage = () => {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/learn/css')
      .then((res) => setLessons(res.data))
      .catch((err) => console.error('பாடங்களை பெறுவதில் பிழை:', err));
  }, []);

  return (
    <div className='min-h-screen p-6 text-white bg-black'>
      <Navbar/>

      <h1 className='text-3xl font-bold mb-6 text-center'>📘 CSS Learn</h1>

      {lessons.length === 0 ? (
        <p className='text-center'>Loading ...</p>
      ) : (
        <div className='space-y-6 max-w-4xl mx-auto'>
          {lessons.map((lesson, index) => (
            <div key={index} className='bg-gray-800 p-4 rounded shadow'>
              <h2 className='text-xl font-semibold mb-2'>{lesson.title}</h2>
              <div
                className='lesson-content text-sm'
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </div>
          ))}
        </div>
      )}

    
      <div className='flex justify-center gap-6 mt-12'>
        <button
          onClick={() => navigate('/challenges/css')}
          className='bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-semibold rounded-xl transition-all'
        >
          🚀 Challenges
        </button>
        <button
          onClick={() => navigate('/quiz/css')}
          className='bg-green-600 hover:bg-green-700 px-6 py-3 text-lg font-semibold rounded-xl transition-all'
        >
          🧠 Start Quiz
        </button>
      </div>
    </div>
  );
};

export default cssLearnPage;

