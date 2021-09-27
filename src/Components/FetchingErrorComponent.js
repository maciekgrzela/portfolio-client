import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FetchingErrorComponent = () => {
  return (
    <div className='fetching-error'>
      <FaRegSadTear className='fetching-error__icon' />
      <p className='fetching-error__text'>
        Coś poszło nie tak. Spróbuj ponownie klikając{' '}
        <Link replace to='/'>
          tutaj
        </Link>
      </p>
    </div>
  );
};

export default FetchingErrorComponent;
