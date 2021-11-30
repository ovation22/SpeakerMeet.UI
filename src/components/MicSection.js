import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import endpoints from '../constants/endpoints';
import { trackException } from '../services/telemetry.service';
import ErrorSnackbar from './ErrorSnackbar';

const useStyles = makeStyles(() => ({
  micSection: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/mic.png)`,
    minHeight: 515,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    color: 'white',
  },
  count: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
}));

export default function MicSection() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [stats, setStats] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.stats);
        const result = await response.json();
        if (response.ok) {
          setStats(result);
        } else {
          throw new Error(result);
        }
      } catch (e) {
        setError(e);
        trackException(e);
      }
      setLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <Paper className={classes.micSection} square>
      {!isLoaded ? (
        <CircularProgress />
      ) : (
        <Container maxWidth="lg" style={{ padding: 24 }} ref={ref}>
          {stats && (
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
              style={{ height: 515 }}
            >
              <Grid item xs={12} md={4} align="center">
                <CountUp start={0} end={inView ? stats.speakerCount : 0} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} className={classes.count} />
                      <br />
                      <span className={classes.text}>Speakers Worldwide</span>
                    </div>
                  )}
                </CountUp>
              </Grid>
              <Grid item xs={12} md={4}>
                <CountUp start={0} end={inView ? stats.communityCount : 0} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} className={classes.count} />
                      <br />
                      <span className={classes.text}>Communities Added</span>
                    </div>
                  )}
                </CountUp>
              </Grid>
              <Grid item xs={12} md={4}>
                <CountUp start={0} end={inView ? stats.conferenceCount : 0} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} className={classes.count} />
                      <br />
                      <span className={classes.text}>Conferences Listed</span>
                    </div>
                  )}
                </CountUp>
              </Grid>
            </Grid>
          )}
        </Container>
      )}
      <ErrorSnackbar error={error} />
    </Paper>
  );
}
