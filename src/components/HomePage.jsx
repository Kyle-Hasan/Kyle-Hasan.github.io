import React, { useRef } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from './Skills';
import Experience from './Experience';

const HomePage = ({ aboutRef, projectsRef,skillsRef, experienceRef }) => {
 

 

  return (
    <div>
      <div ref={aboutRef}>
        <About ref={aboutRef} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      
      <div ref={skillsRef}>
        <Skills/>
      </div>

      <div ref={experienceRef}>
        <Experience/>
      </div>

    </div>
  );
};

export default HomePage;
