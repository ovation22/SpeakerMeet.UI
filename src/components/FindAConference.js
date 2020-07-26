import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  findAConference: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
}));

export default function FindAConference() {
  const classes = useStyles();

  return (
    <div className={classes.findAConference}>
      <Typography variant="h4">Find a Conference</Typography>
    </div>
  );
}
