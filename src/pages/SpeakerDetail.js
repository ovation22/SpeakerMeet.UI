import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Disqus from 'disqus-react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { useLocation } from 'react-router-dom';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import FeaturedPost from '../components/FeaturedPost';
import speakers from '../constants/speakers';
import BreadCrumbs from '../components/BreadCrumbs';
import FindASpeaker from '../components/FindASpeaker';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SpeakerDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState('0');
  const location = useLocation();

  const speaker = speakers.find(x => location.pathname.endsWith(x.slug));

  const disqusShortname = process.env.REACT_APP_DISQUS_SHORT_NAME;
  const disqusConfig = {
    url: process.env.REACT_APP_URL,
    identifier: speaker.slug,
    title: speaker.title,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <FindASpeaker />

      <Container maxWidth="lg" style={{ padding: 24 }}>
        <BreadCrumbs />
        <Grid container spacing={4}>
          <FeaturedPost key={speaker.title} post={speaker} />
          <Chip size="small" label=".net" />
          <Chip size="small" label="tdd" />
          <Chip size="small" label="agile" />
        </Grid>
        <Paper className={classes.root}>
          <TabContext value={value}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab value="0" label="Item One" />
              <Tab value="1" label="Item Two" />
              <Tab value="2" label="Item Three" />
            </Tabs>
            <TabPanel value="0">Item One</TabPanel>
            <TabPanel value="1">Item Two</TabPanel>
            <TabPanel value="2">Item Three</TabPanel>
          </TabContext>
        </Paper>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </>
  );
}
