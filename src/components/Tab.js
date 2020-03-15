import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export const TAB_TYPE = {
  one: {
    id: 'section-one',
    label: 'Form 1'
  },
  two: {
    id: 'section-two',
    label: 'Form 2'
  },
  three: {
    id: 'section-three',
    label: 'Form 3'
  },
};

function Tabs() {
  const appContext = useContext(appContext);
  
  const { state, setState } = appContext;
  const { activeTabIndex, tabs } = state;

  const classes = useStyles();

  const handleChange = (event, activeTabIndex) => {
    console.log(tabs[activeTabIndex]);

    setState((prevState) => {
      return {
        ...prevState,
        activeTabIndex
      };
    })
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={activeTabIndex}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {
          tabs.map((tab) => {
            const { id, type } = tab;

            return (
              <Tab key={id} label={type} />
            );
          })
        }
      </Tabs>
    </Paper>
  );
}

export default Tabs;