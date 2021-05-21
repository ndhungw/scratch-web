import { Avatar, Box, ButtonBase, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

import { SECTOR_NAMES, USER_SAMPLE } from "../../../constants/data";

import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
import DotIcon from "../../../assets/icons/dot";

import { simplify, capitalizeFirstLetter } from "../../../utils";
import COLORS from "../../../constants/colors";
import SeparatorLine from "../../SeparatorLine/SeparatorLine";

export default function ProfileStats({
  user,
  selectedSector,
  handleSelectSector,
  className,
  ...rest
}) {
  const classes = useStyles();
  const styles = classNames(classes.root, className);
  const typoClasses = useTypographyStyles();

  return (
    <>
      {user && (
        <Paper className={styles} elevation={0} {...rest}>
          <Box className={classes.infoWrapper}>
            <Box className={classes.infoLeft}>
              <Avatar
                alt={""}
                src={user.avatarSrc || USER_SAMPLE.avatarSrc}
                className={classes.avatar}
              />
            </Box>
            <Box className={classes.infoRight}>
              <Box className={classes.infoPrimary}>
                <Typography className={typoClasses.h5}>
                  {user?.fullName || USER_SAMPLE.fullName}
                </Typography>
                <Typography className={typoClasses.textGray}>
                  {user?.bio || USER_SAMPLE.bio}
                </Typography>
              </Box>
              <Box className={classes.interactionWrapper}>
                <Typography className={typoClasses.textGray}>
                  {`${simplify(
                    user?.followersCount || USER_SAMPLE.followersCount
                  )} followers`}
                </Typography>
                <DotIcon />
                <Typography className={typoClasses.textGray}>
                  {`${simplify(
                    user?.likesCount || USER_SAMPLE.likesCount
                  )} likes`}
                </Typography>
              </Box>
            </Box>
          </Box>

          <SeparatorLine className={classes.separatorLine} />

          <Box className={classes.sectorsWrapper}>
            {SECTOR_NAMES.map((sector, index) => {
              return (
                <ButtonBase
                  key={`${sector}_${index}`}
                  disabled={user[sector].totalCount === 0}
                  onClick={handleSelectSector && handleSelectSector(sector)}
                  className={classNames({
                    [classes.buttonSector]: true,
                    [classes.buttonSectorSelected]: selectedSector === sector,
                  })}
                >
                  <Typography className={typoClasses.h4}>
                    {user[sector].totalCount}
                  </Typography>
                  <Typography
                    className={classNames({
                      [typoClasses.lead]: true,
                      [classes.unSelected]: true,
                    })}
                  >
                    {`${capitalizeFirstLetter(user[sector].title)}`}
                  </Typography>
                </ButtonBase>
              );
            })}
          </Box>
        </Paper>
      )}
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    borderRadius: 8,
    padding: "0.5rem",
    [theme.breakpoints.down("lg")]: {
      padding: "0.75rem",
    },
  },
  infoWrapper: {
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
  },
  buttonSector: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    borderRadius: 8,
    padding: "0.5rem",
    paddingBottom: "0.5rem",
    "&:hover": {
      backgroundColor: COLORS.AliceBlue,
    },
  },
  buttonSectorSelected: {
    borderBottom: `0.5rem solid ${COLORS.DarkGreen}`,
    paddingBottom: 0,
  },
  unSelected: {
    opacity: 0.5,
  },
  separatorLine: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));
