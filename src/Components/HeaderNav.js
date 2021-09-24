import React from 'react';
import { SiGithub } from 'react-icons/si';
import HeaderNavItem from './HeaderNavItem';

const HeaderNav = () => {
  return (
    <nav className='page-header__links header-links ml-1'>
      <a href='https://github.com/maciekgrzela'>
        <SiGithub />
      </a>
      <HeaderNavItem link='projects' title='Projekty' />
      <HeaderNavItem link='about' title='O mnie' />
      <HeaderNavItem link='technologies' title='Technologie' />
      <HeaderNavItem link='achievements' title='Osiągnięcia' />
      <HeaderNavItem link='work-experience' title='Doświadczenie' />
      <HeaderNavItem link='abilities' title='Umiejętności' />
    </nav>
  );
};

export default HeaderNav;
