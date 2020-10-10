import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import useSpeakers from '../hooks/useSpeakers';

export default function Speakers() {
  const { speakers, error, isLoaded, previousPage, nextPage, isFirstPage } = useSpeakers();

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
            <IconButton aria-label="previous page" onClick={previousPage} disabled={isFirstPage}>
              <NavigateBefore />
            </IconButton>
            <IconButton aria-label="next page" onClick={nextPage}>
              <NavigateNext />
            </IconButton>
          </>
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
