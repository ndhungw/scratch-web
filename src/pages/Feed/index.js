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
import CardBase from "../../components/Card/CardBase";
import ProfileStats from "../../components/User/ProfileStats/ProfileStats";
import CardFeed from "./components/CardFeed";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";
import { TOP_5_RECIPES, USER_SAMPLE } from "../../constants/data";
import { VIDEO_IMAGE_SOURCE } from "../../constants/defaultValues";
import NavigationDesktop from "../../components/Navigation/NavigationDesktop";
import COLORS from "../../constants/colors";

export default function FeedPage() {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <NavigationDesktop />
        </Grid>
        <Hidden mdDown>
          <Grid item lg>
            <ProfileStats className={classes.profileStats} />
            <CardBase title={"Top 5 Recipe today"} className={classes.cardBase}>
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
          </Grid>
        </Hidden>

        <Grid item xs={11} sm={10} md={9} lg={6}>
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
          <CardFeed className={classes.cardFeed} />
          <CardFeed className={classes.cardFeed} />
        </Grid>

        <Hidden mdDown>
          <Grid item lg>
            <CardBase
              title={"Live cooking by scratch"}
              className={classes.cardBase}
            >
              <img alt="VIDEO LIVE STREAM" src={VIDEO_IMAGE_SOURCE} />
            </CardBase>
            <CardBase title={"Most Active Today"} className={classes.cardBase}>
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
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  profileStats: {
    marginBottom: "1.25rem",
  },
  typoRecipe: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  cardFeed: {
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
  },
}));
