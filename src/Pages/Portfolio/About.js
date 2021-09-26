import React from 'react';
import SectionsHeader from '../../Components/SectionsHeader';
import { ReactComponent as Soccer } from '../../Assets/Images/soccer.svg';
import { ReactComponent as Desktop } from '../../Assets/Images/desktop.svg';
import { ReactComponent as Vinyl } from '../../Assets/Images/vinyl.svg';
import { useSelector } from 'react-redux';

const About = () => {
  const about = useSelector((state) => state.users.info.selfDescription);

  return (
    <section id='about' className='portfolio-page__section about-section'>
      <SectionsHeader
        title='Kilka słów o mnie'
        subtitle='Kim jestem i czym się zajmuje'
      />
      <article className='about-section__content'>
        <p>{about}</p>
        <div className='about-section__icons'>
          <Soccer />
          <Desktop />
          <Vinyl />
        </div>
      </article>
    </section>
  );
};

export default About;
