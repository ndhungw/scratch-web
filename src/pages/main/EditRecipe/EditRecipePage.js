import { CssBaseline, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

import InstructionCard from "./components/InstructionCard";
import IngredientsCard from "./components/IngredientsCard";
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";
import ImageGallery from "./ImageGallery";
import COLORS from "../../../constants/colors";
import AdditionalInfoCard from "./components/AdditionalInfoCard";

const directions = [
  {
    id: "d1",
    text: "cooking spray",
    avatarSrc: "", //
    userId: "user_01", //
  },
  {
    id: "d2",
    text: "1/2 cup whole milk",
    avatarSrc: "", //
    userId: "user_01", //
  },
  {
    id: "d3",
    text: "2 large eggs1 tablespoon maple syrup",
    avatarSrc: "", //
    userId: "user_01", //
  },
  {
    id: "d4",
    text: "1/2 teaspoon vanilla extract 1/2 teaspoon vanilla extract 1/2 teaspoon vanilla extract",
    avatarSrc: "", //
    userId: "user_01", //
  },
  {
    id: "d5",
    text: "1 pinch salt",
    avatarSrc: "", //
    userId: "user_01", //
  },
];

const EditRecipePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container justify="center" spacing={4}>
        <Grid
          item
          xs={12}
          // style={{ backgroundColor: "yellow" }}
        >
          <NavigationDesktop />
        </Grid>

        {/* wrapper */}
        <Grid
          item
          xs={12}
          lg={11}
          xl={10}
          container
          justify="center"
          spacing={4}
          // style={{ backgroundColor: "violet" }}
        >
          {/* Items left container */}
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            container
            // direction="column"
            style={{ backgroundColor: "aqua" }}
          >
            <Hidden smDown>
              <Grid
                item
                xs={12}
                // style={{ backgroundColor: "blue" }}
                className={classes.marginBottom}
              >
                <ImageGallery />
              </Grid>
            </Hidden>
          </Grid>

          {/* Items right container */}
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
            container
            // direction="column"
            // style={{ backgroundColor: "grey" }}
          >
            {/* Ingredients section */}
            <Grid
              item
              xs={12}
              className={classes.marginBottom}
              // style={{ backgroundColor: "red" }}
            >
              <IngredientsCard directions={directions} />
              {/* Image Gallery in small screen (<960) */}
              {/* <Hidden lgUp>
                <Grid item className={classes.marginBottom}>
                  <ImageGallery />
                </Grid>
              </Hidden> */}
            </Grid>

            {/* Image Gallery in small screen (<960) */}
            <Hidden mdUp>
              <Grid item xs={12} className={classes.marginBottom}>
                <ImageGallery />
              </Grid>
            </Hidden>

            {/* How to cook section*/}
            <Grid item className={classes.marginBottom}>
              <InstructionCard />
            </Grid>

            {/* Additional Info section*/}
            <Grid
              item
              xs={12}
              // style={{ backgroundColor: "violet" }}
            >
              <AdditionalInfoCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    flexGrow: 1,
    backgroundColor: COLORS.WhiteSmoke,
  },

  marginBottom: {
    marginBottom: theme.spacing(3),
  },
}));

export default EditRecipePage;
