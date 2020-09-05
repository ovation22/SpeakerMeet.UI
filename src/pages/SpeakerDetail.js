import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Disqus from 'disqus-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import DetailTabs from '../components/DetailTabs';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import FindABanner from '../components/FindABanner';
import config from '../constants/config';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';
import SpeakerCard from '../components/SpeakerCard';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SpeakerDetail() {
  const { slug } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [speaker, setSpeaker] = useState(null);
  const disqusShortname = config.disqusShortName;
  const disqusConfig = {
    url: config.url,
    identifier: slug,
    title: slug,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoints.speakerDetail}/${slug}`);
        const result = await response.json();
        setSpeaker(result);
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <FindABanner text="Speaker" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? (
          <CircularProgress />
        ) : (
          <>
            <BreadCrumbs />
            <Grid container spacing={4}>
              <Grid item xs={12} style={{ marginBottom: 48 }}>
                <SpeakerCard
                  key={speaker.name}
                  post={{
                    ...speaker,
                    path: `${routes.speakers.path}/${speaker.slug}`,
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginBottom: 48 }}>
              <DetailTabs rows={rows} />
            </Grid>

            <Grid item xs={12} style={{ marginBottom: 64 }}>
              <Typography variant="h4" style={{ padding: 24 }}>
                Comments
              </Typography>

              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </Grid>

            <FeaturedSpeakers />
          </>
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
