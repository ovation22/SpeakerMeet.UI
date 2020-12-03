import { CircularProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Disqus from 'disqus-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import ConferenceDetailTabs from '../components/ConferenceDetailTabs';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FeaturedConferences from '../components/FeaturedConferences';
import FindABanner from '../components/FindABanner';
import config from '../constants/config';
import endpoints from '../constants/endpoints';
import routes from '../constants/routes';
import { trackException } from '../services/telemetry.service';
import ConferenceCard from '../components/ConferenceCard';

export default function ConferenceDetail() {
  const { slug } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [conference, setConference] = useState(null);
  const disqusShortname = config.disqusShortName;
  const disqusConfig = {
    url: config.url,
    identifier: slug,
    title: slug,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoints.conferences}/${slug}`);
        const result = await response.json();
        if (response.ok) {
          setConference(result);
        } else {
          throw new Error(result);
        }
      } catch (e) {
        setConference({
          id: '00000000-0000-0000-0000-000000000000',
          name: 'Not Found',
          socialPlatforms: [],
          tags: [],
        });
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Conferences</title>
      </Helmet>

      <FindABanner text="Conference" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? (
          <CircularProgress />
        ) : (
          <>
            <Helmet>
              <title>SpeakerMeet | {conference.name}</title>
            </Helmet>
            <BreadCrumbs />
            <Grid container spacing={4}>
              <Grid item xs={12} style={{ marginBottom: 48 }}>
                <ConferenceCard
                  key={conference.name}
                  post={{
                    ...conference,
                    path: `${routes.conferences.path}/${slug}`,
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginBottom: 48 }}>
              <ConferenceDetailTabs id={conference.id} />
            </Grid>

            <Grid item xs={12} style={{ marginBottom: 64 }}>
              <Typography variant="h4" style={{ padding: 24 }}>
                Comments
              </Typography>

              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </Grid>

            <FeaturedConferences />
          </>
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
