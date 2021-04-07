import { CircularProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Disqus from 'disqus-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import ConferenceDetailTabs from '../components/ConferenceDetailTabs';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FeaturedConferences from '../components/FeaturedConferences';
import FindABanner from '../components/FindABanner';
import config from '../constants/config';
import routes from '../constants/routes';
import ConferenceCard from '../components/ConferenceCard';
import useConference from '../hooks/useConference';

export default function ConferenceDetail() {
  const { slug } = useParams();
  const { error, isLoaded, conference } = useConference(slug);
  const disqusShortname = config.disqusShortName;
  const disqusConfig = {
    url: config.url,
    identifier: slug,
    title: slug,
  };

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
