import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  findASpeaker: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
}));

export default function FindASpeaker() {
  const classes = useStyles();

  return (
    <div className={classes.findASpeaker}>
      <Typography variant="h4">Find a Speaker</Typography>
    </div>
  );
}
