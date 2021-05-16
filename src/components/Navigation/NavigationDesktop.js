import {
  Box,
  ButtonBase,
  fade,
  Grid,
  Hidden,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Logo from "../../assets/icons/logo";
import NotificationsIcon from "../../assets/icons/notifications";
import MessageIcon from "../../assets/icons/message";
import SearchBar from "../Search/SearchBar";
import COLORS from "../../constants/colors";
import classNames from "classnames";
import { useState } from "react";
import UserMenu from "../User/UserMenu/UserMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: COLORS.White,
    // backgroundColor: "aqua",
    height: 80,
    borderRadius: theme.shape.borderRadius,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      // width: "auto",
    },
    // width: "40%",
  },

  logo: {},
  searchBar: {
    [theme.breakpoints.down("md")]: {
      order: 0,
    },
  },
  left: {
    [theme.breakpoints.down("md")]: {
      order: 1,
      textAlign: "center",
    },
  },
  right: {
    // backgroundColor: "green",
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
  iconButton: {
    margin: "0px 1rem",
    [theme.breakpoints.down("sm")]: {
      // margin: "0px 0.5rem",
    },
  },
  resetMarginLeft: {
    marginLeft: 0,
  },
  resetMarginRight: {
    marginRight: 0,
  },
}));

export default function NavigationDesktop() {
  const classes = useStyles();
  const [isSearching, setIsSearching] = useState(false);
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down("md"));

  const handleFocusSearch = () => {
    setIsSearching(true);
  };
  const handleBlurSearch = () => {
    setIsSearching(false);
  };

  return (
    <Box className={classes.root}>
      <Grid container justify="space-between" alignItems="center">
        <Hidden xsDown>
          {!(isSearching && mdDownMatches) && (
            <Grid item lg md={2} sm={3} className={classes.left}>
              <Logo />
            </Grid>
          )}
        </Hidden>
        {/* md = 5 + 2_from_logo + 2_from_right
        sm_default = (12-3_logo)/2 = 4
        sm_after = sm_default + 3_from_logo + 1_remainder
        */}
        <Grid
          item
          lg={5}
          md={isSearching ? 9 : 5}
          sm={isSearching ? 8 : 4}
          xs
          className={classes.searchBar}
        >
          <SearchBar
            isFocused={isSearching}
            handleBlur={handleBlurSearch}
            handleFocus={handleFocusSearch}
          />
        </Grid>

        <Hidden xsDown>
          <Grid
            item
            lg
            md={isSearching ? 3 : 5}
            sm={4}
            xs
            className={classes.right}
          >
            <Grid container justify="flex-end" alignItems="center">
              <Grid item>
                <ButtonBase
                  className={classNames(
                    classes.iconButton,
                    classes.resetMarginLeft
                  )}
                >
                  <NotificationsIcon />
                </ButtonBase>
              </Grid>
              <Grid item>
                <ButtonBase className={classes.iconButton}>
                  <MessageIcon />
                </ButtonBase>
              </Grid>
              <Grid item>
                <UserMenu
                  className={classNames(
                    classes.iconButton,
                    classes.resetMarginRight
                  )}
                />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}
