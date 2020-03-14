import React from "react";

import AppContext from "../app/AppContext";

import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  }
}));

function Buttons() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Form One
      </Button>
      <Button variant="contained" color="primary">
        Form Two
      </Button>
      <Button variant="contained" color="primary">
        Form Three
      </Button>
    </div>
    </Container>
  );
}

export default Buttons;
