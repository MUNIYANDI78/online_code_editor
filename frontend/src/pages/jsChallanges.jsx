import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const jsChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/learn/js/challenges')
      .then((res) => setChallenges(res.data))
      .catch((err) => console.error('Error fetching challenges:', err));
  }, []);

  return (
    <div className='min-h-screen p-6 text-white bg-black'>
      <Navbar/>
      <h1 className='text-3xl font-bold mb-6 text-center'>💡 Js Challenges</h1>

      {challenges.length === 0 ? (
        <p className='text-center'>Loading challenges...</p>
      ) : (
        <div className='space-y-6 max-w-4xl mx-auto'>
          {challenges.map((challenge) => (
            <div key={challenge.id} className='bg-gray-800 p-4 rounded shadow'>
              <h2 className='text-xl font-semibold mb-2'>{challenge.title}</h2>
              <p className='mb-2'>{challenge.description}</p>

              {/* ✅ Only show starter code if it exists */}
              {challenge.starterCode && challenge.starterCode.trim() !== '' && (
                <pre className='bg-gray-900 p-2 rounded text-sm overflow-x-auto'>
                  {challenge.starterCode}
                </pre>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default jsChallenges;
