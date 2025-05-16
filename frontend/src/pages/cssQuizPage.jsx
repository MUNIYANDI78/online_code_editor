// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CssQuizPage = () => {
//   const [questions, setQuestions] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [selected, setSelected] = useState(null);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api/learn/css/quiz')
//       .then((res) => setQuestions(res.data))
//       .catch((err) => console.error('Error loading quiz:', err));
//   }, []);

//   const handleAnswer = (choice) => {
//     setSelected(choice);
//     if (choice === questions[current].answer) {
//       setScore(score + 1);
//     }
//   };

//   const nextQuestion = () => {
//     setSelected(null);
//     setCurrent(current + 1);
//   };

//   if (questions.length === 0)
//     return <p className="text-white text-center mt-10">Loading quiz...</p>;

//   if (current >= questions.length) {
//     return (
//       <div className="min-h-screen bg-black text-white p-8 text-center">
//         <h1 className="text-3xl font-bold mb-4">Quiz Completed 🎉</h1>
//         <p className="text-2xl">Your Score: {score} / {questions.length}</p>
//       </div>
//     );
//   }

//   const isCorrect = (option) => option === questions[current].answer;

//   return (
//     <div className="min-h-screen bg-black text-white p-8">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         🧠 CSS Quiz - Question {current + 1} of {questions.length}
//       </h1>

//       <div className="bg-gray-800 p-6 rounded max-w-2xl mx-auto">
//         <p className="mb-4">{questions[current].question}</p>

//         <div className="space-y-2">
//           {questions[current].options.map((option, index) => {
//             let bgColor = 'bg-gray-700 hover:bg-gray-600';
//             if (selected) {
//               if (option === selected) {
//                 bgColor = isCorrect(option) ? 'bg-green-600' : 'bg-red-600';
//               } else if (isCorrect(option)) {
//                 bgColor = 'bg-green-600';
//               }
//             }

//             return (
//               <label
//                 key={index}
//                 className={`flex items-center p-3 rounded cursor-pointer ${bgColor}`}
//               >
//                 <input
//                   type="radio"
//                   name="option"
//                   value={option}
//                   onChange={() => handleAnswer(option)}
//                   disabled={selected !== null}
//                   className="mr-3"
//                   checked={selected === option}
//                 />
//                 {option}
//               </label>
//             );
//           })}
//         </div>

//         {selected && (
//           <button
//             onClick={nextQuestion}
//             className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CssQuizPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const cssQuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/learn/css/quiz')
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
      <h1 className='text-3xl font-bold text-center text-blue-400 mb-8'>🧠 HTML Quiz</h1>

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

export default cssQuizPage;

