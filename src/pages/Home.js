import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeHeroSection from '../components/HomeHeroSection';
import FeaturedPost from '../components/FeaturedPost';

const useStyles = makeStyles(theme => ({
  howItWorks: {
    fontSize: 35,
    marginBottom: theme.spacing(4),
    textTransform: 'uppercase',
    letterSpacing: 0,
    fontWeight: 400,
  },
  howItWorksIcons: {
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
}));

const mainFeaturedPost = {
  title: 'Speaker and Conference',
  description: "Find out why SpeakerMeet is the best speaker's resource on the web!",
  image: `${process.env.PUBLIC_URL}/images/hero-speaker.jpg`,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'John Callaway',
    date: 'Tampa, FL',
    description:
      'An International Speaker, Author, and Microsoft MVP, John has been a professional developer since 1999. He has focused primarily on web technologies and currently focuses on C# and .NET Core in Azure. Clean code and professionalism are particularly important to him, as well as mentoring and teaching others what he has learned along the way.',
    image: 'https://source.unsplash.com/random',
    imageText: 'John Callaway',
  },
  {
    title: 'Jon Ash',
    date: 'Columbus, OH',
    description:
      'Jon has been a web developer since 2011 and a professional consultant since 2006. Coming from the aerospace industry he brings a passion for professionalism and excellence. He has a broad experience in current web technologies, with a strong foundation in C# and JavaScript. Though working knowledge of technologies are important, he takes pride in practicing and promoting clean code, adherence to the SOLID principles, and disciplines such as Test Driven Development.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Jon Ash',
  },
  {
    title: 'Clayton Hunt',
    date: 'Tampa, FL',
    description:
      'Clayton has been programming professionally since 2005 doing mostly web development with an emphasis on JavaScript and C#. He has a focus Software Craftsmanship and is a signatory of both the Agile Manifesto and the Software Craftsmanship manifesto. He believes that through short iterations and the careful gathering of requirements that we can deliver the highest quality and the most value in the shortest time. He enjoys learning and encouraging other to continuously improve themselves.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Clayton Hunt',
  },
  {
    title: 'Gaines Kergosien',
    date: 'Nashville, TN',
    description:
      'VP Corporate Systems Development at AllianceBernstein, Music City Tech Organizer, and Darth Vader impersonator.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Gaines Kergosien',
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <HomeHeroSection post={mainFeaturedPost} />
      <Container maxWidth="lg" style={{ padding: 24 }}>
        <Typography variant="h2" gutterBottom className={classes.howItWorks}>
          How It Works
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4} align="left">
            <Typography variant="h4" align="left">
              <SearchIcon className={classes.howItWorksIcons} />
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
              <GroupAddIcon className={classes.howItWorksIcons} />
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
              <RecordVoiceOverIcon className={classes.howItWorksIcons} />
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

      {/*
      // todo: extract component
      */}
      <div className={classes.findASpeaker}>
        <Typography variant="h4">Find a Speaker</Typography>
      </div>

      <Container maxWidth="lg" style={{ padding: 24 }}>
        <Typography variant="h4" style={{ padding: 24 }}>
          Featured Speakers
        </Typography>

        {/*
          // todo: extract component
        */}
        <Grid container spacing={4}>
          {featuredPosts.map(post => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
