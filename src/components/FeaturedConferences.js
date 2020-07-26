import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import FeaturedPost from './FeaturedPost';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';

export default function FeaturedConferences() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    (async () => {
      fetch(endpoints.conferencesFeatured)
        .then(res => res.json())
        .then(
          result => {
            const s = result.map(x => ({
              ...x,
              path: `${routes.conferences.path}/${x.slug}`,
            }));
            setConferences(s);
            setLoaded(true);
          },
          e => {
            setError(e);
            setLoaded(true);
          },
        );
    })();
  }, []);

  return (
    <>
      <Typography variant="h4" style={{ padding: 24 }}>
        Featured Conferences
      </Typography>

      {error && (
        <Snackbar open autoHideDuration={6000}>
          <Alert severity="error">
            Error:
            {error.message}
          </Alert>
        </Snackbar>
      )}
      <Grid container spacing={4}>
        {!isLoaded ? (
          <Grid item xs={12} md={12}>
            <CircularProgress style={{ align: 'center' }} />
          </Grid>
        ) : (
          conferences.map(post => (
            <Grid item key={post.name} xs={12} sm={6} md={3} lg={3}>
              <FeaturedPost post={post} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
