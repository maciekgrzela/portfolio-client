import React, { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import FullImageModal from '../../Components/FullImageModal';

const ProjectsSlider = () => {
  const [fullImageOpen, setFullImageOpen] = useState(null);
  const projects = useSelector((state) => state.projects.projects);

  return (
    <>
      <Carousel
        className='projects-slider__projects'
        showArrows={true}
        showIndicators={false}
        showStatus={false}
      >
        {projects.map((project) => (
          <div className='projects-slider__project project-slide'>
            <div className='project-slide__images'>
              <div className='images-slider'>
                <div className='images-slider__images'>
                  <Carousel
                    className='images-slider__carousel'
                    showArrows={true}
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    dynamicHeight
                  >
                    {project.projectImages.map((image, idx) => (
                      <div onClick={() => setFullImageOpen(image.path)}>
                        <img
                          key={idx}
                          src={image.path}
                          className='images-slider__image'
                          alt={`Projekt: ${project.title}. Zdjęcie: ${idx}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className='project-slide__text'>
              <h2 className='project-slide__title'>{project.title}</h2>
              <h5 className='project-slide__subtitle'>
                {project.workGroup > 1
                  ? `Projekt realizowany w grupie: (${project.workGroup}os)`
                  : 'Projekt realizowany samodzielnie'}
              </h5>
              {project.workGroup > 1 && (
                <h5 className='project-slide__responsibility'>
                  {project.responsibility}
                </h5>
              )}
              <div className='project-slide__description'>
                <ReactMarkdown>{project.description}</ReactMarkdown>
              </div>
              <button className='project-slide__repository'>
                {project.isPrivate ? (
                  <Link to='/contact'>
                    <SiGithub /> Repozytorium prywatne. Chcesz zobaczyć? Napisz!
                  </Link>
                ) : (
                  <a href={project.repositoryLink}>
                    <SiGithub /> Przejdź do repozytorium
                  </a>
                )}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
      {fullImageOpen && <FullImageModal opened={true} image={fullImageOpen} />}
    </>
  );
};

export default ProjectsSlider;
