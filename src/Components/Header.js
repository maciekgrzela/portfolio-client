import React from 'react';
import HeaderNav from './HeaderNav';
import { HiCode } from 'react-icons/hi';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();
  const user = useSelector((state) => state.users.info);

  return (
    <header className='page-header'>
      {location.pathname !== '/' ? (
        <Link to='/'>
          <h1 className='page-header__logo'>
            <BsArrowLeft className='page-header__icon' />
            Powrót do strony głównej
          </h1>
        </Link>
      ) : (
        <>
          <Link to='/'>
            <h1 className='page-header__logo'>
              <HiCode className='page-header__icon' />
              {`${user.firstName} ${user.lastName}`}
            </h1>
          </Link>
          <HeaderNav user={user} />
        </>
      )}
    </header>
  );
};

export default Header;
