import { Button } from "@material-ui/core";
import classNames from "classnames";
import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonAddIngredient: {
    opacity: 0.7,
    borderRadius: theme.spacing(1),
    borderStyle: "dashed",
    borderWidth: 1,
    width: "100%",
    justifyContent: "flex-start",
    padding: "0.5rem",
    "&:hover": {
      opacity: 1,
    },
    textTransform: "none",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  textField: {
    flexGrow: 1,
  },
}));

export default function DashedButton({
  handleClick,
  startComponent,
  endComponent,
  children,
  className,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Button
      onClick={handleClick}
      className={classNames(
        classes.buttonAddIngredient,
        classes.defaultBorder,
        className
      )}
      variant="outlined"
      fullWidth
      startIcon={startComponent}
      endIcon={endComponent}
      {...rest}
    >
      {children}
    </Button>
  );
}
