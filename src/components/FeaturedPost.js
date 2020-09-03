import React from 'react';
import * as PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import LocationOn from '@material-ui/icons/LocationOn';
import config from '../constants/config';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: 'left',
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardMedia: {
    height: 280,
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
  cardDetail: {
    height: 145,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardViewProfile: {
    marginLeft: 'auto',
  },
}));

export default function FeaturedPost({ post, ...rest }) {
  const classes = useStyles();
  const altImage = `${process.env.PUBLIC_URL}/images/placeholder.png`;

  return (
    <Card className={classes.card} {...rest}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
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
          <Typography variant="subtitle1" paragraph className={classes.cardDetail}>
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button
          component={RouterLink}
          size="small"
          color="primary"
          className={classes.cardViewProfile}
          to={post.path}
        >
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
}

FeaturedPost.defaultProps = {
  post: null,
};

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
  }),
};
