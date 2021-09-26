import React from 'react';
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { IoShareSocialOutline } from 'react-icons/io5';
import { SiGithub, SiMicrosoftazure, SiBitbucket } from 'react-icons/si';

const SocialIconComponent = ({ platform }) => {
  switch (platform) {
    case 'twitter':
      return <AiFillTwitterCircle />;
    case 'linkedin':
      return <AiFillLinkedin />;
    case 'facebook':
      return <AiFillFacebook />;
    case 'instagram':
      return <AiFillInstagram />;
    case 'github':
      return <SiGithub />;
    case 'azure':
      return <SiMicrosoftazure />;
    case 'bitbucket':
      return <SiBitbucket />;
    default:
      return <IoShareSocialOutline />;
  }
};

export default SocialIconComponent;
