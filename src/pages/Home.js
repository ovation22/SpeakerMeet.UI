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
import FindABanner from '../components/FindABanner';

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
              Search
            </Typography>
            <Typography variant="h6" gutterBottom>
              The Industry&apos;s Directory
            </Typography>
            <Typography>
              The right speaker can energize and engage an audience in ways that can spell the
              difference between a successful conference and a forgettable one. Whether you&apos;re
              in search of a full-time professional speaker or a specific subject-matter expert,
              SpeakerMeet can help make your event a success.
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
              Our goal is to streamline the scheduling process from end-to-end. Rather than
              searching for an appropriate speaker, tracking down contact information, requesting
              availability, and then hoping that someone sees your message, we have consolidated
              everything you need into one convenient location. Your only concerns are who and when.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <RecordVoiceOverIcon className={classes.sectionIcon} />
              Schedule
            </Typography>
            <Typography variant="h6" gutterBottom>
              Speakers and Conferences
            </Typography>
            <Typography>
              Once you find the perfect speaker, you can schedule and then manage every aspect of
              your event from SpeakerMeet. No more searching emails, checking multiple calendars, or
              tracking down contact information at the last minute. It’s all here, at a glance.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <FindABanner text="Speaker" />
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
              SpeakerMeet wasn&apos;t created for only scheduling speakers. It&apos;s also a
              platform for speakers to manage engagements and promote their brand. As a Speaker, you
              can share information with audiences between events or integrate your personal site.
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
              Our communities allow you to take part in larger discussions and reach your audience
              even after the conference ends. SpeakerMeet communities are a great place to get
              interactive feedback on your presentations or share information.
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
              Keeping pace with an ever-changing industry can be difficult. Want a daily update on
              .NET events in your state? A summary of upcoming web application conferences? Select
              your interests and manage your notifications however you like. You can receive them by
              any of the major push platforms or keep them all here in your dashboard. We fit your
              working style.
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
