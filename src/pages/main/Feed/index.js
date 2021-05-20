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
import {
  FEED_SAMPLE_LIST,
  TOP_5_RECIPES,
  USER_SAMPLE,
} from "../../../constants/data";
import { VIDEO_IMAGE_SOURCE } from "../../../constants/defaultValues";
import COLORS from "../../../constants/colors";

// hooks
import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
// import { useAuth } from "../../../store/contexts/AuthContext";
import { useSelector, useDispatch } from "react-redux";

import { withSnackbar } from "notistack";
import { authActions, getCurrentUser } from "../../../store/slices/authSlice";

function FeedPage({ enqueueSnackbar }) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();
  // const { enqueueSnackbar } = useSnackbar();
  //
  // const { currentUser, setCurrentUser } = useAuth();
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  console.log("currentUser from FeedPage: ", currentUser);

  // feeds
  const FEED_LIST = FEED_SAMPLE_LIST;
  // saved cook books of user
  const savedCookbooks = currentUser.saved.cookBooks;
  // console.log("savedCookbooks: ", savedCookbooks);

  const handleSave = (idFeed, idCookbook) => {
    console.log(
      `FeedPage - handleSave idFeed = ${idFeed}, idCookbook = ${idCookbook}`
    );

    const feedToAdd = FEED_LIST.filter((feed) => feed.id === idFeed)[0];

    const cookbookToAddFeed = currentUser.saved.cookBooks.filter(
      (book) => book.id === idCookbook
    )[0];

    // check if recipe of feed is existed in the chosen cookbook
    const isExisted = cookbookToAddFeed.recipesList.find(
      (recipe) => recipe.id === feedToAdd.recipeData.id
    );

    if (isExisted) {
      enqueueSnackbar(
        `This feed was already saved in the cook book "${cookbookToAddFeed.title}" !`,
        { variant: "warning" }
      );
      return;
    }

    const newSavedCookbooks = savedCookbooks.map((book) => {
      if (book.id === idCookbook) {
        console.log(`update cookbook has id=${book.id}`);
        return {
          ...book,
          recipesCount: book.recipesCount + 1,
          recipesList: [...book.recipesList, feedToAdd.recipeData],
        };
      }
      return book;
    });

    const newSaved = {
      ...currentUser.saved,
      totalCount: currentUser.saved.totalCount + 1,
      cookBooks: newSavedCookbooks,
    };

    const currentUserToUpdate = {
      ...currentUser,
      saved: newSaved,
    };
    console.log("currentUserToUpdate: ", currentUserToUpdate);

    // setCurrentUser(currentUserToUpdate);
    dispatch(authActions.setCurrentUser(currentUserToUpdate));

    localStorage.setItem("user", JSON.stringify(currentUserToUpdate));
    enqueueSnackbar("Saved successfully!", { variant: "success" });
  };

  return (
    <>
      <Grid container justify="center" spacing={0} className={classes.root}>
        <Grid
          item
          xs={12}
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            marginBottom: "1rem",
          }}
        >
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

              {FEED_LIST.map((feed, index) => (
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
                  savedCookbooks={savedCookbooks}
                />
              ))}
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
