import React, { Fragment, useContext } from "react";

import AppContext from "../app/AppContext";
import Form from "./Form";

import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

function View() {
  const appContext = useContext(AppContext);
  const { tabs, activeTabIndex } = appContext.state;

  return (
    <Container maxWidth="sm">
      <Grid container justify="center">
        {
        tabs && tabs.length > 0 ? (
          <Fragment>
            <h4>TAB: {activeTabIndex + 1}</h4>
            <Form />
          </Fragment>
            ) : (
            <h4>Use the buttons below to open a new tab</h4>
            )
        }
      </Grid>
    </Container>
  );
}

export default View;
