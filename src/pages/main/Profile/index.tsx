import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  makeStyles,
  ButtonBase,
  Grid,
  Hidden,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import classNames from "classnames";

// hooks
import useTypographyStyles from "../../../assets/styles/useTypographyStyles";

// icons
import PlusIcon from "../../../assets/icons/plus";
import SettingsIcon from "../../../assets/icons/settings";
import EditIcon from "../../../assets/icons/edit";
import LogOutIcon from "../../../assets/icons/logout";

// components
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";
import CardRecipe from "../../../components/Card/RecipeCard";
import SimpleCard from "../../../components/Card/SimpleCard";
import ProfileStats from "../../../components/ProfileStats/ProfileStats";

// constants
import COLORS from "../../../constants/colors";
import { BACKGROUND_IMAGE_SOURCE } from "../../../constants/defaultValues";

import { capitalizeFirstLetter } from "../../../utils";

// selectors
import {
  selectCurrentUser,
  selectFollowingSector,
  selectRecipesSector,
  selectSavedSector,
} from "../../../redux/slices/userSlice";
import { CookbookType, RecipeType } from "../../../ts/types";

const useStyles = makeStyles(() => ({
  root: { backgroundColor: COLORS.WhiteSmoke },
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

const SECTORS = ["recipes", "saved", "following"];

function ProfilePage() {
  const currentUser = useSelector(selectCurrentUser);
  //
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down("md"));
  //
  const classes = useStyles();
  const typoClasses = useTypographyStyles();
  //
  const recipesSector = useSelector(selectRecipesSector);
  const savedSector = useSelector(selectSavedSector);
  const followingSector = useSelector(selectFollowingSector);
  //
  const [selectedSector, setSelectedSector] = useState(SECTORS[0]);
  const [cookbooks, setCookbooks] = useState<CookbookType[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<string>();
  const [recipesByCookbook, setRecipesByCookbook] = useState<RecipeType[]>([]);

  useEffect(() => {
    const isSavedSelected = selectedSector === "saved";

    let cookbooks = [];

    if (isSavedSelected) {
      cookbooks = savedSector.cookbooks;
    } else {
      cookbooks = recipesSector.cookbooks;
    }

    setCookbooks(cookbooks);

    if (cookbooks.length > 0) {
      setSelectedBookId(cookbooks[0].id);
    }
  }, [selectedSector, recipesSector, savedSector]);

  // // reload recipes list
  useEffect(() => {
    // just componentDidUpdate
    if (selectedBookId) {
      const specifiedBook = cookbooks.filter(
        (book: CookbookType) => book.id === selectedBookId
      )[0];
      const recipesMatch = specifiedBook.recipesList;
      setRecipesByCookbook(recipesMatch);
    }
  }, [selectedBookId]);

  // eslint-disable-next-line no-unused-vars
  const handleSelectCookbook = (id: string) => (event: any) => {
    setSelectedBookId(id);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSelectSector = (sectorName: string) => (event: any) => {
    setSelectedSector(sectorName);
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
              <ProfileStats
                user={currentUser}
                recipesSector={recipesSector}
                savedSector={savedSector}
                followingSector={followingSector}
                selectedSector={selectedSector}
                handleSelectSector={handleSelectSector}
              />

              <Hidden smDown>
                <Paper elevation={0} className={classes.panelAction}>
                  <ButtonBase
                    component={NavLink}
                    to="/profile/edit"
                    style={{ padding: "0.5rem" }}
                  >
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

            {/* Main content (dynamic) */}
            <Grid item md container>
              {cookbooks.length > 0 && (
                <>
                  <Grid item xs={12}>
                    <div className={classes.titleRow}>
                      <Typography className={typoClasses.h2}>
                        {`My ${capitalizeFirstLetter(selectedSector)}`}
                      </Typography>
                      <ButtonBase className={classes.buttonAddRecipe}>
                        <PlusIcon />
                        <Typography className={typoClasses.button}>
                          {"Add New"}
                        </Typography>
                      </ButtonBase>
                    </div>

                    <div className={classes.cookBooksWrapper}>
                      {cookbooks.map((item, index) => (
                        <SimpleCard
                          key={item.id}
                          id={item.id}
                          title={`${item.name} (${item.recipesCount})`}
                          imageSrc={item.imageSrc}
                          handleSelectCard={handleSelectCookbook}
                          className={classNames(classes.simpleCard, {
                            // [classes.simpleCard]: true,
                            [classes.unSelectedCard]:
                              selectedBookId !== item.id,
                            [classes.selectedCard]: selectedBookId === item.id,
                            [classes.resetMarginLeft]: index === 0,
                          })}
                        />
                      ))}
                    </div>
                  </Grid>
                  {/* list recipe cards of specific cook book */}
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
                        {recipesByCookbook.map((recipe) => (
                          <NavLink
                            to={`/recipes/edit/${recipe.id}`}
                            key={recipe.id}
                          >
                            <CardRecipe
                              // key={`${recipe.id}`}
                              title={recipe.name}
                              imageSrc={recipe.imageSrcList[0]}
                              ingredients={recipe.ingredients}
                              servingTime={recipe.servingTime}
                              className={classes.cardRecipe}
                            />
                          </NavLink>
                        ))}
                      </Grid>
                    </Paper>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfilePage;
