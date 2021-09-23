import React from 'react';
import HeaderNav from './HeaderNav';
import { HiCode } from 'react-icons/hi';

const Header = () => {
  return (
    <header className='page-header'>
      <h1 className='page-header__logo'>
        <HiCode className='page-header__icon' /> Maciej Grzela
      </h1>
      <HeaderNav />
    </header>
  );
};

export default Header;
