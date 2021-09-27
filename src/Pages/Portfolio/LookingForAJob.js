import React from 'react';
import RequirementIcon from '../../Components/RequirementIcon';
import SectionsHeader from '../../Components/SectionsHeader';
import { FaUserTie, FaNodeJs } from 'react-icons/fa';
import {
  SiDotNet,
  SiCss3,
  SiJavascript,
  SiReact,
  SiHtml5,
} from 'react-icons/si';

const LookingForAJob = () => {
  return (
    <section className='portfolio-page__section job-section'>
      <SectionsHeader
        title='Gotowy na kolejne wyzwania!'
        subtitle='Czego poszukuję?'
      />
      <article className='job-section__requirements'>
        <div className='job-section__requirement'>
          <div className='job-section__requirement-item'>
            <RequirementIcon icon={<FaUserTie />} color='#4D83DE' />
            <span className='job-section__requirement-desc faded'>
              Stanowisko
            </span>
            <span className='job-section__requirement-title'>
              Junior Full-Stack web Developer
            </span>
          </div>
          <div className='job-section__requirement-item'>
            <div className='job-section__requirement-icons'>
              <RequirementIcon icon={<SiDotNet />} color='#613BA2' />
              <RequirementIcon icon={<FaNodeJs />} color='#83CD29' />
            </div>
            <span className='job-section__requirement-desc faded'>Backend</span>
            <span className='job-section__requirement-title'>
              .NET / NodeJS
            </span>
          </div>
          <div className='job-section__requirement-item'>
            <div className='job-section__requirement-icons'>
              <RequirementIcon icon={<SiHtml5 />} color='#F16524' />
              <RequirementIcon icon={<SiCss3 />} color='#33A9DC' />
              <RequirementIcon icon={<SiJavascript />} color='#F7E018' />
              <RequirementIcon icon={<SiReact />} color='#292C33' />
            </div>
            <span className='job-section__requirement-desc faded'>
              Frontend
            </span>
            <span className='job-section__requirement-title'>
              HTML/CSS/JS/React
            </span>
          </div>
        </div>
        <h4 className='job-section__or'>lub: </h4>
        <div className='job-section__requirement'>
          <div className='job-section__requirement'>
            <div className='job-section__requirement-item'>
              <RequirementIcon icon={<FaUserTie />} color='#4D83DE' />
              <span className='job-section__requirement-desc faded'>
                Stanowisko
              </span>
              <span className='job-section__requirement-title'>
                Junior Front-end web Developer
              </span>
            </div>
            <div className='job-section__requirement-item ml-2'>
              <div className='job-section__requirement-icons'>
                <RequirementIcon icon={<SiHtml5 />} color='#F16524' />
                <RequirementIcon icon={<SiCss3 />} color='#33A9DC' />
                <RequirementIcon icon={<SiJavascript />} color='#F7E018' />
                <RequirementIcon icon={<SiReact />} color='#292C33' />
              </div>
              <span className='job-section__requirement-desc faded'>
                Frontend
              </span>
              <span className='job-section__requirement-title'>
                HTML/CSS/JS/React
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LookingForAJob;
