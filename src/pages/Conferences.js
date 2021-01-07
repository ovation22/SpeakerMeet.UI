import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import useConferences from '../hooks/useConferences';
import useQuery from '../hooks/useQuery';

export default function Conferences() {
  const {
    error,
    isLoaded,
    conferences,
    sortOrder,
    changeSortOrder,
    changePage,
    totalPages,
    pageNumber,
  } = useConferences();
  const query = useQuery();

  const requestedPageNumber = query.get('page');

  useEffect(() => {
    const parsed = parseInt(requestedPageNumber, 10);

    changePage(parsed || 1);
  }, [changePage, requestedPageNumber]);

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Conferences</title>
      </Helmet>

      <FindABanner text="Conference" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? (
          <CircularProgress data-testid="loading" />
        ) : (
          <ResultList
            data={conferences}
            sortOrder={sortOrder}
            changeSortOrder={changeSortOrder}
            changePage={changePage}
            totalPages={totalPages}
            pageNumber={pageNumber}
          />
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
