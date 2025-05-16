// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// require("dotenv").config();

// console.log("✅ aiChatBot.js route file is loaded!");

// router.post("/text-to-code", async (req, res) => {
//   console.log("📥 Received request at /api/chatbot/text-to-code");

//   const { userInput } = req.body;
//   if (!userInput) {
//     console.log("❌ Missing userInput in request!");
//     return res.status(400).json({ error: "userInput is required" });
//   }

//   const apiKey = process.env.OPENROUTER_API_KEY;
//   console.log("🧠 Using API Key:", apiKey ? "✅ Found!" : "❌ Not Found!");

//   try {
//     const response = await axios.post(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         model: "mistralai/mixtral-8x7b",
//         messages: [{ role: "user", content: userInput }],
//         max_tokens: 200,
//         temperature: 0.2
//       },
//       {
//         headers: {
//           "Authorization": `Bearer ${apiKey}`,
//           "Content-Type": "application/json",
//           "HTTP-Referer": "http://localhost:3000",
//           "X-Title": "Multi Code IDE Chatbot"
//         }
//       }
//     );

//     console.log("✅ OpenRouter Response Received:", response.data);

//     const codeMatch = response.data.choices[0].message.content.match(/```(?:\w+)?\n([\s\S]*?)```/);
//   const codeOnly = codeMatch ? codeMatch[1] : response.data.choices[0].message.content;

//   res.json({ code: codeOnly });

//   } catch (error) {
//     console.error("❌ OpenRouter API Error:", error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch AI response" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

console.log("✅ aiChatBot.js route file is loaded!");

router.post("/text-to-code", async (req, res) => {
  console.log("📥 Received request at /api/chatbot/text-to-code");

  const { userInput } = req.body;
  if (!userInput) {
    console.log("❌ Missing userInput in request!");
    return res.status(400).json({ error: "userInput is required" });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  console.log("🧠 Using API Key:", apiKey ? "✅ Found!" : "❌ Not Found!");

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // ✅ Correct model ID
        messages: [{ role: "user", content: userInput }],
        max_tokens: 200,
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Multi Code IDE Chatbot",
        },
      }
    );

    console.log("✅ OpenRouter Response Received:", response.data);

    const codeMatch = response.data.choices[0].message.content.match(/```(?:\w+)?\n([\s\S]*?)```/);
    const codeOnly = codeMatch ? codeMatch[1] : response.data.choices[0].message.content;

    res.json({ code: codeOnly });

  } catch (error) {
    console.error("❌ OpenRouter API Error:", error.response?.data || error.message);
    
    if (error.response?.status === 400) {
      return res.status(400).json({ error: "❌ Invalid model ID or bad request to OpenRouter API." });
    }

    res.status(500).json({ error: "❌ Failed to fetch AI response" });
  }
});

module.exports = router;
