import React from "react";

import AppContext from "../app/AppContext";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
        flexGrow: 1,
        '& > *': {
      margin: theme.spacing(3),
    }
  }
}));

function Form() {
  const classes = useStyles();

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
