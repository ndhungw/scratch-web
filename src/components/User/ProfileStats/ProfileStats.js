import { Avatar, Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { USER_SAMPLE, USER_KITCHEN_SAMPLE } from "../../../constants/data";

import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
import DotIcon from "../../../assets/icons/dot";

import classNames from "classnames";
import { simplify, capitalizeFirstLetter } from "../../../utils";
import SeparatorLine from "../../SeparatorLine/SeparatorLine";

export default function ProfileStats({ user, className, ...rest }) {
  const classes = useStyles();
  const styles = classNames(classes.root, className);
  const typoClasses = useTypographyStyles();

  return (
    <Paper className={styles} elevation={0} {...rest}>
      <Box className={classes.infoWrapper}>
        <Box className={classes.infoLeft}>
          <Avatar
            alt={""}
            src={USER_SAMPLE.avatarSrc}
            className={classes.avatar}
          />
        </Box>
        <Box className={classes.infoRight}>
          <Box className={classes.infoPrimary}>
            <Typography className={typoClasses.h5}>
              {user.fullName || USER_SAMPLE.fullName}
            </Typography>
            <Typography className={typoClasses.textGray}>
              {user.bio || USER_SAMPLE.bio}
            </Typography>
          </Box>
          <Box className={classes.interactionWrapper}>
            <Typography className={typoClasses.textGray}>
              {`${simplify(
                user.followersCount || USER_SAMPLE.followersCount
              )} followers`}
            </Typography>
            <DotIcon />
            <Typography className={typoClasses.textGray}>
              {`${simplify(user.likesCount || USER_SAMPLE.likesCount)} likes`}
            </Typography>
          </Box>
        </Box>
      </Box>

      <SeparatorLine className={classes.separatorLine} />

      {/* <Box className={classes.sectorsWrapper}>
        {user.cookBooks.map((book, index) => {
          return (
            <Box key={`${book.tile}_${index}`} className={classes.buttonSector}>
              <Typography className={typoClasses.h4}>
                {book.itemsCount}
              </Typography>
              <Typography
                className={classNames({
                  [typoClasses.lead]: true,
                  [classes.unSelected]: true,
                })}
              >
                {`${capitalizeFirstLetter(book.title)}`}
              </Typography>
            </Box>
          );
        })}
      </Box> */}
      <Box className={classes.sectorsWrapper}>
        <Box className={classes.buttonSector}>
          <Typography className={typoClasses.h4}>
            {user.recipes.totalCount}
          </Typography>
          <Typography
            className={classNames({
              [typoClasses.lead]: true,
              [classes.unSelected]: true,
            })}
          >
            {`${capitalizeFirstLetter(user.recipes.title)}`}
          </Typography>
        </Box>

        <Box className={classes.buttonSector}>
          <Typography className={typoClasses.h4}>
            {user.saved.totalCount}
          </Typography>
          <Typography
            className={classNames({
              [typoClasses.lead]: true,
              [classes.unSelected]: true,
            })}
          >
            {`${capitalizeFirstLetter(user.saved.title)}`}
          </Typography>
        </Box>

        <Box className={classes.buttonSector}>
          <Typography className={typoClasses.h4}>
            {user.following.totalCount}
          </Typography>
          <Typography
            className={classNames({
              [typoClasses.lead]: true,
              [classes.unSelected]: true,
            })}
          >
            {`${capitalizeFirstLetter(user.following.title)}`}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "green",
    // maxWidth: 300,
    borderRadius: 8,
    padding: "1.5rem",
    [theme.breakpoints.down("lg")]: {
      padding: "0.75rem",
    },
  },
  infoWrapper: {
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  infoLeft: {},
  avatar: {
    width: 70,
    height: 70,
  },
  infoRight: {
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  infoPrimary: {},
  interactionWrapper: {
    display: "flex",
    alignItems: "center",
  },
  sectorsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    // backgroundColor: "green",
  },
  buttonSector: {
    textAlign: "center",
  },
  unSelected: {
    opacity: 0.5,
  },
  separatorLine: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    // margin: 100,
  },
}));
