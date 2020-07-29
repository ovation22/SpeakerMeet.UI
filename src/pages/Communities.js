import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ResultList from '../components/ResultList';
import routes from '../constants/routes';
import endpoints from '../constants/endpoints';
import { trackException } from '../services/telemetry.service';
import FindA from '../components/FindA';

export default function Communities() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    (async () => {
      fetch(endpoints.communities)
        .then(res => res.json())
        .then(
          result => {
            const s = result.map(x => ({
              ...x,
              path: `${routes.communities.path}/${x.slug}`,
            }));
            setCommunities(s);
            setLoaded(true);
          },
          e => {
            setError(e);
            setLoaded(true);
            trackException(e);
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
      <FindA text="Community" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={communities} />}
      </Container>
    </>
  );
}
