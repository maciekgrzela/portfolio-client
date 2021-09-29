import React from 'react';
import welcomePhoto from '../../../../Assets/Images/welcome_photo.png';

const WelcomePhoto = () => {
  return (
    <div className='welcome-section__photo'>
      <img
        className='welcome-section__photo-img'
        src={welcomePhoto}
        alt='Portfolio'
      />
    </div>
  );
};

export default WelcomePhoto;
