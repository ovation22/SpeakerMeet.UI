import React from 'react';
import * as PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Facebook, Link, Twitter, LinkedIn, GitHub, Reddit } from '@material-ui/icons';

function SocialLinks({ socialPlatforms }) {
  const getPlatformIcon = name => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return Facebook;
      case 'twitter':
        return Twitter;
      case 'linkedin':
        return LinkedIn;
      case 'github':
        return GitHub;
      case 'reddit':
        return Reddit;
      default:
        return Link;
    }
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
