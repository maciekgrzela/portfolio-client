import React from 'react';

const HeaderNavItem = ({ link, title, toggle }) => {
  return (
    <a
      href={`#${link}`}
      onClick={() => toggle()}
      className='header-links__link'
    >
      {title}
    </a>
  );
};

export default HeaderNavItem;
