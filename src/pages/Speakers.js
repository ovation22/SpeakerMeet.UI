import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Pagination } from '@material-ui/lab';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import useSpeakers from '../hooks/useSpeakers';

export default function Speakers() {
  const { speakers, error, isLoaded, loadPage, totalPages } = useSpeakers();

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Speakers</title>
      </Helmet>

      <FindABanner text="Speaker" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? (
          <CircularProgress data-testid="loading" />
        ) : (
          <>
            <ResultList data={speakers} />
            <Pagination
              count={totalPages}
              color="primary"
              showFirstButton
              showLastButton
              onChange={(e, value) => loadPage(value)}
            />
          </>
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
