import React from 'react';
import * as PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
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

function Tags({ tags }) {
  const classes = useStyles();
  const tagList = tags.map(tag => {
    return (
      <li key={tag}>
        <Chip size="small" className={classes.chip} label={tag} />
      </li>
    );
  });

  return <ul className={classes.root}>{tagList}</ul>;
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
