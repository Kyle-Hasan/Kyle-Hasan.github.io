import React, { useRef } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';

const HomePage = ({ aboutRef, projectsRef }) => {
 

 

  return (
    <div>
      <div ref={aboutRef}>
        <About ref={aboutRef} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
};

export default HomePage;
