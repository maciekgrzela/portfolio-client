import React from 'react';

const SectionsHeader = ({ title, subtitle = null }) => {
  return (
    <header className='sections-header'>
      <h1>{title}</h1>
      {subtitle && <h4 className='faded'>{subtitle}</h4>}
    </header>
  );
};

export default SectionsHeader;
