import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import LocationOn from '@material-ui/icons/LocationOn';
import config from '../constants/config';
import SocialLinks from './SocialLinks';
import Tags from './Tags';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: 'left',
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardLocation: {
    height: 20,
    verticalAlign: 'middle',
    margin: theme.spacing(2, 0),
  },
  cardLocationIcon: {
    height: 20,
    verticalAlign: 'middle',
  },
  cardViewProfile: {
    marginLeft: 'auto',
  },
  container: {
    float: 'left',
    width: '100%',
  },
}));

export default function SpeakerCard({ post, ...rest }) {
  const classes = useStyles();
  const altImage = `${process.env.PUBLIC_URL}/images/placeholder.png`;

  return (
    <>
      <Card className={classes.card} {...rest}>
        <CardActionArea>
          <CardMedia
            src={`${config.images}/${post.slug}.png`}
            component="img"
            title={post.name}
            onError={e => {
              e.target.onerror = null;
              e.target.src = altImage;
            }}
          />
          <CardContent>
            <Typography component="h2" variant="h5" className={classes.cardTitle}>
              {post.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.cardLocation}>
              <LocationOn className={classes.cardLocationIcon} />
              {post.location}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <div className={classes.container}>
              <SocialLinks socialPlatforms={post.socialPlatforms} />
            </div>
            <div className={classes.container}>
              <Tags tags={post.tags} />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </>
  );
}

SpeakerCard.defaultProps = {
  post: null,
};

SpeakerCard.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    socialPlatforms: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, url: PropTypes.string }),
    ),
  }),
};
