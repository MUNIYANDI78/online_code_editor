// import React, { useState } from "react";
// import "./Chatbot.css";

// const Chatbot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const toggleChat = () => {
//     setOpen(!open);
//   };


//   const startVoiceInput = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;
  
//     recognition.start();
  
//     recognition.onresult = (event) => {
//       const speechResult = event.results[0][0].transcript;
//       console.log("Voice Input:", speechResult);
//       handleSend(speechResult); // Existing chatbot send function
//     };
  
//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//     };
//   };
// <button onClick={startVoiceInput}>🎤</button>

//   const handleSend = async () => {
//     if (input.trim() !== "") {
//       const userMessage = { text: input, sender: "user" };
//       setMessages((prev) => [...prev, userMessage]);
//       setInput("");

//       try {
//         const response = await fetch("http://localhost:3000/api/chatbot/text-to-code", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ userInput: input }),
//         });

//         const data = await response.json();
//         const aiMessage = { text: data.code, sender: "bot" };
//         setMessages((prev) => [...prev, aiMessage]);
//       } catch (error) {
//         console.error("❌ Error fetching AI response:", error);
//         setMessages((prev) => [
//           ...prev,
//           { text: "❌ AI response failed.", sender: "bot" },
//         ]);
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Floating Button */}
//       <button onClick={toggleChat} className="chatbot-button">
//         💬 Chat
//       </button>

//       {/* Chat Window */}
//       {open && (
//         <div className="chatbot">
//           <div className="chat-header">
//             <span>AI Chatbot</span>
//             <button onClick={toggleChat}>❌</button>
//           </div>
//           <div className="chat-window">
//             {messages.map((msg, index) => (
//               <div key={index} className={`message ${msg.sender}`}>
//                 {msg.sender === "bot" && msg.text.startsWith("```") ? (
//                   <div className="code-block">
//                     <pre>
//                       {msg.text
//                         .replace(/```[\s\S]*?\n?/, "")
//                         .replace(/```$/, "")}
//                     </pre>
//                     <button
//                       className="copy-button"
//                       onClick={() =>
//                         navigator.clipboard.writeText(
//                           msg.text
//                             .replace(/```[\s\S]*?\n?/, "")
//                             .replace(/```$/, "")
//                         )
//                       }
//                     >
//                       📋 Copy
//                     </button>
//                   </div>
//                 ) : (
//                   <pre>{msg.text}</pre>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="chat-input">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//             />
//             <button onClick={handleSend}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );


  
  
// };

// export default Chatbot;






import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = ({ onCodeReceived }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setOpen(!open);
  };

  // ✅ Text or Voice message-ஐ API-க்கு அனுப்பும் function
  const handleSend = async (textMessage = input) => {
    if (textMessage.trim() !== "") {
      const userMessage = { text: textMessage, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      try {
        const response = await fetch("http://localhost:3000/api/chatbot/text-to-code", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userInput: textMessage }),
        });

        const data = await response.json();
        const aiMessage = { text: data.code, sender: "bot" };
        setMessages((prev) => [...prev, aiMessage]);

        // Code received from AI, insert it into the editor
        onCodeReceived(data.code);
      } catch (error) {
        console.error("❌ Error fetching AI response:", error);
        setMessages((prev) => [
          ...prev,
          { text: "❌ AI response failed.", sender: "bot" },
        ]);
      }
    }
  };

  // 🎤 Voice Recognition
  const startVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      console.log("Voice Input:", speechResult);
      handleSend(speechResult); // Voice Input-ஐ send பண்ணுது
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  };

  return (
    <div>
      {/* Floating Button */}
      <button onClick={toggleChat} className="chatbot-button">💬 Chat</button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot">
          <div className="chat-header">
            <span>AI Chatbot</span>
            <button onClick={toggleChat}>❌</button>
          </div>

          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {typeof msg.text === "string" && msg.sender === "bot" && msg.text.startsWith("```") ? (
                  <div className="code-block">
                    <pre>
                      {msg.text.replace(/```[\s\S]*?\n?/, "").replace(/```$/, "")}
                    </pre>
                    <button
                      className="copy-button"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          msg.text.replace(/```[\s\S]*?\n?/, "").replace(/```$/, "")
                        )
                      }
                    >
                      📋 Copy
                    </button>
                  </div>
                ) : (
                  <pre>{msg.text}</pre>
                )}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={() => handleSend()}>Send</button>
            <button onClick={startVoiceInput}>🎤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;








// Chatbot.jsx
// import React, { useState } from "react";
// import "./Chatbot.css";

// const Chatbot = ({ insertCodeToEditor }) => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const toggleChat = () => setOpen(!open);

//   const handleSend = async (textMessage = input) => {
//     if (textMessage.trim() === "") return;

//     const userMessage = { text: textMessage, sender: "user" };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const response = await fetch("http://localhost:3000/api/chatbot/text-to-code", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ userInput: textMessage }),
//       });

//       const data = await response.json();

//       const code = (data.code || "")
//         .replace(/```[\s\S]*?\n?/, "")  // remove starting ```
//         .replace(/```$/, "")           // remove ending ```
//         .trim();

//       const aiMessage = { text: code || "⚠️ No code found.", sender: "bot" };
//       setMessages((prev) => [...prev, aiMessage]);

//       // ✅ insert to editor if prop passed
//       if (insertCodeToEditor && code) {
//         insertCodeToEditor(code);
//       }
//     } catch (error) {
//       console.error("❌ Error fetching AI response:", error);
//       setMessages((prev) => [
//         ...prev,
//         { text: "❌ AI response failed.", sender: "bot" },
//       ]);
//     }
//   };

//   const startVoiceInput = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.start();

//     recognition.onresult = (event) => {
//       const speechResult = event.results[0][0].transcript;
//       handleSend(speechResult);
//     };

//     recognition.onerror = (event) => {
//       console.error("🎤 Speech recognition error:", event.error);
//     };
//   };

//   return (
//     <div>
//       <button onClick={toggleChat} className="chatbot-button">💬 Chat</button>

//       {open && (
//         <div className="chatbot">
//           <div className="chat-header">
//             <span>AI Chatbot</span>
//             <button onClick={toggleChat}>❌</button>
//           </div>

//           <div className="chat-window">
//             {messages.map((msg, i) => (
//               <div key={i} className={`message ${msg.sender}`}>
//                 <pre>{msg.text}</pre>
//               </div>
//             ))}
//           </div>

//           <div className="chat-input">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//             />
//             <button onClick={() => handleSend()}>Send</button>
//             <button onClick={startVoiceInput}>🎤</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
