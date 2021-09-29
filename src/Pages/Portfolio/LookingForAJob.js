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
import LookingForAJobRequirementItem from './Components/LookingForAJob/LookingForAJobRequirementItem';

const LookingForAJob = () => {
  return (
    <section className='portfolio-page__section job-section'>
      <SectionsHeader
        title='Jestem gotowy na kolejne wyzwania!'
        subtitle='Jakiej pracy poszukuję?'
      />
      <article className='job-section__requirements'>
        <div className='job-section__requirement'>
          <LookingForAJobRequirementItem
            description='Stanowisko'
            icons={[<RequirementIcon icon={<FaUserTie />} color='#4D83DE' />]}
            title='Junior Full-Stack web Developer'
          />
          <LookingForAJobRequirementItem
            description='Backend'
            icons={[
              <RequirementIcon icon={<SiDotNet />} color='#613BA2' />,
              <RequirementIcon icon={<FaNodeJs />} color='#83CD29' />,
            ]}
            title='.NET / NodeJS'
          />
          <LookingForAJobRequirementItem
            description='Frontend'
            icons={[
              <RequirementIcon icon={<SiHtml5 />} color='#F16524' />,
              <RequirementIcon icon={<SiCss3 />} color='#33A9DC' />,
              <RequirementIcon icon={<SiJavascript />} color='#F7E018' />,
              <RequirementIcon icon={<SiReact />} color='#292C33' />,
            ]}
            title='HTML/CSS/JS/React'
          />
        </div>
        <h4 className='job-section__or'>lub: </h4>
        <div className='job-section__requirement'>
          <div className='job-section__requirement'>
            <LookingForAJobRequirementItem
              description='Stanowisko'
              icons={[<RequirementIcon icon={<FaUserTie />} color='#4D83DE' />]}
              title='Junior Frontend Developer'
            />
            <LookingForAJobRequirementItem
              description='Frontend'
              icons={[
                <RequirementIcon icon={<SiHtml5 />} color='#F16524' />,
                <RequirementIcon icon={<SiCss3 />} color='#33A9DC' />,
                <RequirementIcon icon={<SiJavascript />} color='#F7E018' />,
                <RequirementIcon icon={<SiReact />} color='#292C33' />,
              ]}
              title='HTML/CSS/JS/React'
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default LookingForAJob;
