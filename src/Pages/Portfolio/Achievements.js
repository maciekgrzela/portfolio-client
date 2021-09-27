import React from 'react';
import { useSelector } from 'react-redux';
import SectionsHeader from '../../Components/SectionsHeader';

const Achievements = () => {
  const achievements = useSelector((state) => state.users.info.achievements);

  return (
    <section
      id='achievements'
      className='portfolio-page__section achievements-section'
    >
      <SectionsHeader title='Osiągnięcia' subtitle='Naukowe i informatyczne' />
      <article className='achievements-section__content'>
        <ul>
          {achievements.map((achievement) => (
            <li>
              <span>{achievement.years}</span>
              {achievement.title}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Achievements;
