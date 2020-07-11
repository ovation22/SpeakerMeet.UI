import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Router from '../components/Router';
import routes from '../constants/routes';

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  container: {
    padding: 0,
  },
}));

const sections = [
  { title: routes.root.name, url: routes.root.path },
  { title: routes.speakers.name, url: routes.speakers.path },
  { title: routes.communities.name, url: routes.communities.path },
  { title: routes.conferences.name, url: routes.conferences.path },
];

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <Header sections={sections} />
        <div className={classes.offset} />
        <main>
          <Router />
        </main>
      </Container>
      <Footer sections={sections} />
    </>
  );
}
