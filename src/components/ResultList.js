import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';

const styles = theme => ({
  fieldSet: {
    borderColor: theme.palette.primary.light,
    margin: theme.spacing(0, 0, 2, 0),
  },
});

class ResultList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: props.orderBy,
    };
  }

  render() {
    const { classes, data } = this.props;
    const { sort } = this.state;

    return (
      <>
        <fieldset className={classes.fieldSet}>
          <legend>Sort</legend>
          <label
            htmlFor="asc"
            role="presentation"
            onClick={() => {
              this.setState({ sort: 'asc' });
            }}
            onKeyUp={() => {
              this.setState({ sort: 'asc' });
            }}
          >
            <input id="asc" type="radio" name="sort" defaultChecked={sort === 'asc'} />
            asc
          </label>
          <label
            htmlFor="desc"
            role="presentation"
            onClick={() => {
              this.setState({ sort: 'desc' });
            }}
            onKeyUp={() => {
              this.setState({ sort: 'desc' });
            }}
          >
            <input id="desc" type="radio" name="sort" defaultChecked={sort === 'desc'} />
            desc
          </label>
        </fieldset>

        <Grid className="list-contents" style={{ listStyleType: 'none', display: 'inline' }}>
          {[...data].map(d => (
            <Grid item style={{ display: 'inline-flex' }} xs={12} md={3}>
              <FeaturedPost post={d} style={{ width: 345, margin: 12 }} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

ResultList.defaultProps = {
  orderBy: 'random',
};

ResultList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  classes: PropTypes.shape().isRequired,
  orderBy: PropTypes.string,
};

export default withStyles(styles)(ResultList);
