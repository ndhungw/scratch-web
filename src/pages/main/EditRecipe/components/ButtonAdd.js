import { ButtonBase, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonAddIngredient: {
    opacity: 0.5,
    borderRadius: theme.spacing(1),
    borderStyle: "dashed",
    borderWidth: 1,
    width: "100%",
    justifyContent: "flex-start",
    padding: "0.5rem",
    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));
export default function ButtonAdd({
  text,
  handleClick,
  startComponent,
  endComponent,
}) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  return (
    <ButtonBase
      onClick={handleClick}
      className={classNames(classes.buttonAddIngredient, classes.defaultBorder)}
    >
      {startComponent}
      <Typography
        align="left"
        style={{ flexGrow: 1 }}
        className={typoClasses.lead}
      >
        {text || "Add"}
      </Typography>
      {endComponent}
    </ButtonBase>
  );
}
