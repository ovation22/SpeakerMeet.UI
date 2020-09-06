import React from 'react';
import * as PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';

function SocialLinks({ socialPlatforms }) {
  return socialPlatforms.map(social => {
    return (
      // TODO: can name be duplicated?
      <IconButton key={`${social.name}`} href={social.url}>
        <Facebook />
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
