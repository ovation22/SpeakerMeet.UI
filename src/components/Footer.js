import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

function Copyright() {
  return (
    <Typography color="textSecondary">
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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 20),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { sections } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} align="left">
            {sections.map((section, i) => {
              return (
                <React.Fragment key={section.title}>
                  <Link
                    color="inherit"
                    noWrap
                    variant="body2"
                    href={section.url}
                    className={classes.toolbarLink}
                  >
                    {section.title}
                  </Link>
                  {i < sections.length - 1 ? ' | ' : ''}
                </React.Fragment>
              );
            })}
          </Grid>
          <Grid item xs={12} md={6} align="right">
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.defaultProps = {
  sections: null,
};

Footer.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape()),
};
