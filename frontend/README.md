# React + Vite

✅ README.md (External Submission – Final Version)

# 💻 AI-Powered Online Code Compiler

This project is a full-stack **AI-integrated online code compiler** that allows users to write, run, and debug code in multiple programming languages using a browser interface. It also includes AI features for generating, explaining, and fixing code, along with voice-to-code functionality.

---

## 👨‍💻 Project Modules

- 🧠 **AI Chatbot** (Text-to-Code, Voice Input, Error Fix)
- 📝 **Monaco Editor** (VS Code-style editor in browser)
- 🎨 **HTML/CSS/JS Live Preview**
- 📂 **Project Creation & Management**
- ⚙️ **Backend Code Execution using Piston API**

---

## 📁 Project Folder Structure

/project-root
├── frontend/ # React + Tailwind + Monaco Editor
└── backend/ # Node.js + Express + OpenRouter + Piston

yaml
Copy
Edit

---

## 🔧 Setup Instructions

### ✅ Requirements

- Node.js v18 or higher
- npm (Node Package Manager)
- Internet Connection (for AI + Code Execution API)

---

## 🖥️ Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev   # Or npm start if using Create React App
Runs at: http://localhost:5173/ or http://localhost:3000/

⚙️ Backend Setup (Node.js + Express)
bash
Copy
Edit
cd backend
npm install
Then, create a .env file inside /backend with:

ini
Copy
Edit
PORT=3000
OPENROUTER_API_KEY=your_actual_key
PISTON_API_URL=https://emkc.org/api/v2/piston
Start the backend server:

bash
Copy
Edit
node index.js
Backend runs at: http://localhost:3000/

🔗 API Routes
Endpoint	Purpose
POST /api/compile	Run user code
POST /api/chatbot/text-to-code	AI code generation
POST /api/chatbot/fix-code-error	AI bug fix or explanation

📂 Key Features
👨‍💻 Write and execute code in C, C++, Java, Python, JavaScript, Bash

🤖 AI Chatbot to help write or fix code

🎤 Voice recognition to convert speech to code

💻 HTML/CSS/JS live rendering for web design

📄 Projects saved in localStorage

🧪 How to Use
Go to Home page, select language, and create a new project.

Start typing in Monaco Editor.

Use AI chatbot (text or mic) to generate code.

Press Run to compile and view output.

For web projects, preview updates live in real-time.

📦 Build Frontend for Production
bash
Copy
Edit
cd frontend
npm run build
Creates a dist or build folder with optimized static files.



📜 License
This project is licensed under the MIT License.

📌 Notes
Fully browser-based, no installation required

Works best on modern browsers (Chrome recommended)

Backend must be running before using AI or Run features

markdown
Copy
Edit

---

### ✅ Final Submission Checklist:

- [x] `frontend/` and `backend/` folders present  
- [x] `README.md` placed at **root folder** of my project  
- [x] `.env.example` file added (if needed, for reviewer setup)  
- [x] Project works offline with dummy data (optional)  
- [x] Add screenshots or video in separate `docs/` folder (optional)







