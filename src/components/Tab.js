import React, { useContext } from "react";

import AppContext from "../app/AppContext";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export const TAB_TYPE = {
  one: {
    id: "section-1",
    label: "Form 1"
  },
  two: {
    id: "section-2",
    label: "Form 2"
  },
  three: {
    id: "section-3",
    label: "Form 3"
  }
};

function AppTabs() {
  const appContext = useContext(AppContext);

  const { state, setState } = appContext;
  const { activeTabIndex, tabs } = state;

  const classes = useStyles();

  const handleChange = (e, activeTabIndex) => {
    setState(prevState => {
      return {
        ...prevState,
        activeTabIndex
      };
    });
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
          tabs.map(tab => {
            const { id, type } = tab;

            return <Tab key={id} label={type} />;
          })
        }
      </Tabs>
    </Paper>
  );
}

export default AppTabs;
