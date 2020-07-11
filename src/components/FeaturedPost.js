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

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    textAlign: 'left',
  },
  cardDetails: {},
  cardMedia: {
    height: 140,
  },
  description: {
    height: 147,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.cardMedia} image={post.image} title={post.imageText} />
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph className={classes.description}>
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
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
