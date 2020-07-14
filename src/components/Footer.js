import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import routes from '../constants/routes';

function Copyright() {
  return (
    <Typography>
      <Link color="inherit" href={routes.privacy.path}>
        {routes.privacy.name}
      </Link>
      &nbsp;|&nbsp;
      <Link color="inherit" href={routes.terms.path}>
        {routes.terms.name}
      </Link>
      &nbsp;|&nbsp;
      {'Copyright © '}
      <Link color="inherit" href="https://speakermeet.net/">
        SpeakerMeet
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

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
}));

export default function Footer(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <footer className={classes.footer}>
      <div className={classes.footerMain}>asdf</div>

      <div className={classes.footerMenu}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} align="left">
              {sections.map((section, i) => {
                return (
                  <Typography key={section.title} display="inline">
                    <Link color="inherit" noWrap href={section.url} className={classes.toolbarLink}>
                      {section.title}
                    </Link>
                    {i < sections.length - 1 ? ' | ' : ''}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={12} md={6} align="right">
              <Copyright />
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
