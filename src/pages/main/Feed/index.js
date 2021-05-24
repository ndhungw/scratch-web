import {
  makeStyles,
  Avatar,
  Box,
  Grid,
  Hidden,
  Typography,
  Button,
} from "@material-ui/core";
import classNames from "classnames";

// components
import NavigationDesktop from "../../../components/Navigation/NavigationDesktop";
import CardBase from "../../../components/Card/CardBase";
import ProfileStats from "../../../components/User/ProfileStats/ProfileStats";

// local components
import FeedCard from "./components/FeedCard";

// constants
import { TOP_5_RECIPES, USER_SAMPLE } from "../../../constants/data";
import { VIDEO_IMAGE_SOURCE } from "../../../constants/defaultValues";
import COLORS from "../../../constants/colors";

// hooks
import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
import { useSelector, useDispatch } from "react-redux";

import { withSnackbar } from "notistack";
import { selectFeeds } from "./feedsSlice";
import { getRecipe } from "../../../api";
import {
  selectCurrentUser,
  selectRecipesSector,
  selectSavedSector,
  selectFollowingSector,
  userActions,
} from "../../../app/userSlice";

import { databaseActions } from "../../../app/databaseSlice";

function FeedPage({ enqueueSnackbar }) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();
  //
  const dispatch = useDispatch();
  //
  const currentUser = useSelector(selectCurrentUser);

  const recipesSector = useSelector(selectRecipesSector);
  const savedSector = useSelector(selectSavedSector);
  const followingSector = useSelector(selectFollowingSector);
  // feeds
  // const FEED_LIST = FEED_SAMPLE_LIST;
  const allFeeds = useSelector(selectFeeds);

  // saved cook books of user
  // const savedCookbooks = savedSector.cookbooks;

  const handleSave = (idFeed, idCookbook) => {
    const feedToSave = allFeeds.filter((feed) => feed.id === idFeed)[0];

    const recipeData = getRecipe(feedToSave.idRecipe);

    const cookbookToChange = savedSector.cookbooks.filter(
      (book) => book.id === idCookbook
    )[0];

    const existedRecipe = cookbookToChange.recipesList.find(
      (recipe) => recipe.id === feedToSave.idRecipe
    );

    if (existedRecipe) {
      enqueueSnackbar("This recipe was already saved in that cook book !", {
        variant: "warning",
      });
      return;
    }

    // prepare newCookbooks
    const newCookbooks = savedSector.cookbooks.map((book) => {
      if (book.id === idCookbook) {
        // book.recipesList = [...book.recipesList, recipeData];
        const newBook = {
          ...book,
          recipesCount: book.recipesCount + 1,
          recipesList: [...book.recipesList, recipeData],
        };
        return newBook;
      }
      return book;
    });

    // save on database
    dispatch(
      databaseActions.setCookbookRecipe({
        idCookbook: idCookbook,
        idRecipe: feedToSave.idRecipe,
      })
    );

    const newSavedSector = {
      ...savedSector,
      totalCount: savedSector.totalCount + 1,
      cookbooks: newCookbooks,
    };

    // change user state slice
    dispatch(userActions.setSavedSector(newSavedSector));

    enqueueSnackbar("Saved successfully!", { variant: "success" });
  };

  return (
    <>
      <Grid container justify="center" spacing={0} className={classes.root}>
        <Grid item xs={12} className={classes.navBarSticky}>
          <NavigationDesktop />
        </Grid>

        {/* Main Wrapper */}
        <Grid
          item
          xs={10}
          sm={12}
          md={12}
          container
          justify="center"
          spacing={2}
        >
          {/* Left column */}
          <Hidden smDown>
            <Grid item lg md container justify="flex-end">
              <div>
                <ProfileStats
                  user={currentUser}
                  recipesSector={recipesSector}
                  savedSector={savedSector}
                  followingSector={followingSector}
                  className={classes.profileStats}
                />
                <CardBase
                  title={"Top 5 Recipe today"}
                  className={classes.cardBase}
                >
                  {TOP_5_RECIPES.map((recipe, index) => (
                    <Typography
                      key={index}
                      className={classNames(
                        typoClasses.textGrey,
                        classes.typoRecipe
                      )}
                    >
                      {recipe}
                    </Typography>
                  ))}
                </CardBase>
              </div>
            </Grid>
          </Hidden>
          <Grid item xs={11} sm={11} md lg container justify="center">
            <div>
              <Hidden xsDown>
                <CardBase
                  title="286 of your followers are online"
                  className={classes.cardBaseHorizontal}
                  titleStyle={classes.resetMarginBottom}
                  elevation={9}
                >
                  <Button
                    variant="contained"
                    className={classNames(
                      typoClasses.button,
                      classes.buttonCreateRecipe
                    )}
                  >
                    Create Recipe
                  </Button>
                </CardBase>
              </Hidden>

              {allFeeds.map((feed, index) => {
                return (
                  <FeedCard
                    className={classes.feedCard}
                    key={`${feed.id}_${index}`}
                    id={feed.id}
                    title={feed.title}
                    description={feed.description}
                    imageSrc={feed.imageSrc}
                    author={feed.authorName}
                    authorAvatarSrc={feed.authorAvatarSrc}
                    createdAt={feed.createdAt}
                    likesCount={feed.likesCount}
                    commentsCount={feed.commentsCount}
                    recipeData={feed.recipeData}
                    handleSave={handleSave}
                    savedCookbooks={savedSector.cookbooks}
                  />
                );
              })}
            </div>
          </Grid>
          {/* Right column */}
          <Hidden smDown>
            <Grid item md lg container justify="flex-start">
              <div>
                <CardBase
                  title={"Live cooking by scratch"}
                  className={classes.cardBase}
                >
                  <img alt="VIDEO LIVE STREAM" src={VIDEO_IMAGE_SOURCE} />
                </CardBase>
                <CardBase
                  title={"Most Active Today"}
                  className={classes.cardBase}
                >
                  <Box className={classes.horizontalList}>
                    <Avatar
                      alt="A"
                      src={USER_SAMPLE.avatarSrc}
                      className={classes.avatar}
                    />
                    <Avatar
                      alt="A"
                      src={USER_SAMPLE.avatarSrc}
                      className={classes.avatar}
                    />
                    <Avatar
                      alt="A"
                      src={USER_SAMPLE.avatarSrc}
                      className={classes.avatar}
                    />
                    <Avatar
                      alt="A"
                      src={USER_SAMPLE.avatarSrc}
                      className={classes.avatar}
                    />
                    <Avatar
                      alt="A"
                      src={USER_SAMPLE.avatarSrc}
                      className={classes.avatar}
                    />
                  </Box>
                </CardBase>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.WhiteSmoke,
  },
  navBarSticky: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    marginBottom: "1rem",
  },
  profileStats: {
    marginBottom: "1.25rem",
  },
  typoRecipe: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  feedCard: {
    marginBottom: "2rem",
  },
  cardBase: {
    marginBottom: "1.25rem",
  },
  horizontalList: {
    display: "flex",
    flexDirection: "row",
    marginTop: "0.75rem",
  },
  avatar: {
    margin: "0px 0.435rem",
    width: "2.5rem",
    height: "2.5rem",
  },
  cardBaseHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  resetMarginBottom: {
    marginBottom: 0,
  },
  buttonCreateRecipe: {
    backgroundColor: COLORS.DarkGreen,
    color: COLORS.White,
    border: theme.shape.borderRadius,
    marginLeft: "1rem",
  },
}));

export default withSnackbar(FeedPage);
