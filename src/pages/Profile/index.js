import {
  ButtonBase,
  Grid,
  Hidden,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import NavigationDesktop from "../../components/Navigation/NavigationDesktop";
import ProfileStats from "../../components/User/ProfileStats/ProfileStats";
import { makeStyles } from "@material-ui/core";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";
import PlusIcon from "../../assets/icons/plus";
import COLORS from "../../constants/colors";
import classNames from "classnames";
import { useContext, useState } from "react";
import CardRecipe from "../../components/Card/RecipeCard";
import { BACKGROUND_IMAGE_SOURCE } from "../../constants/defaultValues";
import SimpleCard from "../../components/Card/SimpleCard";
import SettingsIcon from "../../assets/icons/settings";
import EditIcon from "../../assets/icons/edit";
import LogOutIcon from "../../assets/icons/logout";

import { AuthContext } from "../../store/index";

const useStyles = makeStyles((theme) => ({
  root: {},
  panelAction: {
    marginTop: "1rem",
    borderRadius: 8,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  buttonAddRecipe: {
    padding: "0.4325rem 1.375rem",
    borderWidth: 2,
    borderColor: COLORS.DarkGreen,
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: COLORS.White,
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  //
  simpleCard: {
    padding: 1,
    width: 155,
    textAlign: "center",
    margin: "1rem",
    borderRadius: 8,
  },
  resetMarginLeft: {
    marginLeft: 0,
  },
  selectedCard: {
    padding: 0,
    border: "1px solid",
    borderColor: COLORS.DarkGreen,
    opacity: 1,
  },
  unSelectedCard: {
    opacity: 0.4,
  },
  //
  simpleCardImage: {
    width: 155,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cookBooksWrapper: {
    display: "flex",
    alignItems: "center",
  },
  cardRecipe: {
    margin: "1rem",
  },
  mainContainer: {
    flexGrow: 1,
    // backgroundColor: COLORS.WhiteSmoke,
    backgroundImage: `url(${BACKGROUND_IMAGE_SOURCE}), linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, ${COLORS.WhiteSmoke} 100%)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundBlendMode: "soft-light",
  },
  // button text with icon
  icon: {
    marginRight: "1rem",
  },
}));

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  console.log("ProfilePage- user: ", user);
  //
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down("md"));
  //
  const classes = useStyles();
  const typoClasses = useTypographyStyles();
  //
  const [selectedBookId, setSelectedBookId] = useState("western_cookbook");

  const handleSelectCard = (id) => (event) => {
    console.log(id);
    setSelectedBookId(id);
  };

  return (
    <div>
      <Grid
        container
        justify="center"
        spacing={2}
        className={classes.mainContainer}
      >
        <Grid item xs={12}>
          <NavigationDesktop />
        </Grid>

        <Grid item xs={11}>
          <Grid container spacing={2}>
            {/* Left */}
            <Grid item xs={12} md={3}>
              <ProfileStats user={user} />
              <Hidden smDown>
                <Paper elevation={0} className={classes.panelAction}>
                  <ButtonBase style={{ padding: "0.5rem" }}>
                    <EditIcon className={classes.icon} />
                    <Typography className={typoClasses.lead}>
                      {"Edit profile"}
                    </Typography>
                  </ButtonBase>
                  <ButtonBase style={{ padding: "0.5rem" }}>
                    <SettingsIcon className={classes.icon} />
                    <Typography className={typoClasses.lead}>
                      {"Settings"}
                    </Typography>
                  </ButtonBase>
                  <ButtonBase style={{ padding: "0.5rem" }}>
                    <LogOutIcon className={classes.icon} />
                    <Typography className={typoClasses.lead}>
                      {"Log out"}
                    </Typography>
                  </ButtonBase>
                </Paper>
              </Hidden>
            </Grid>

            {/* Right */}
            <Grid item md>
              <Grid container>
                {/* Right */}
                <Grid item xs={12}>
                  {/* cook books */}
                  <div className={classes.titleRow}>
                    <Typography className={typoClasses.h2}>
                      {"My Recipes"}
                    </Typography>
                    <ButtonBase className={classes.buttonAddRecipe}>
                      <PlusIcon />
                      <Typography className={typoClasses.button}>
                        {"Add New"}
                      </Typography>
                    </ButtonBase>
                  </div>

                  <div className={classes.cookBooksWrapper}>
                    {user.recipes.cookBooks.map((item, index) => (
                      <SimpleCard
                        key={`${item.title}_${index}`}
                        id={item.id}
                        title={`${item.title} (${item.recipesCount})`}
                        imageSrc={item.imageSrc}
                        handleSelectCard={handleSelectCard}
                        className={classNames(classes.simpleCard, {
                          // [classes.simpleCard]: true,
                          [classes.unSelectedCard]: selectedBookId !== item.id,
                          [classes.selectedCard]: selectedBookId === item.id,
                          [classes.resetMarginLeft]: index === 0,
                        })}
                      />
                    ))}
                  </div>
                </Grid>

                {/* list recipe cards */}
                <Grid item xs={12}>
                  <Paper
                    elevation={0}
                    style={{
                      padding: "0px 2rem",
                    }}
                  >
                    <Grid
                      container
                      justify={mdDownMatches ? "center" : "space-between"}
                    >
                      {user.recipes.cookBooks
                        .find((book) => book.id === selectedBookId)
                        .recipesList.map((recipe, index) => (
                          <CardRecipe
                            key={`${recipe.id}_${index}`}
                            title={recipe.recipeName}
                            imageSrc={recipe.imageSrc}
                            ingredients={recipe.ingredients}
                            servingTime={recipe.servingTime}
                            className={classes.cardRecipe}
                          />
                        ))}
                      {/* <CardRecipe className={classes.cardRecipe} />
                      <CardRecipe className={classes.cardRecipe} />
                      <CardRecipe className={classes.cardRecipe} />
                      <CardRecipe className={classes.cardRecipe} />
                      <CardRecipe className={classes.cardRecipe} />
                      <CardRecipe className={classes.cardRecipe} />
                      <CardRecipe className={classes.cardRecipe} />
                      <CardRecipe className={classes.cardRecipe} /> */}
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// const cookBooks = [
//   {
//     id: "cookBook_01",
//     title: "Western",
//     imageSrc: RECIPE_SAMPLE.imageSrc,
//   },
//   {
//     id: "cookBook_02",
//     title: "Vietnamese",
//     imageSrc: RECIPE_SAMPLE.imageSrc,
//   },
//   {
//     id: "cookBook_03",
//     title: "Soups",
//     imageSrc: RECIPE_SAMPLE.imageSrc,
//   },
// ];
