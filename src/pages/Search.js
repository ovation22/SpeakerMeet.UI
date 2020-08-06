import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
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
    const fetchData = async () => {
      await fetch(`${endpoints.search}?terms=${terms}`)
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
    };
    fetchData();
  }, [terms]);

  return (
    <>
      <FindABanner text="Speaker, Conference, or Community" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={results} orderBy="score" />}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
