import React from 'react';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import Navbar from '../components/Navbar';
const About = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-white">
        <Navbar/>
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">About Our Online Compiler</h1>

      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <FaCode className="text-blue-500 text-3xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-blue-300">Simple and Powerful</h2>
            <p className="text-gray-200">
              Our compiler is designed to help students, developers, and beginners write and test code right inside their browser—no installations needed.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaLaptopCode className="text-green-400 text-3xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-green-300">Modern Coding Experience</h2>
            <p className="text-gray-200">
              Featuring the Monaco Editor (used in VS Code), you can write in multiple programming languages with syntax highlighting and code formatting.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaRocket className="text-purple-400 text-3xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">Built for the Future</h2>
            <p className="text-gray-200">
              We believe in fast, accessible, and smart coding. That’s why we’ve added AI assistance, voice input, and live previews for web technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
