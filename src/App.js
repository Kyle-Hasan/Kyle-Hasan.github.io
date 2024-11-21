import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
 

  const scrollToSection = (ref) => {
   
    
      ref.current.scrollIntoView();
    
    
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
        />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage aboutRef={aboutRef}
                  projectsRef={projectsRef} />} />
          
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
