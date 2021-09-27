import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';

const Abilities = () => {
  const abilities = useSelector((state) => state.users.info.abilities);

  return (
    <section
      id='abilities'
      className='portfolio-page__section abilities-section'
    >
      <SectionsHeader title='Umiejętności' />
      <div className='abilities-section__progress'>
        {abilities.map((ability) => (
          <CircularProgressbar
            value={ability.percentageValue}
            text={ability.name}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: 'butt',
              pathColor: '#4d83de',
              trailColor: '#eee',
              textColor: '#4d83de',
              textSize: '0.95rem',
            })}
          />
        ))}
      </div>
    </section>
  );
};

export default Abilities;
