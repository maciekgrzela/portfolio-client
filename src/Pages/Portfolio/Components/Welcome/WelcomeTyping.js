import React from 'react';
import { useSelector } from 'react-redux';
import WelcomeTypingHeader from './WelcomeTypingHeader';
import WelcomeTypingDescription from './WelcomeTypingDescription';
import WelcomeTypingSocials from './WelcomeTypingSocials';

const WelcomeTyping = () => {
  const socials = useSelector((state) => state.users.info.socialMediaLinks);

  return (
    <div className='welcome-section__typing'>
      <WelcomeTypingHeader />
      <WelcomeTypingDescription />
      <WelcomeTypingSocials socials={socials} />
    </div>
  );
};

export default WelcomeTyping;
