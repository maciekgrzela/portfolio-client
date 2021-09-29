import React, { useState } from 'react';
import HeaderNavItem from './HeaderNavItem';
import SocialIconComponent from './SocialIconComponent';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

const HeaderNav = ({ user }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggled(true)}
        className='header-links__link header-links__link--toggle'
      >
        <BiMenuAltRight />
      </button>
      <nav
        className={`page-header__links header-links ${
          toggled && 'header-links--toggled'
        } ml-1`}
      >
        <span onClick={() => setToggled(false)} className='header-links__close'>
          <GrClose className='header-links__close-icon' />
        </span>
        {user.githubPath && (
          <a href={user.githubPath} className='header-links__link'>
            <SocialIconComponent platform='github' />
          </a>
        )}
        {user.azureDevOpsPath && (
          <a href={user.azureDevOpsPath} className='header-links__link'>
            <SocialIconComponent platform='azure' />
          </a>
        )}
        {user.bitbucketPath && (
          <a href={user.bitbucketPath} className='header-links__link'>
            <SocialIconComponent platform='bitbucket' />
          </a>
        )}
        <HeaderNavItem toggle={setToggled} link='projects' title='Projekty' />
        <HeaderNavItem toggle={setToggled} link='about' title='O mnie' />
        <HeaderNavItem
          toggle={setToggled}
          link='technologies'
          title='Technologie'
        />
        <HeaderNavItem
          toggle={setToggled}
          link='achievements'
          title='Osiągnięcia'
        />
        <HeaderNavItem
          toggle={setToggled}
          link='work-experience'
          title='Doświadczenie'
        />
        <HeaderNavItem
          toggle={setToggled}
          link='abilities'
          title='Umiejętności'
        />
      </nav>
    </>
  );
};

export default HeaderNav;
