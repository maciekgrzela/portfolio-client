import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Abilities from './Abilities';
import About from './About';
import Achievements from './Achievements';
import LookingForAJob from './LookingForAJob';
import Projects from './Projects';
import Technologies from './Technologies';
import Welcome from './Welcome';
import WorkExperience from './WorkExperience';

const Portfolio = () => {
  const user = useSelector((state) => state.users.info);

  return (
    <main className='portfolio-page'>
      <Welcome />
      {user.lookingForAJob && <LookingForAJob />}
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
