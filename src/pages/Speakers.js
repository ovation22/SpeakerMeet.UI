import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ResultList from '../components/ResultList';
import routes from '../constants/routes';
import endpoints from '../constants/endpoints';
import FindA from '../components/FindA';
import { trackException } from '../services/telemetry.service';

export default function Speakers() {
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
      <FindA text="Speaker" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={speakers} />}
      </Container>
    </>
  );
}
