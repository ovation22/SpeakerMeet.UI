import React from 'react';
import * as PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function SocialLinks({ socialPlatforms }) {
  const classes = useStyles();

  // const platformIcons = {
  //   facebook: Facebook,
  //   twitter: Twitter,
  //   github: GitHub,
  // };
  const getPlatformIcon = name => {
    return Icons[name] || Icons.Link; // platformIcons[name.toLowerCase()] || Link;
  };

  return (
    <ul className={classes.root}>
      {socialPlatforms.map(social => {
        const PlatformIcon = getPlatformIcon(social.name);

        return (
          // TODO: can name be duplicated?
          <IconButton key={`${social.name}`} href={social.url} aria-label={social.name}>
            <PlatformIcon />
          </IconButton>
        );
      })}
    </ul>
  );
}

SocialLinks.propTypes = {
  socialPlatforms: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, url: PropTypes.string }),
  ).isRequired,
};

export default SocialLinks;
