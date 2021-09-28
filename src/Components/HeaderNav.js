import React from 'react';
import HeaderNavItem from './HeaderNavItem';
import SocialIconComponent from './SocialIconComponent';

const HeaderNav = ({ user }) => {
  return (
    <nav className='page-header__links header-links ml-1'>
      {user.githubPath && (
        <a href={user.githubPath}>
          <SocialIconComponent platform='github' />
        </a>
      )}
      {user.azureDevOpsPath && (
        <a href={user.azureDevOpsPath}>
          <SocialIconComponent platform='azure' />
        </a>
      )}
      {user.bitbucketPath && (
        <a href={user.bitbucketPath}>
          <SocialIconComponent platform='bitbucket' />
        </a>
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
