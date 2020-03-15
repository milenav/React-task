import React from "react";

import AppContext from "../app/AppContext";

import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(2), 
    },
  }
}));


function Buttons() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.root}>

      <Button variant="contained" color="primary">
        Form 1
      </Button>
      <Button variant="contained" color="primary">
        Form 2
      </Button>
      <Button variant="contained" color="primary">
        Form 3
      </Button>

    </Container>
  );
}

export default Buttons;
