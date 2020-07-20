import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import LocationOn from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    textAlign: 'left',
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardMedia: {
    height: 140,
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

export default function FeaturedPost({post, ...rest}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3} {...rest}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.cardMedia} image={post.image} title={post.imageText} />
          <CardContent>
            <Typography component="h2" variant="h5" className={classes.cardTitle}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.cardLocation}>
              <LocationOn className={classes.cardLocationIcon} />
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph className={classes.cardDetail}>
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <Button size="small" color="primary" className={classes.cardViewProfile} href={post.path}>
            View Profile
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

FeaturedPost.defaultProps = {
  post: null,
};

FeaturedPost.propTypes = {
  post: PropTypes.shape(),
};
