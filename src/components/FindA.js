import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  findA: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
}));

export default function FindA(props) {
  const classes = useStyles();
  const { text } = props;

  return (
    <div className={classes.findA}>
      <Typography variant="h4">{`Find a ${text}`}</Typography>
    </div>
  );
}

FindA.propTypes = {
  text: PropTypes.string.isRequired,
};
