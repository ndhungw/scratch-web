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
import { TOP_5_RECIPES, USER_SAMPLE } from "../../../constants/dataSample";
import { VIDEO_IMAGE_SOURCE } from "../../../constants/defaultValues";
import COLORS from "../../../constants/colors";

// hooks
import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
import { useSelector, useDispatch } from "react-redux";

import { withSnackbar } from "notistack";
import {
  selectFeeds,
  selectMessage,
  selectError,
  feedsActions,
} from "../../../redux/slices/feed/feedSlice";

import {
  selectCurrentUser,
  selectRecipesSector,
  selectSavedSector,
  selectFollowingSector,
} from "../../../redux/slices/userSlice";

import { useEffect } from "react";

function FeedPage({ enqueueSnackbar }) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();
  //
  const dispatch = useDispatch();
  // selectors
  const currentUser = useSelector(selectCurrentUser);
  const message = useSelector(selectMessage);
  const error = useSelector(selectError);

  const recipesSector = useSelector(selectRecipesSector);
  const savedSector = useSelector(selectSavedSector);
  const followingSector = useSelector(selectFollowingSector);
  // feeds
  const allFeeds = useSelector(selectFeeds);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "warning" });
    }
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
    }
    return function cleanup() {
      // dispatch(feedsActions.setError(""));
      // dispatch(feedsActions.setMessage(""));
      // dispatch 2 actions will trigger re-render 2 times and one of them will still remain old value

      dispatch(feedsActions.clearSnackbarInfo());
    };
  }, [error, message]);

  const handleSave = async (idFeed, idCookbook) => {
    dispatch(feedsActions.saveRecipePending({ idFeed, idCookbook }));
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
