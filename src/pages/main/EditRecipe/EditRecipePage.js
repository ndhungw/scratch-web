import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

import InstructionCard from "./components/InstructionCard";
import IngredientsCard from "./components/IngredientsCard";
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";
import ImageGallery from "./ImageGallery";
import COLORS from "../../../constants/colors";

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
          xs={11}
          container
          justify="center"
          spacing={2}
          // style={{ backgroundColor: "violet" }}
        >
          {/* Items left container */}
          <Grid
            item
            xs={3}
            container
            direction="column"
            // style={{ backgroundColor: "aqua" }}
          >
            <Grid
              item
              // style={{ backgroundColor: "blue" }}
            >
              <ImageGallery />
            </Grid>
          </Grid>

          {/* Items right container */}
          <Grid
            item
            xs={9}
            container
            // spacing={4}
            direction="column"
            // style={{ backgroundColor: "grey" }}
          >
            {/* Ingredients section */}
            <Grid
              item
              className={classes.ingredientSection}
              // style={{ backgroundColor: "red" }}
            >
              <IngredientsCard directions={directions} />
            </Grid>

            {/* How to cook section*/}
            <Grid
              item
              // style={{ backgroundColor: "green" }}
            >
              <InstructionCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: COLORS.WhiteSmoke,
  },
  ingredientSection: {
    marginBottom: theme.spacing(4),
  },
}));

export default EditRecipePage;
