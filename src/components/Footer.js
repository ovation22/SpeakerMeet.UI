import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import routes from '../constants/routes';

const useStyles = makeStyles(theme => ({
  footer: {
    color: grey[200],
  },
  footerMain: {
    width: '100%',
    minHeight: 400,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
  footerMenu: {
    backgroundColor: theme.palette.secondary.main,
  },
  footerLink: {
    transition: '0.3s',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.footerMain}>Footer</div>

      <div className={classes.footerMenu}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} align="left">
              {sections.map((section, i) => {
                return (
                  <Typography key={section.title} display="inline">
                    <Link
                      color="inherit"
                      to={section.url}
                      className={classes.footerLink}
                      component={RouterLink}
                    >
                      {section.title}
                    </Link>
                    {i < sections.length - 1 ? ' | ' : ''}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={12} md={6} align="right">
              <Typography>
                <Link
                  color="inherit"
                  to={routes.privacy.path}
                  className={classes.footerLink}
                  component={RouterLink}
                >
                  {routes.privacy.name}
                </Link>
                &nbsp;|&nbsp;
                <Link
                  color="inherit"
                  to={routes.terms.path}
                  className={classes.footerLink}
                  component={RouterLink}
                >
                  {routes.terms.name}
                </Link>
                &nbsp;|&nbsp;
                {'Copyright © '}
                <Link
                  color="inherit"
                  to="https://speakermeet.net/"
                  className={classes.footerLink}
                  component={RouterLink}
                >
                  SpeakerMeet
                </Link>
                &nbsp;
                {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  sections: null,
};

Footer.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape()),
};
