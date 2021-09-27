import React from 'react';

const HeaderNavItem = ({ link, title }) => {
  return (
    <a href={`#${link}`} className='header-links__link'>
      {title}
    </a>
  );
};

export default HeaderNavItem;
