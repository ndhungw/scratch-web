import React from "react";
import {
  ButtonBase,
  ClickAwayListener,
  FormControl,
  IconButton,
  Input,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import classNames from "classnames";
import SearchIcon from "../../assets/icons/search";
import FilterIcon from "../../assets/icons/filter";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      // width: "100%",
    },
  },
  iconButton: {
    // backgroundColor: "yellow",
  },
  expand: {
    // width: 900,
    // backgroundColor: "red",
  },
}));

export default function SearchBar({
  value,
  handleChange,
  isFocused,
  handleBlur,
  handleFocus,
  className,
  ...rest
}) {
  const classes = useStyles();
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down("md"));
  const lessThan360 = useMediaQuery(theme.breakpoints.down(360));

  const searchBar = (
    <FormControl
      fullWidth
      className={classNames({
        [classes.root]: true,
        [className]: true,
        [classes.expand]: isFocused,
      })}
    >
      <Input
        id="search input"
        value={value}
        onChange={handleChange}
        placeholder={
          lessThan360 ? "Search here" : "Search Recipe, Profile, or Ingredients"
        }
        startAdornment={<SearchIcon />}
        endAdornment={
          isFocused && (
            <ButtonBase>
              <FilterIcon />
            </ButtonBase>
          )
        }
      />
    </FormControl>
  );

  const conciseButton = (
    <IconButton onClick={handleFocus} className={classes.iconButton}>
      <SearchIcon />
    </IconButton>
  );
  return (
    <div {...rest}>
      <ClickAwayListener onClickAway={handleBlur}>
        {mdDownMatches ? (!isFocused ? conciseButton : searchBar) : searchBar}
      </ClickAwayListener>
    </div>
  );
}
