import React from 'react';

const RequirementIcon = ({ icon: Icon, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className='job-section__requirement-icon requirement-icon'
    >
      {Icon}
    </div>
  );
};

export default RequirementIcon;
