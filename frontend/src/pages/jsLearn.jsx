
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const JsLearn = () => {
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/learn/js')
      .then((res) => setLessons(res.data))
      .catch((err) => console.error('பாடங்களை பெறுவதில் பிழை:', err));
  }, []);

  return (
    <div className='min-h-screen p-6 text-white bg-black'>
      <Navbar/>
      <h1 className='text-3xl font-bold mb-6 text-center'>📘 JavaScript Learn</h1>

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
          onClick={() => navigate('/challenges/js')}
          className='bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-semibold rounded-xl transition-all'
        >
          🚀 Challenges
        </button>
        <button
          onClick={() => navigate('/quiz/js')}
          className='bg-green-600 hover:bg-green-700 px-6 py-3 text-lg font-semibold rounded-xl transition-all'
        >
          🧠 Start Quiz
        </button>
      </div>
    </div>
  );
};

export default JsLearn;
