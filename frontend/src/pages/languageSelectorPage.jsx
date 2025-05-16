import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust the path as per your folder structure

const languages = [
  { name: 'HTML', path: 'html' },
  { name: 'CSS', path: 'css' },
  { name: 'JavaScript', path: 'javascript' },
  { name: 'Python', path: 'python' },
  { name: 'Java', path: 'java' },
  { name: 'C', path: 'c' },
  { name: 'C++', path: 'cpp' },
  { name: 'Bash', path: 'bash' },
];

const LanguageSelectorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <Navbar /> {/* Navbar added here */}

      <div className="flex flex-col items-center justify-center px-4 mt-8">
        <h1 className="text-5xl font-bold mb-12 text-center">🌐 Choose a Language to Learn</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1000px] w-full">
          {languages.map((lang) => (
            <div
              key={lang.path}
              onClick={() => navigate(`/learn/${lang.path}`)}
              className="cursor-pointer bg-gray-800 hover:bg-blue-600 transition-all duration-300 rounded-2xl shadow-lg p-8 text-center text-2xl font-semibold tracking-wide"
            >
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectorPage;
