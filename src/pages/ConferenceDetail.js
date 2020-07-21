import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Disqus from 'disqus-react';
import { useLocation } from 'react-router-dom';
import FeaturedPost from '../components/FeaturedPost';
import conferences from '../constants/conferences';
import BreadCrumbs from '../components/BreadCrumbs';
import FindASpeaker from '../components/FindASpeaker';
import DetailTabs from '../components/DetailTabs';
import config from '../constants/config';

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

export default function ConferenceDetail() {
  const location = useLocation();
  const conference = conferences.find(x => location.pathname.endsWith(x.slug));

  const disqusShortname = config.disqusShortName;
  const disqusConfig = {
    url: config.url,
    identifier: conference.slug,
    title: conference.title,
  };

  return (
    <>
      <FindASpeaker />

      <Container maxWidth="lg" style={{ padding: 24 }}>
        <BreadCrumbs />
        <Grid container spacing={4}>
          <FeaturedPost key={conference.title} post={conference} />
          <Chip size="small" label=".net" />
          <Chip size="small" label="tdd" />
          <Chip size="small" label="agile" />
        </Grid>

        <DetailTabs rows={rows} />

        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </>
  );
}
