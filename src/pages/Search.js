import { CircularProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import useSearch from '../hooks/useSearch';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQuery();
  const terms = query.get('terms');
  const { error, isLoaded, results } = useSearch(terms);

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Search Results</title>
      </Helmet>

      <FindABanner text="Speaker, Conference, or Community" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? <CircularProgress /> : <ResultList data={results} orderBy="score" />}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
