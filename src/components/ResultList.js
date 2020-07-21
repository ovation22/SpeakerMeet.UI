import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Grid from '@material-ui/core/Grid';
import FlippedItem from './FlippedItem';
import { withStyles } from '@material-ui/core';

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
      type: 'grid',
      sort: 'random',
      filteredIds: [],
      stagger: 'forward',
      spring: 'veryGentle',
      data: props.data,
    };
  }

  render() {
    const { classes } = this.props;
    const { data, type, sort, stagger, filteredIds, spring } = this.state;

    return (
      <Flipper
        flipKey={`${type}-${sort}-${JSON.stringify(filteredIds)}-${JSON.stringify(stagger)}`}
        spring={spring}
        staggerConfig={{
          default: {
            reverse: stagger !== 'forward',
            speed: 2,
          },
        }}
        decisionData={this.state}
      >
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

        <Flipped flipId="list">
          <Flipped inverseFlipId="list">
            <Grid className="list-contents" style={{ listStyleType: 'none', display: 'inline' }}>
              {[...data]
                .filter(d => !filteredIds.includes(d.id))
                .sort((a, b) => {
                  if (sort === 'asc') {
                    return a.title.localeCompare(b.title);
                  }
                  if (sort === 'desc') {
                    return b.title.localeCompare(a.title);
                  }
                  return 0.5 - Math.random();
                })
                .map(d => (
                  <FlippedItem
                    id={d.id}
                    title={d.title}
                    stagger={['forward', 'reverse'].includes(stagger)}
                    type={type}
                    key={d.id}
                    post={d}
                  />
                ))}
            </Grid>
          </Flipped>
        </Flipped>
      </Flipper>
    );
  }
}

ResultList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);
