import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from 'react';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function Communities() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(endpoints.communities)
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
    };
    fetchData();
  }, []);

  return (
    <>
      <FindABanner text="Community" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={communities} />}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
