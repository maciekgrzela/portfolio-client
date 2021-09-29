import React from 'react';

const LookingForAJobRequirementItem = ({ icons, title, description }) => {
  return (
    <div className='job-section__requirement-item'>
      {icons.length > 1 ? (
        <div className='job-section__requirement-icons'>
          {icons.map((icon) => (
            <>{icon}</>
          ))}
        </div>
      ) : (
        <>{icons[0]}</>
      )}
      <span className='job-section__requirement-desc faded'>{description}</span>
      <span className='job-section__requirement-title'>{title}</span>
    </div>
  );
};

export default LookingForAJobRequirementItem;
