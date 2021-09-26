import React from 'react';
import HeaderNav from './HeaderNav';
import { HiCode } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.users.info);

  return (
    <header className='page-header'>
      <h1 className='page-header__logo'>
        <HiCode className='page-header__icon' />
        {`${user.firstName} ${user.lastName}`}
      </h1>
      <HeaderNav user={user} />
    </header>
  );
};

export default Header;
