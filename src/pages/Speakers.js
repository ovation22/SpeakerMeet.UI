import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';

export default function Speakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.speakers);
        const json = await response.json();
        const result = json.map(x => ({
          ...x,
          path: `${routes.speakers.path}/${x.slug}`,
        }));
        setSpeakers(result);
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Speakers</title>
      </Helmet>

      <FindABanner text="Speaker" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={speakers} />}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
