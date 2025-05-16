// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// router.post("/fix-error", async (req, res) => {
//   const { userCode, errorOutput } = req.body;
//   if (!userCode || !errorOutput) {
//     return res.status(400).json({ error: "Missing code or errorOutput" });
//   }

//   try {
//     const response = await axios.post(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         model: "openai/gpt-3.5-turbo",
//         messages: [
//           {
//             role: "user",
//             content: `இதோ என் code:\n\n${userCode}\n\nஇந்த error வந்திருக்கு:\n\n${errorOutput}\n\nதயவு செய்து தவறு உள்ள line number-ஐ சொல்லி, அதற்கான சரியான code-ஐ மட்டும் structure-ஆ return பண்ணுங்க. Format:\n\nCorrected Line: <line number>\nCorrected Code:\n<corrected code>`,
//           },
//         ],
//         max_tokens: 300,
//         temperature: 0.3,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const fullText = response.data.choices[0].message.content;
//     res.json({ fix: fullText });
//   } catch (err) {
//     console.error("Fix API error:", err.message);
//     res.status(500).json({ error: "AI fix failed" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const axios = require("axios");

// ✅ POST route to fix code errors using OpenRouter AI
router.post("/fix-error", async (req, res) => {
  const { userCode, errorOutput } = req.body;

  if (!userCode || !errorOutput) {
    return res.status(400).json({ error: "Missing code or error output." });
  }

  // ✅ AI prompt for multi-language code debugging
  const prompt = `
You are a senior code debugger. A code snippet is provided below:

${userCode}

An error occurred while running this code:

${errorOutput}

Your task:
- Identify the incorrect line number
- Provide the corrected line of code
- Do not include any extra explanation or commentary.

Response format:
Corrected Line: <line number>
Corrected Code:
<corrected line of code>
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 300,
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiReply = response.data.choices[0].message.content;
    console.log("✅ AI Suggestion:\n", aiReply);

    res.json({ fix: aiReply });
  } catch (err) {
    console.error("❌ Error from AI:", err.message);
    res.status(500).json({ error: "AI failed to respond." });
  }
});

module.exports = router;
