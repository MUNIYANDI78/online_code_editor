const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "mistral", // your chosen model
        messages: [
          { role: "system", content: "You are a code assistant. Reply only with code." },
          { role: "user", content: message }
        ]
      },
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
          "Content-Type": "application/json"
        }
      }
    );

    const botReply = response.data.choices[0].message.content;
    res.json({ bot: botReply });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ bot: "Sorry, something went wrong." });
  }
});

module.exports = router;
