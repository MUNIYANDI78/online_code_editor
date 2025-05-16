import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
const pythonQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/learn/python/quiz')
      .then(res => setQuestions(res.data))
      .catch(err => console.error("Failed to load quiz questions", err));
  }, []);

  const handleAnswer = (questionId, selectedOption) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  return (
    <div className='min-h-screen bg-black text-white p-6'>
      <Navbar/>
      <h1 className='text-3xl font-bold text-center text-blue-400 mb-8'>🧠C Quiz</h1>

      <div className='max-w-3xl mx-auto space-y-8'>
        {questions.map((q) => {
          const selected = selectedAnswers[q.id];

          return (
            <div
              key={q.id}
              className='bg-gray-800 p-5 rounded-lg shadow-md'
            >
              <p className='text-base font-semibold mb-4'>
                {q.id}. {q.question}
              </p>

              <div className='flex flex-col space-y-3'>
                {q.options.map((option, idx) => {
                  const isSelected = selected === option;
                  const isCorrect = isSelected && option === q.answer;
                  const isIncorrect = isSelected && option !== q.answer;

                  let borderColor = 'border-gray-600';
                  let textColor = 'text-white';

                  if (isCorrect) {
                    borderColor = 'border-green-400';
                    textColor = 'text-green-400';
                  } else if (isIncorrect) {
                    borderColor = 'border-red-400';
                    textColor = 'text-red-400';
                  }

                  return (
                    <label
                      key={idx}
                      className={`flex items-center space-x-3 border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition-all duration-150 ${borderColor}`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswer(q.id, option)}
                        className="form-radio h-4 w-4 text-blue-500"
                      />
                      <span className={`text-sm ${textColor}`}>{option}</span>
                    </label>
                  );
                })}
              </div>

              {selected && (
                <p className={`mt-3 text-sm font-semibold ${selected === q.answer ? 'text-green-400' : 'text-red-400'}`}>
                  {selected === q.answer
                    ? '✔️ Correct!'
                    : `✖️ Incorrect. Correct Answer: ${q.answer}`}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default pythonQuiz;