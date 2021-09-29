import React from 'react';
import WelcomeTyping from './Components/Welcome/WelcomeTyping';
import WelcomePhoto from './Components/Welcome/WelcomePhoto';

const Welcome = () => {
  return (
    <section className='portfolio-page__section welcome-section'>
      <WelcomeTyping />
      <WelcomePhoto />
    </section>
  );
};

export default Welcome;
