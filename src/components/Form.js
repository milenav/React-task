import React, { useContext } from "react";

import AppContext from "../app/AppContext";
import { TAB_TYPE } from './Tab';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
        flexGrow: 1,
        '& > *': {
      margin: theme.spacing(3),
    }
  }
}));

function Form() {
  const appContext = useContext(appContext);
  const { setState, state } = appContext;

  const { activeTabIndex, tabs } = state;
  const activeTab = tabs[activeTabIndex];
  const { firstName, lastName } = activeTab.form;

  const classes = useStyles();

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    const tabsCopy = tabs.slice();

    tabsCopy[activeTabIndex].form = {
      ...tabsCopy[activeTabIndex].form,
      [name]: value
    };

    setState((prevState) => {
      return {
        ...prevState,
        tabs: tabsCopy
      }
    });
  }

  return (
    <Container maxWidth="sm">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-full-width"
          label="Label"
          placeholder="Placeholder"
          fullWidth
           />

<TextField id="standard-full-width"
          label="Label"
          placeholder="Placeholder"
          fullWidth
           />
        </form>
    </Container>
  );
}

export default Form;
