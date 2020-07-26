import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Paper from '@material-ui/core/Paper/Paper';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeHeroSection from '../components/HomeHeroSection';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import FindASpeaker from '../components/FindASpeaker';

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    fontSize: 35,
    marginBottom: theme.spacing(4),
    textTransform: 'uppercase',
    letterSpacing: 0,
    fontWeight: 400,
  },
  sectionIcon: {
    fontSize: 40,
    color: theme.palette.primary.main,
    verticalAlign: 'bottom',
    marginRight: 6,
  },
  findASpeaker: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
  micSection: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/mic.png)`,
    minHeight: 515,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  },
}));

const mainFeaturedPost = {
  title: 'Speaker and Conference',
  description: "Find out why SpeakerMeet is the best speaker's resource on the web!",
  image: `${process.env.PUBLIC_URL}/images/hero-speaker.jpg`,
};

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <HomeHeroSection post={mainFeaturedPost} />
      <Container maxWidth="lg" style={{ padding: 24 }}>
        <Typography variant="h2" gutterBottom className={classes.sectionTitle}>
          How It Works
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <SearchIcon className={classes.sectionIcon} />
              Find
            </Typography>
            <Typography variant="h6" gutterBottom>
              The Industry&apos;s Directory
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <GroupAddIcon className={classes.sectionIcon} />
              Connect
            </Typography>
            <Typography variant="h6" gutterBottom>
              Easy Interaction
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <RecordVoiceOverIcon className={classes.sectionIcon} />
              Book
            </Typography>
            <Typography variant="h6" gutterBottom>
              Speakers and Conferences
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <FindASpeaker />
      <Container maxWidth="lg" style={{ padding: 24 }}>
        <FeaturedSpeakers />
      </Container>
      <Container maxWidth="lg" style={{ padding: 24 }}>
        <Typography variant="h2" gutterBottom className={classes.sectionTitle}>
          Who it&apos;s for
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} align="left">
            <img src={`${process.env.PUBLIC_URL}/images/crowd.png`} width="100%" alt="" />
          </Grid>
          <Grid item xs={12} md={6} align="left">
            <Typography variant="h4" align="left">
              <SearchIcon className={classes.sectionIcon} />
              Speakers
            </Typography>
            <Typography variant="h6" gutterBottom>
              The Industry&apos;s Directory
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} align="left">
            <Typography variant="h4" align="left">
              <GroupAddIcon className={classes.sectionIcon} />
              Communities
            </Typography>
            <Typography variant="h6" gutterBottom>
              Easy Interaction
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} align="left">
            <img src={`${process.env.PUBLIC_URL}/images/crowd-close.png`} width="100%" alt="" />
          </Grid>

          <Grid item xs={12} md={6} align="left">
            <img src={`${process.env.PUBLIC_URL}/images/crowd.png`} width="100%" alt="" />
          </Grid>

          <Grid item xs={12} md={6} align="left">
            <Typography variant="h4" align="left">
              <RecordVoiceOverIcon className={classes.sectionIcon} />
              Conferences
            </Typography>
            <Typography variant="h6" gutterBottom>
              Speakers and Conferences
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Paper className={classes.micSection} />

      <Container maxWidth="lg" style={{ padding: 24 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <SearchIcon className={classes.sectionIcon} />
              Speakers
            </Typography>
            <Typography variant="h6" gutterBottom>
              The Industry&apos;s Directory
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <GroupAddIcon className={classes.sectionIcon} />
              Communities
            </Typography>
            <Typography variant="h6" gutterBottom>
              Easy Interaction
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <RecordVoiceOverIcon className={classes.sectionIcon} />
              Conferences
            </Typography>
            <Typography variant="h6" gutterBottom>
              Speakers and Conferences
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
