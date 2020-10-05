import { CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';
import ErrorSnackbar from './ErrorSnackbar';
import FeaturedPost from './FeaturedPost';

export default function FeaturedSpeakers() {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speakers, setSpeakers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoints.speakersFeatured);
      const data = await response.json();
      const result = data.map(x => ({
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

  useEffect(() => {
    fetchData();
  }, []);

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
