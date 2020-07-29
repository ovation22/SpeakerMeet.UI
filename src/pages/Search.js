import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ResultList from '../components/ResultList';
import routes from '../constants/routes';
import endpoints from '../constants/endpoints';
import FindA from '../components/FindA';
import { trackException } from '../services/telemetry.service';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [results, setResults] = useState([]);
  const query = useQuery();
  const terms = query.get('terms');

  useEffect(() => {
    (async () => {
      fetch(`${endpoints.search}?terms=${terms}`)
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
            trackException(e);
          },
        );
    })();
  }, [terms]);

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
      <FindA text="Speaker, Conference, or Community" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={results} orderBy="score" />}
      </Container>
    </>
  );
}
