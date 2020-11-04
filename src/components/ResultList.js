import React from 'react';
import * as PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { Pagination } from '@material-ui/lab';
import FeaturedPost from './FeaturedPost';

const useStyles = makeStyles(() => ({
  fieldSet: {
    // TODO: tests are throwing an error, theme is undefined
    // borderColor: theme.palette.primary.light,
    // margin: theme.spacing(0, 0, 2, 0),
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function ResultList({ data, sortOrder, changeSortOrder, changePage, totalPages, pageNumber }) {
  const classes = useStyles();

  return (
    <>
      <fieldset className={classes.fieldSet}>
        <legend>Sort</legend>
        <label
          htmlFor="asc"
          role="presentation"
          onClick={() => {
            changeSortOrder('asc');
          }}
          onKeyUp={() => {
            changeSortOrder('asc');
          }}
        >
          <input id="asc" type="radio" name="sort" defaultChecked={sortOrder === 'asc'} />
          asc
        </label>
        <label
          htmlFor="desc"
          role="presentation"
          onClick={() => {
            changeSortOrder('desc');
          }}
          onKeyUp={() => {
            changeSortOrder('desc');
          }}
        >
          <input id="desc" type="radio" name="sort" defaultChecked={sortOrder === 'desc'} />
          desc
        </label>
      </fieldset>

      <Grid className="list-contents" style={{ listStyleType: 'none', display: 'inline' }}>
        {data.map(dataItem => (
          <Grid key={dataItem.id} item style={{ display: 'inline-flex' }} xs={12} md={3}>
            <FeaturedPost post={dataItem} style={{ width: 345, margin: 12 }} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        className={classes.pagination}
        count={totalPages}
        color="primary"
        showFirstButton
        showLastButton
        onChange={(e, value) => changePage(value)}
        page={pageNumber}
      />
    </>
  );
}

ResultList.defaultProps = {
  sortOrder: '',
};

ResultList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sortOrder: PropTypes.string,
  changeSortOrder: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default ResultList;
