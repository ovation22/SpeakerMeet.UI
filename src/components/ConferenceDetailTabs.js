import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: 500,
  },
});

export default function ConferenceDetailTabs() {
  const classes = useStyles();
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
          <TabPanel value="1">Item Two</TabPanel>
          <TabPanel value="2">Item Three</TabPanel>
          <TabPanel value="3">Item Four</TabPanel>
        </TabContext>
      </Paper>
    </>
  );
}
