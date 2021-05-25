import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";

import InstructionCard from "./components/InstructionCard";
import IngredientsCard from "./components/IngredientsCard";
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";

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
  return (
    <>
      <CssBaseline />
      <Grid
        container
        style={{ backgroundColor: "yellowgreen", height: "100vh" }}
        justify="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <NavigationDesktop />
        </Grid>
        {/* wrapper */}
        <Grid
          item
          xs={11}
          container
          justify="center"
          spacing={2}
          style={{ backgroundColor: "violet" }}
        >
          <Grid
            item
            xs={3}
            container
            direction="column"
            style={{ backgroundColor: "aqua" }}
          >
            <Grid item style={{ backgroundColor: "blue" }}>
              Item left
            </Grid>
          </Grid>

          {/* Items right container */}
          <Grid
            item
            xs={9}
            container
            direction="column"
            spacing={2}
            style={{ backgroundColor: "grey" }}
          >
            <Grid item style={{ backgroundColor: "red" }}>
              {/* Ingredients section */}
              <IngredientsCard directions={directions} />
            </Grid>

            {/* How to cook section*/}
            <Grid item style={{ backgroundColor: "green" }}>
              <InstructionCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default EditRecipePage;
