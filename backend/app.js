


require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();


const connectDB = require("./config/db");
connectDB();


const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const aiChatBotRouter = require("./routes/aiChatBot");
const aiFixErrorRouter = require("./routes/aiFixError");


const learnHtml = require("./routes/learnHtml");
const jsLearn = require("./routes/jsLearn")
const learnCss = require("./routes/learnCss");
const learnPython = require("./routes/pythonLearn");
const learnJava = require("./routes/javaLearn");
const learnC = require("./routes/cLearn");
const learnCC = require("./routes/c++Learn");
const learnBash = require("./routes/bashLearn");


const htmlChallenges = require("./routes/htmlChallenges");
const CssChallenges = require("./routes/cssChallenges");
const JsChallanges = require("./routes/jsChallenges");
const javaChallenges = require("./routes/javaChallanges");
const cChallenges = require("./routes/cChallenges");
const CppChallenges = require("./routes/c++Challenges");
const pythonChallenges = require("./routes/pythonChallenges");
const bashChallenges = require("./routes/bashChallenges")


const htmlQuiz = require("./routes/htmlQuiz");
const cssQuiz = require("./routes/cssQuiz");
const jsQuiz = require("./routes/jsQuiz");
const javaQuiz = require("./routes/javaQuiz");
const cQuiz = require("./routes/cquiz");
const CcQuiz = require("./routes/c++Quiz");
const pythonQuiz = require("./routes/pythonQuiz");
const bashQuiz = require("./routes/bashQuiz")



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/chatbot", aiChatBotRouter);
app.use("/api/ai", aiFixErrorRouter);



app.use("/api/learn", learnHtml);
app.use("/api/learn",learnCss);
app.use("/api/learn",jsLearn);
app.use("/api/learn",learnJava);
app.use("/api/learn",learnC);
app.use("/api/learn",learnCC);
app.use("/api/learn",learnPython);
app.use("/api/learn",learnBash);




app.use("/api/learn", htmlChallenges);
app.use("/api/learn",CssChallenges);
app.use("/api/learn",JsChallanges);
app.use("/api/learn",javaChallenges);
app.use("/api/learn",cChallenges);
app.use("/api/learn",CppChallenges);
app.use("/api/learn",pythonChallenges);
app.use("/api/learn",bashChallenges)




app.use("/api/learn", htmlQuiz);
app.use("/api/learn",cssQuiz);
app.use("/api/learn",jsQuiz);
app.use("/api/learn",javaQuiz);
app.use("/api/learn",cQuiz);
app.use("/api/learn",CcQuiz);
app.use("/api/learn",bashQuiz)
app.use("/api/learn",pythonQuiz)




app.use(function (req, res, next) {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    error: err.message || "உள்நிலை சேவையக பிழை",
  });
});

module.exports = app;
