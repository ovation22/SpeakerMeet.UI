import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ResultList from '../components/ResultList';
import routes from '../constants/routes';
import endpoints from '../constants/endpoints';

const useStyles = makeStyles(theme => ({
  findAConference: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: 'white',
  },
}));

export default function Conferences() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    (async () => {
      fetch(endpoints.conferences)
        .then(res => res.json())
        .then(
          result => {
            const s = result.map(x => ({
              ...x,
              path: `${routes.conferences.path}/${x.slug}`,
            }));
            setConferences(s);
            setLoaded(true);
          },
          e => {
            setError(e);
            setLoaded(true);
          },
        );
    })();
  }, []);

  if (error) {
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <div>Error:{error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/*
      // todo: extract component
      */}
      <div className={classes.findAConference}>
        <Typography variant="h4">Find a Conference</Typography>
      </div>

      <Container maxWidth="lg" style={{ padding: 24 }}>
        <ResultList data={conferences} />
      </Container>
    </>
  );
}
