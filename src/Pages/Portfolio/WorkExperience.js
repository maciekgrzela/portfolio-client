import React from 'react';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';
import SectionsHeader from '../../Components/SectionsHeader';

const WorkExperience = () => {
  const workExperience = useSelector(
    (state) => state.users.info.workExperiences
  );

  return (
    <section
      id='work-experience'
      className='portfolio-page__section work-experience-section'
    >
      <SectionsHeader
        title='Doświadczenie w pracy'
        subtitle='Dla kogo pisałem kod'
      />
      <article className='work-experience-section__content'>
        <ul>
          {workExperience.map((experience) => (
            <li>
              <span>
                <Moment format='MM-YYYY'>{experience.dateStart}</Moment> -{' '}
                <Moment format='MM-YYYY'>{experience.dateEnd}</Moment>
              </span>
              {experience.title}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default WorkExperience;
