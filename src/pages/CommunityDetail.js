import { CircularProgress } from '@material-ui/core';
import { Helmet } from 'react-helmet-async';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Disqus from 'disqus-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import CommunityDetailTabs from '../components/CommunityDetailTabs';
import ErrorSnackbar from '../components/ErrorSnackbar';
import FeaturedCommunities from '../components/FeaturedCommunities';
import FindABanner from '../components/FindABanner';
import config from '../constants/config';
import routes from '../constants/routes';
import CommunityCard from '../components/CommunityCard';
import useCommunity from '../hooks/useCommunity';

export default function CommunityDetail() {
  const { slug } = useParams();
  const { isLoaded, error, community } = useCommunity(slug);
  const disqusShortname = config.disqusShortName;
  const disqusConfig = {
    url: config.url,
    identifier: slug,
    title: slug,
  };

  return (
    <>
      <Helmet>
        <title>SpeakerMeet | Communities</title>
      </Helmet>

      <FindABanner text="Community" />

      <Container maxWidth="lg" style={{ padding: 24, minHeight: '100vh' }}>
        {!isLoaded ? (
          <CircularProgress />
        ) : (
          <>
            <Helmet>
              <title>SpeakerMeet | {community.name}</title>
            </Helmet>
            <BreadCrumbs />
            <Grid container spacing={4}>
              <Grid item xs={12} style={{ marginBottom: 48 }}>
                <CommunityCard
                  key={community.name}
                  post={{
                    ...community,
                    path: `${routes.communities.path}/${slug}`,
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ marginBottom: 48 }}>
              <CommunityDetailTabs id={community.id} />
            </Grid>

            <Grid item xs={12} style={{ marginBottom: 64 }}>
              <Typography variant="h4" style={{ padding: 24 }}>
                Comments
              </Typography>

              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </Grid>

            <FeaturedCommunities />
          </>
        )}
      </Container>

      <ErrorSnackbar error={error} />
    </>
  );
}
