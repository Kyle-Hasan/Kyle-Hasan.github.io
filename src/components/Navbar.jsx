import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 shadow-lg">
    <div className="container mx-auto flex items-center space-x-10 px-6">
    
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-200">
        Kyle Hasan
      </Link>

     
      <Link to="/" className="text-lg hover:text-gray-200">
        About Me
      </Link>
      <Link to="/projects" className="text-lg hover:text-gray-200">
        Projects
      </Link>
      
     
      <a
        href="https://github.com/Kyle-Hasan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-lg hover:text-gray-200"
      >
        <FaGithub className="mr-2" /> GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/kyle-hasan-721910228/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-lg hover:text-gray-200"
      >
        <FaLinkedin className="mr-2" /> LinkedIn
      </a>

  
      <a
        href="/Kyle_Hasan_Resume.pdf"
        download
        className="text-lg hover:text-gray-200"
      >
        Download Resume
      </a>
    </div>
  </nav>
);

export default Navbar;
