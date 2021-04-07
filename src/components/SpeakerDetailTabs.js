import React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';
import ErrorSnackbar from './ErrorSnackbar';
import usePresentations from '../hooks/usePresentations';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: 500,
  },
});

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function SpeakerDetailTabs({ id: speakerId }) {
  const classes = useStyles();
  const { isLoaded, error, presentations } = usePresentations(speakerId);
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper className={classes.root}>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab value="0" label="Detail" />
            <Tab value="1" label="Talks" />
            <Tab value="2" label="Reviews" />
            <Tab value="3" label="Contact" />
          </Tabs>
          <TabPanel value="0">Item One</TabPanel>
          <TabPanel value="1">
            {!isLoaded ? (
              <CircularProgress />
            ) : (
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody stripedRows>
                    {presentations.map(row => (
                      <StyledTableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </TabPanel>
          <TabPanel value="2">Item Three</TabPanel>
          <TabPanel value="3">Item Four</TabPanel>
        </TabContext>
      </Paper>

      <ErrorSnackbar error={error} />
    </>
  );
}

SpeakerDetailTabs.propTypes = {
  id: PropTypes.string.isRequired,
};
