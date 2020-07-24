import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ResultList from '../components/ResultList';
import routes from '../constants/routes';
import endpoints from '../constants/endpoints';

const useStyles = makeStyles(theme => ({
  findASpeaker: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Speakers() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    (async () => {
      fetch(endpoints.speakers)
        .then(res => res.json())
        .then(
          result => {
            const s = result.map(x => ({
              ...x,
              path: `${routes.speakers.path}/${x.slug}`,
            }));
            setSpeakers(s);
            setLoaded(true);
          },
          e => {
            setError(e);
            setLoaded(true);
          },
        );
    })();
  }, []);

  if (error) {
    return (
      <Snackbar open autoHideDuration={6000}>
        <Alert severity="error">
          Error:
          {error.message}
        </Alert>
      </Snackbar>
    );
  }
  return (
    <>
      {/*
      // todo: extract component
      */}
      <div className={classes.findASpeaker}>
        <Typography variant="h4">Find a Speaker</Typography>
      </div>

      <Container maxWidth="lg" style={{ padding: 24, height: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={speakers} />}
      </Container>
    </>
  );
}
