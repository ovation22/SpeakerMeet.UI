import { CircularProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Disqus from 'disqus-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import SpeakerDetailTabs from '../components/SpeakerDetailTabs';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import FindABanner from '../components/FindABanner';
import config from '../constants/config';
import routes from '../constants/routes';
import SpeakerCard from '../components/SpeakerCard';
import TwitterContainer from '../components/TwitterContainer';
import useSpeaker from '../hooks/useSpeaker';

const useStyles = makeStyles(theme => ({
  twitter: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    overflow: 'hidden',
  },
}));

export default function SpeakerDetail() {
  const classes = useStyles();
  const { slug } = useParams();
  const { error, isLoaded, speaker } = useSpeaker(slug);
  const disqusShortname = config.disqusShortName;
  const disqusConfig = {
    url: config.url,
    identifier: slug,
    title: slug,
  };

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Speakers</title>
      </Helmet>

      <FindABanner text="Speaker" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? (
          <CircularProgress />
        ) : (
          <>
            <Helmet>
              <title>SpeakerMeet | {speaker.name}</title>
            </Helmet>
            <BreadCrumbs />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={8} style={{ marginBottom: 48 }}>
                <SpeakerCard
                  key={speaker.name}
                  post={{
                    ...speaker,
                    path: `${routes.speakers.path}/${slug}`,
                  }}
                />
              </Grid>
              <Grid item sm={4} className={classes.twitter}>
                {speaker.socialPlatforms.find(x => x.name === 'Twitter') && (
                  <TwitterContainer
                    url={speaker.socialPlatforms.find(x => x.name === 'Twitter').url}
                  />
                )}
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginBottom: 48 }}>
              <SpeakerDetailTabs id={speaker.id} />
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
