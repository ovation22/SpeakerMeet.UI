import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import routes from '../constants/routes';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    height: 450,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(3),
    paddingRight: 0,
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      width: 600,
    },
    [theme.breakpoints.down('sm')]: {
      width: 320,
    },
  },
}));

export default function HomeHeroSection(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      <img style={{ display: 'none' }} src={post.image} alt={post.imageText} />
      <div className={classes.overlay} />
      <Container maxWidth="lg">
        <Grid>
          <Grid item md={6}>
            <Slide direction="right" in mountOnEnter timeout={1400}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h1" color="inherit" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="h2" color="inherit" paragraph>
                  {post.description}
                </Typography>
                <Link variant="subtitle1" href={routes.speakers.path}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/FindAndBook.png`}
                    alt=""
                    width="212"
                    height="60"
                  />
                </Link>
              </div>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

HomeHeroSection.defaultProps = {
  post: null,
};

HomeHeroSection.propTypes = {
  post: PropTypes.shape(),
};
