import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef= useRef(null)
  const experienceRef = useRef(null)
 

  const scrollToSection = (ref) => {
   
    
      ref.current.scrollIntoView();
    
    
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToSkills = {()=> scrollToSection(skillsRef)}
          scrollToExperience={()=> scrollToSection(experienceRef)}
        />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage aboutRef={aboutRef}
                  projectsRef={projectsRef} skillsRef={skillsRef} experienceRef={experienceRef} />} />
          
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
