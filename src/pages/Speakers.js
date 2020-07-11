import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from '../components/FeaturedPost';

const useStyles = makeStyles(theme => ({
  findASpeaker: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
}));

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

export default function Speakers() {
  const classes = useStyles();

  return (
    <>
      {/*
      // todo: extract component
      */}
      <div className={classes.findASpeaker}>
        <Typography variant="h4">Find a Speaker</Typography>
      </div>

      {/*
      // todo: extract component
      */}
      <Container maxWidth="lg" style={{ padding: 24 }}>
        <Grid container spacing={4}>
          {featuredPosts.map(post => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={4}>
          {featuredPosts.map(post => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
