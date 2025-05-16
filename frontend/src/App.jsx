import React from 'react';
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import About from './pages/about';
import Services from "./pages/services"
import Editor from './pages/Editor';
import Chatbot from './components/chatbot/Chatbot'; // ✅ IMPORT
import FrontendEditor from "./pages/FrontendEditor";

import LearnHTMLPage from './pages/learnHtmlPage';
import LanguageSelectorPage from './pages/languageSelectorPage';
import HtmlChallenges from './pages/htmlChallenges'; 
import HTMLQuizPage from './pages/htmlQuizPage';



import CssLearnPage from './pages/cssLearnPage'; 
import CssChallenges from './pages/cssChallenges';
import CssQuizPage from './pages/cssQuizPage';


import JsLearn from "./pages/jsLearn"
import JsChallenges from "./pages/jsChallanges";
import JsQuiz from "./pages/jsQuiz";


import JavaLearn from './pages/javalearn';
import JavaChallenges from './pages/javaChallenges';
import JavaQuiz from './pages/javaQuiz';

import CLearn from './pages/cLearn';
import CChallenges from './pages/cChallenges';
import CQuiz from './pages/cQuiz';

import CppLearn from './pages/cppLearn';
import CppChallenges from './pages/cppChalenges';
import CppQuiz from './pages/cppQuiz';


import PythonLearn from './pages/pythonLearn';
import PythonChallenges from './pages/pythonChallenges';
import PythonQuiz from './pages/pythonQuiz';


import BashLearn from './pages/bashLearn';
import BashChallenges from './pages/bashChallenges';
import BashQuiz from './pages/bashQuiz';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>

  
      <Chatbot />
    </>
  );
};

const RouteHandler = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editior/:id" element={isLoggedIn ? <Editor /> : <Navigate to={"/login"} />} />
        <Route path="/frontend" element={<FrontendEditor />} />
        <Route path="/learn" element={<LanguageSelectorPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/learn/html" element={<LearnHTMLPage />} />
        <Route path="/challenges/html" element={<HtmlChallenges />} /> 
         <Route path="/quiz/html" element={<HTMLQuizPage />} />

         <Route path="/learn/css" element={<CssLearnPage />} />
        <Route path="/learn/css/content" element={<CssLearnPage />} />
        <Route path="/challenges/css" element={<CssChallenges />} />
        <Route path="/quiz/css" element={<CssQuizPage />} />

        <Route path="/learn/javascript" element={<JsLearn />} />
        <Route path="/learn/javascript/content" element={<JsLearn />} />
        <Route path="/challenges/js" element={<JsChallenges />} />
        <Route path="/quiz/js" element={<JsQuiz />} />

        <Route path="/learn/java" element={<JavaLearn />} />
        <Route path="/learn/java/content" element={<JavaLearn />} />
        <Route path="/challenges/java" element={<JavaChallenges />} />
        <Route path="/quiz/java" element={<JavaQuiz />} />

        <Route path="/learn/c" element={<CLearn />} />
        <Route path="/learn/c/content" element={<CLearn />} />
        <Route path="/challenges/c" element={<CChallenges />} />
        <Route path="/quiz/c" element={<CQuiz />} />

        <Route path="/learn/cpp" element={<CppLearn />} />
        <Route path="/learn/cpp/content" element={<CppLearn />} />
        <Route path="/challenges/cpp" element={<CppChallenges />} />
        <Route path="/quiz/cpp" element={<CppQuiz />} />

        <Route path="/learn/python" element={<PythonLearn />} />
        <Route path="/learn/python/content" element={<PythonLearn />} />
        <Route path="/challenges/python" element={<PythonChallenges />} />
        <Route path="/quiz/python" element={<PythonQuiz />} />


        <Route path="/learn/bash" element={<BashLearn />} />
        <Route path="/learn/bash/content" element={<BashLearn />} />
        <Route path="/challenges/bash" element={<BashChallenges />} />
        <Route path="/quiz/bash" element={<BashQuiz />} />




        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
