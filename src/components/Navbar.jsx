import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import resume from '../assets/Kyle_Hasan_Resume.pdf';

const Navbar = ({ scrollToAbout, scrollToProjects,scrollToSkills, scrollToExperience }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-200">
            Kyle Hasan
          </Link>

          
          <div className="hidden lg:flex items-center space-x-6">
            {location.pathname === '/' ? (
              <>
                <button
                  onClick={()=> {
                 scrollToAbout()
                  }}
                  className="text-lg hover:text-gray-200 focus:outline-none"
                >
                  About Me
                </button>
                
              
                <button
                  onClick={scrollToProjects}
                  className="text-lg hover:text-gray-200 focus:outline-none"
                >
                  Projects
                </button>

                <button
                  onClick={scrollToExperience}
                  className="text-lg hover:text-gray-200 focus:outline-none"
                >
                  Experience
                </button>

                <button
                  onClick={()=> {
                 scrollToSkills()
                  }}
                  className="text-lg hover:text-gray-200 focus:outline-none"
                >
                  Skills
                </button>
              </>
            ) : (
              <>
                 <>
                <button
                  onClick={()=> {
                    navigate("/")
                  setTimeout(()=> {
                    scrollToAbout()
                  } , 0)
                 
                  }}
                  className="text-lg hover:text-gray-200 focus:outline-none"
                >
                  About Me
                </button>
                <button
                  onClick={()=> {
                    navigate("/")
                  setTimeout(()=> {
                    scrollToProjects()
                  } , 0)
                 
                  }}
                  className="text-lg hover:text-gray-200 focus:outline-none"
                >
                  Projects
                </button>
              </>
              </>
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
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
              href={resume}
              download="Kyle_Hasan_Resume.pdf"
              className="text-lg hover:text-gray-200"
            >
              Download Resume
            </a>
          </div>
        </div>

       
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none hover:text-gray-200"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

 
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:hidden bg-blue-600 text-white py-4`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {location.pathname === '/' ? (
            <>
              <button
                onClick={scrollToAbout}
                className="text-lg hover:text-gray-200 focus:outline-none text-left"
              >
                About Me
              </button>
              <button
                onClick={scrollToProjects}
                className="text-lg hover:text-gray-200 focus:outline-none text-left"
              >
                Projects
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="text-lg hover:text-gray-200">
                About Me
              </Link>
              <Link to="/" className="text-lg hover:text-gray-200">
                Projects
              </Link>
            </>
          )}
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
            href={resume}
            download="Kyle_Hasan_Resume.pdf"
            className="text-lg hover:text-gray-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
