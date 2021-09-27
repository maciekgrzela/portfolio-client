import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { BsArrowBarUp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='page-footer'>
      <span className='page-footer__copyright'>
        Made with ❤ by Maciej Grzela &copy;
        <Moment format='YYYY'>{new Date()}</Moment>
      </span>
      <Link to='/' className='page-footer__back-to-home'>
        Powrót do strony głównej <BsArrowBarUp />
      </Link>
    </footer>
  );
};

export default Footer;
