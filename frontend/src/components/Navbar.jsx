import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logo = "https://tse3.mm.bing.net/th?id=OIP.kX2XOYVkZ0MtIv41AWTAUwHaHa&pid=Api&P=0&h=220";

  return (
    <header className="bg-[#0f0e0e] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="w-14 h-14 object-cover rounded-full" />

        <nav className="flex items-center gap-6 text-white font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
      <Link to="/services" className="hover:text-blue-500">Services</Link>

          {/* Uncomment below if needed */}
          {/* <Link to="/learn/html" className="hover:text-blue-400 transition-colors">Learn HTML</Link>
          <Link to="/challenges/html" className="hover:text-blue-400 transition-colors">Challenges</Link>
          <Link to="/quiz/html" className="hover:text-blue-400 transition-colors">Quiz</Link> */}

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("isLoggedIn");
              window.location.reload();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
