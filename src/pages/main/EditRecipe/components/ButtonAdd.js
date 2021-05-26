import { ButtonBase, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import PlusIcon from "../../../../assets/icons/plus";
import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonAddIngredient: {
    opacity: 0.8,
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
export default function ButtonAdd({ text, handleClick }) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  return (
    <ButtonBase
      onClick={handleClick}
      className={classNames(classes.buttonAddIngredient, classes.defaultBorder)}
    >
      <PlusIcon className={classes.icon} />
      <Typography className={typoClasses.lead}>{text || "Add"}</Typography>
    </ButtonBase>
  );
}
