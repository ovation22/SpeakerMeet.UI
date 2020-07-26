import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ResultList from '../components/ResultList';
import routes from '../constants/routes';
import endpoints from '../constants/endpoints';

const useStyles = makeStyles(theme => ({
  findAConference: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const query = useQuery();

  useEffect(() => {
    (async () => {
      fetch(`${endpoints.search}?terms=${query.get('terms')}`)
        .then(res => res.json())
        .then(
          result => {
            const s = result.results.map(x => ({
              ...x.document,
              score: x.score,
              path: `${
                // eslint-disable-next-line no-nested-ternary
                x.document.type === 'Speaker'
                  ? routes.speakers.path
                  : x.document.type === 'Conference'
                  ? routes.conferences.path
                  : routes.communities.path
              }/${x.document.slug}`,
            }));
            setResults(s);
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
      <div className={classes.findAConference}>
        <Typography variant="h4">Find a Speaker, Conference, or Community</Typography>
      </div>

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={results} orderBy="score" />}
      </Container>
    </>
  );
}
