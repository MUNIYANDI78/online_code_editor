import React from 'react';
import { FaKeyboard, FaMicrophone, FaRobot, FaHtml5, FaFolderOpen, FaCodeBranch } from 'react-icons/fa';
import Navbar from '../components/Navbar';
const services = [
  {
    title: 'Monaco Code Editor',
    icon: <FaKeyboard className="text-blue-400 text-2xl" />,
    description: 'Write and edit code with syntax highlighting and real-time formatting.',
  },
  {
    title: 'AI Chatbot Assistant',
    icon: <FaRobot className="text-green-400 text-2xl" />,
    description: 'Generate, fix, or explain code using natural language text or voice.',
  },
  {
    title: 'Voice to Code',
    icon: <FaMicrophone className="text-red-400 text-2xl" />,
    description: 'Speak your code or commands and let the AI write it for you.',
  },
  {
    title: 'Live HTML/CSS Preview',
    icon: <FaHtml5 className="text-orange-400 text-2xl" />,
    description: 'Instant preview for HTML/CSS/JS code using an embedded live iframe.',
  },
  {
    title: 'Project Dashboard',
    icon: <FaFolderOpen className="text-purple-400 text-2xl" />,
    description: 'Easily manage your projects, edit or delete them, and continue coding.',
  },
  {
    title: 'Language Selection',
    icon: <FaCodeBranch className="text-yellow-400 text-2xl" />,
    description: 'Choose from multiple programming languages for each project.',
  },
];

const Services = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto text-white">
        <Navbar/>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-300"> Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex items-start gap-4 p-4 border border-gray-700 rounded-lg bg-gray-900 shadow hover:shadow-lg transition">
            {service.icon}
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

