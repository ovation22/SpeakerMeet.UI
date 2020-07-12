import { Link, Route } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { emphasize } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  breadcrumbs: {
    marginBottom: theme.spacing(2),
  },
}));

const StyledBreadcrumb = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
    textTransform: 'uppercase',
  },
}))(Chip);

export default function BreadCrumbs() {
  const classes = useStyles();

  return (
    <Route>
      {({ location }) => {
        const paths = location.pathname.split('/').filter(x => x);
        return (
          <Breadcrumbs aria-label="Breadcrumb" className={classes.breadcrumbs}>
            <Link color="inherit" to="/" underline="none" style={{ textDecoration: 'none' }}>
              <StyledBreadcrumb label="Home" icon={<HomeIcon fontSize="small" />} clickable />
            </Link>
            {paths.map((value, index) => {
              const last = index === paths.length - 1;
              const to = `/${paths.slice(0, index + 1).join('/')}`;

              return last ? (
                <Typography color="textPrimary" key={to} style={{ textTransform: 'uppercase' }}>
                  {value}
                </Typography>
              ) : (
                <Link color="inherit" to={to} key={to} style={{ textDecoration: 'none' }}>
                  <StyledBreadcrumb label={value} clickable />
                </Link>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
}
