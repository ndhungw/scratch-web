import { useState } from "react";
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
import ProfileStats from "../../../components/User/ProfileStats/ProfileStats";

// constants
import COLORS from "../../../constants/colors";
import { BACKGROUND_IMAGE_SOURCE } from "../../../constants/defaultValues";
// import { useAuth } from "../../../store/contexts/AuthContext";
import { useSelector } from "react-redux";

import { capitalizeFirstLetter } from "../../../utils";
import { SECTOR_NAMES } from "../../../constants/data";
import { getCurrentUser } from "../../../store/slices/authSlice";
import { NavLink } from "react-router-dom";

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

export default function ProfilePage() {
  // const { currentUser } = useAuth();
  const currentUser = useSelector(getCurrentUser);
  const user = currentUser;
  console.log("ProfilePage- user: ", user);
  //
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down("md"));
  //
  const classes = useStyles();
  const typoClasses = useTypographyStyles();
  //
  const [selectedSector, setSelectedSector] = useState(SECTOR_NAMES[0]);
  // const [selectedBookId, setSelectedBookId] = useState("western_cookbook");
  const [selectedBookId, setSelectedBookId] = useState(
    user[selectedSector].cookBooks[0].id
  );

  // eslint-disable-next-line no-unused-vars
  const handleSelectCookbook = (id) => (event) => {
    console.log(id);
    setSelectedBookId(id);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSelectSector = (sectorName) => (e) => {
    console.log("Click ", sectorName);
    console.log(
      "user[sectorName].cookBooks[0].id=",
      user[sectorName].cookBooks[0].id
    );
    setSelectedSector(sectorName);
    setSelectedBookId(user[sectorName].cookBooks[0].id);
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
                user={user}
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
              <Grid item xs={12}>
                {/* cook books of sector (default: Recipes) */}
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
                  {user[selectedSector].cookBooks.map((item, index) => (
                    <SimpleCard
                      key={`${item.title}_${index}`}
                      id={item.id}
                      title={`${item.title} (${item.recipesCount})`}
                      imageSrc={item.imageSrc}
                      handleSelectCard={handleSelectCookbook}
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
                    {console.log(user[selectedSector].cookBooks)}
                    {user[selectedSector].cookBooks
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
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
