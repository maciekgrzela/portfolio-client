import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavItem from './HeaderNavItem';
import SocialIconComponent from './SocialIconComponent';

const HeaderNav = ({ user }) => {
  return (
    <nav className='page-header__links header-links ml-1'>
      {user.githubPath && (
        <Link to={{ pathname: user.githubPath }}>
          <SocialIconComponent platform='github' />
        </Link>
      )}
      {user.azureDevOpsPath && (
        <Link to={{ pathname: user.azureDevOpsPath }}>
          <SocialIconComponent platform='azure' />
        </Link>
      )}
      {user.bitbucketPath && (
        <Link to={{ pathname: user.bitbucketPath }}>
          <SocialIconComponent platform='bitbucket' />
        </Link>
      )}
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
