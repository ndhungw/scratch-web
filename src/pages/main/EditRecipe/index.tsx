import { useParams } from "react-router";
import { useSelector } from "react-redux";

import { makeStyles, CssBaseline, Grid, Hidden } from "@material-ui/core";

// common component
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";

// components
import ImageGallery from "./components/ImageGallery";
import IngredientsCard from "./components/IngredientsCard";
import InstructionCard from "./components/InstructionCard";
import AdditionalInfoCard from "./components/AdditionalInfoCard";

// constants
import COLORS from "../../../constants/colors";
import { NUTRITION_FACTS_SAMPLE } from "../../../constants/defaultValues";

import { selectRecipes } from "../../../redux/slices/databaseSlice";

import { RecipeType } from "../../../ts/types";

const EditRecipePage = () => {
  const classes = useStyles();
  const { idRecipe } = useParams<{ idRecipe: string }>();

  const allRecipes = useSelector(selectRecipes);
  const recipe = allRecipes.filter(
    (recipe: RecipeType) => recipe.id === idRecipe
  )[0];

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
            // style={{ backgroundColor: "aqua" }}
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
              <IngredientsCard
                recipeName={recipe.name}
                ingredients={recipe.ingredients}
              />
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
              <InstructionCard directions={recipe.directions} />
            </Grid>

            {/* Additional Info section*/}
            <Grid
              item
              xs={12}
              // style={{ backgroundColor: "violet" }}
            >
              <AdditionalInfoCard
                servingTime={additionalInfo.servingTime}
                tags={additionalInfo.tags}
                nutritionFacts={additionalInfo.nutritionFacts}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const additionalInfo = {
  servingTime: 5,
  tags: ["Easy", "Quick", "Beginner"],
  nutritionFacts: NUTRITION_FACTS_SAMPLE,
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
