import React from 'react';
import SocialIconComponent from '../../../../Components/SocialIconComponent';
import { Link } from 'react-router-dom';
import { IoDocumentText } from 'react-icons/io5';

const WelcomeTypingSocials = ({ socials }) => {
  return (
    <div className='welcome-section__socials'>
      {socials.map((social) => (
        <button className='welcome-section__social-btn'>
          <a href={social.path}>
            <SocialIconComponent platform={social.platform} />
            {social.displayedName}
          </a>
        </button>
      ))}
      <button className='welcome-section__social-btn'>
        <Link to='/contact'>
          <IoDocumentText /> Formularz kontaktowy
        </Link>
      </button>
    </div>
  );
};

export default WelcomeTypingSocials;
