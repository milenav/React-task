import React, { useContext } from "react";

import AppContext from "../app/AppContext";
import { TAB_TYPE } from "./Tab";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2)
    }
  }
}));

function Buttons() {
  const appContext = useContext(AppContext);
  const { state, setState } = appContext;

  const classes = useStyles();

  const addNewTab = tabType => {
    const newTab = {
      type: tabType,
      id: state.tabs.length,
      form: {}
    };

    setState(prevState => {
      return {
        ...prevState,
        tabs: [...prevState.tabs, newTab]
      };
    });
  };

  return (
    <Grid container justify="center" className={classes.root}>
      <Button
        onClick={() => addNewTab(TAB_TYPE.one.id)}
        variant="contained"
        color="primary"
      >
        {TAB_TYPE.one.label}
      </Button>
      <Button
        onClick={() => addNewTab(TAB_TYPE.two.id)}
        variant="contained"
        color="primary"
      >
        {TAB_TYPE.two.label}
      </Button>
      <Button
        onClick={() => addNewTab(TAB_TYPE.three.id)}
        variant="contained"
        color="primary"
      >
        {TAB_TYPE.three.label}
      </Button>
    </Grid>
  );
}

export default Buttons;
