import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Abilities = () => {
  return (
    <section
      id='abilities'
      className='portfolio-page__section abilities-section'
    >
      <SectionsHeader title='Umiejętności' />
      <div className='abilities-section__progress'>
        <CircularProgressbar
          value={70}
          text={`C#/.NET`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            pathColor: '#4d83de',
            trailColor: '#eee',
            textColor: '#4d83de',
          })}
        />
        <CircularProgressbar
          value={65}
          text={`NodeJS`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            pathColor: '#4d83de',
            trailColor: '#eee',
            textColor: '#4d83de',
          })}
        />
        <CircularProgressbar
          value={75}
          text={`JavaScript`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            pathColor: '#4d83de',
            trailColor: '#eee',
            textColor: '#4d83de',
          })}
        />
        <CircularProgressbar
          value={70}
          text={`React`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            pathColor: '#4d83de',
            trailColor: '#eee',
            textColor: '#4d83de',
          })}
        />
        <CircularProgressbar
          value={60}
          text={`SCSS`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            pathColor: '#4d83de',
            trailColor: '#eee',
            textColor: '#4d83de',
          })}
        />
        <CircularProgressbar
          value={65}
          text={`Git`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            pathColor: '#4d83de',
            trailColor: '#eee',
            textColor: '#4d83de',
          })}
        />
        <CircularProgressbar
          value={63}
          text={`SQL`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            pathColor: '#4d83de',
            trailColor: '#eee',
            textColor: '#4d83de',
          })}
        />
        <CircularProgressbar
          value={40}
          text={`React Native`}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: 'butt',
            trailColor: '#eee',
            pathColor: '#4d83de',
            textSize: '1rem',
            textColor: '#4d83de',
          })}
        />
      </div>
    </section>
  );
};

export default Abilities;
