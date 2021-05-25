import { CssBaseline, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";
import * as React from "react";

import ImageGallery from "./ImageGallery";

export default function EditRecipe() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container justify="center" spacing={0}>
        <Grid item xs={12}>
          <NavigationDesktop />
        </Grid>
        <Grid item xs={12} spacing={3} className={classes.main}>
          <Grid item lg={3} md={12} className={classes.gallery}>
            <ImageGallery />
            <Button variant="contained" className={classes.btnupload}>
              Upload Images
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = makeStyles(() => ({
  gallery: {
    backgroundColor: "white",
    padding: "25px",
    border: "solid",
    borderRadius: "8px",
  },
  main: {
    margin: "50px",
  },
  btnupload: {
    border: "2px dashed #979797",
    width: "100%",
    marginTop: "10px",
    backgroundColor: "white",
  },
}));
