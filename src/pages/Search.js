import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  findASpeaker: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <>
      {/*
      // todo: extract component
      */}
      <div className={classes.findASpeaker}>
        <Typography variant="h4">Find a Speaker</Typography>
      </div>

      {/*
      // todo: extract component
      */}
      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        search results
      </Container>
    </>
  );
}
