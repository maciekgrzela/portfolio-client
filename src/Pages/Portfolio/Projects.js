import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';
import { SiGithub } from 'react-icons/si';
import ProjectsSlider from './ProjectsSlider';

const Projects = () => {
  return (
    <section className='portfolio-page__section projects-section'>
      <SectionsHeader
        title='Realizowane projekty'
        subtitle={
          <>
            Kod źródłowy każdego z nich możesz znaleźć tutaj:{' '}
            <a href='https://github.com/maciekgrzela'>
              <SiGithub />
            </a>
          </>
        }
      />
      <ProjectsSlider />
    </section>
  );
};

export default Projects;
