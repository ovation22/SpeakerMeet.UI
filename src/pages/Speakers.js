import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FindABanner from '../components/FindABanner';
import ResultList from '../components/ResultList';
import useSpeakers from '../hooks/useSpeakers';

const useStyles = makeStyles({
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function Speakers() {
  const { speakers, error, isLoaded, changePage, totalPages } = useSpeakers();
  const classes = useStyles();
  // TODO: Page number into route

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
              className={classes.pagination}
              count={totalPages}
              color="primary"
              showFirstButton
              showLastButton
              onChange={(e, value) => changePage(value)}
            />
          </>
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
