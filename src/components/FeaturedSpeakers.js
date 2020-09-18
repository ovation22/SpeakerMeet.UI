import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ErrorSnackbar from './ErrorSnackbar';
import FeaturedPost from './FeaturedPost';
import useSpeakers from '../hooks/useSpeakers';

export default function FeaturedSpeakers() {
  const { speakers, error, isLoaded } = useSpeakers();

  return (
    <>
      <Typography variant="h4" style={{ padding: 24 }}>
        Featured Speakers
      </Typography>

      <ErrorSnackbar error={error} />

      <Grid container spacing={4}>
        {!isLoaded ? (
          <Grid item xs={12} md={12}>
            <CircularProgress style={{ align: 'center' }} />
          </Grid>
        ) : (
          speakers.map(post => (
            <Grid item key={post.name} xs={12} sm={6} md={3} lg={3}>
              <FeaturedPost post={post} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
