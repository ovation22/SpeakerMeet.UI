import React from 'react';
import * as PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Facebook, Link, Twitter, GitHub } from '@material-ui/icons';

function SocialLinks({ socialPlatforms }) {
  const platformIcons = {
    facebook: Facebook,
    twitter: Twitter,
    github: GitHub,
  };
  const getPlatformIcon = name => {
    return platformIcons[name.toLowerCase()] || Link;
  };
  return socialPlatforms.map(social => {
    const PlatformIcon = getPlatformIcon(social.name);

    return (
      // TODO: can name be duplicated?
      <IconButton key={`${social.name}`} href={social.url} aria-label={social.name}>
        <PlatformIcon />
      </IconButton>
    );
  });
}

SocialLinks.propTypes = {
  socialPlatforms: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string }),
  ).isRequired,
};

export default SocialLinks;
