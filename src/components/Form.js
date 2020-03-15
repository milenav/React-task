import React, { useContext } from "react";

import AppContext from "../app/AppContext";
import { TAB_TYPE } from "./Tab";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(3)
    }
  }
}));

function Form() {
  const appContext = useContext(AppContext);
  const { setState, state } = appContext;

  const { activeTabIndex, tabs } = state;
  const activeTab = tabs[activeTabIndex];
  const { firstName, lastName, email } = activeTab.form;

  const classes = useStyles();

  const handleFormInputChange = e => {
    const { name, value } = e.target;
    const tabsCopy = tabs.slice();

    tabsCopy[activeTabIndex].form = {
      ...tabsCopy[activeTabIndex].form,
      [name]: value
    };

    setState(prevState => {
      return {
        ...prevState,
        tabs: tabsCopy
      };
    });
  };

  return (
    <Grid container justify="center">
      <form className={classes.root} noValidate autoComplete="off">
        {
        activeTab.type === TAB_TYPE.one.id && (
          <TextField
            id="standard-full-width"
            name="email"
            label="Email"
            placeholder="Email"
            value={email || ""}
            onChange={handleFormInputChange}
            fullWidth
          />
        )
        }
        <TextField
          id="standard-full-width"
          name="firstName"
          label="First Name"
          placeholder="First Name"
          value={firstName || ""}
          onChange={handleFormInputChange}
          fullWidth
        />
        <TextField
          id="standard-full-width"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          value={lastName || ""}
          onChange={handleFormInputChange}
          fullWidth
        />
      </form>
    </Grid>
  );
}

export default Form;
