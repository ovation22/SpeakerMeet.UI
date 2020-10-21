import { CircularProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import useSearch from '../hooks/useSearch';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const { isLoaded, error, results, search, changePage, changeSortOrder, totalPages } = useSearch();

  const query = useQuery();
  const terms = query.get('terms');

  useEffect(() => {
    search(terms);
  }, [search, terms]);

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Search Results</title>
      </Helmet>

      <FindABanner text="Speaker, Conference, or Community" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? (
          <CircularProgress />
        ) : (
          <ResultList
            data={results}
            orderBy="score"
            changePage={changePage}
            changeSortOrder={changeSortOrder}
            totalPages={totalPages}
          />
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
