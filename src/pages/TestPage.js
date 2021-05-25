import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";

const TestPage = () => {
  return (
    <>
      <CssBaseline />
      {/* <div style={{ backgroundColor: "yellowgreen", height: "100vh" }}> */}
      <Grid
        container
        style={{ backgroundColor: "yellowgreen", height: "100vh" }}
        justify="center"
      >
        {/* wrapper */}
        <Grid
          item
          xs={11}
          container
          justify="center"
          style={{ backgroundColor: "violet" }}
        >
          <Grid item xs style={{ backgroundColor: "aqua" }}>
            item 1
          </Grid>
          <Grid item xs style={{ backgroundColor: "grey" }}>
            item 2
          </Grid>
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  );
};

export default TestPage;
