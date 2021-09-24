import React from 'react';
import Abilities from './Abilities';
import About from './About';
import Achievements from './Achievements';
import LookingForAJob from './LookingForAJob';
import Projects from './Projects';
import Technologies from './Technologies';
import Welcome from './Welcome';
import WorkExperience from './WorkExperience';

const Portfolio = () => {
  return (
    <main className='portfolio-page'>
      <Welcome />
      <LookingForAJob />
      <Projects />
      <About />
      <Technologies />
      <Achievements />
      <WorkExperience />
      <Abilities />
    </main>
  );
};

export default Portfolio;
