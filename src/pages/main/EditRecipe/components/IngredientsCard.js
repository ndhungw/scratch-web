import React from "react";
import { Button, ButtonBase, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core";
import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";
import EditIcon from "../../../../assets/icons/edit";
import SeparatorLine from "../../../../components/SeparatorLine/SeparatorLine";
import IngredientItem from "./IngredientItem";
import ButtonAdd from "./ButtonAdd";

const useStyles = makeStyles((theme) => ({
  root: {},
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonEditMode: {
    margin: "0 20px",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
  rightFirstSection: {
    padding: theme.spacing(2),
  },
  separatorLine: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  ingredientsContainer: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  ingredientRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "46%",
    marginBottom: theme.spacing(1),
  },
  ingredientLeft: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  buttonAddIngredient: {
    opacity: 0.8,
    borderStyle: "dashed",
    borderWidth: 1,
    width: "100%",
    justifyContent: "flex-start",
    padding: "0.5rem",
    "&:hover": {
      opacity: 1,
    },
  },
  halfWidth: {
    maxWidth: "50%",
  },
  flexWrapFlexEnd: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  marginRight1: {
    marginRight: theme.spacing(1),
  },
  defaultBorder: {
    borderRadius: theme.spacing(1),
  },
}));

export default function IngredientsCard({ directions, className }) {
  const classes = useStyles();
  const typoClasses = useTypographyStyles();

  return (
    <Paper
      elevation={0}
      className={classNames(
        classes.rightFirstSection,
        classes.defaultBorder,
        className
      )}
    >
      <div className={classes.head}>
        <div className={classes.halfWidth}>
          <Typography className={classNames(typoClasses.h3)}>
            {"Sautéed Orange & Mustard Bruschetta"}
          </Typography>
        </div>

        <div className={classes.flexWrapFlexEnd}>
          <ButtonBase
            className={classNames(
              classes.buttonEditMode,
              classes.defaultBorder
            )}
          >
            <EditIcon className={classes.marginRight1} />
            <Typography className={typoClasses.button}>
              {"Edit Mode"}
            </Typography>
          </ButtonBase>
          <Button
            className={classes.defaultBorder}
            variant="outlined"
            color="primary"
          >
            {"Save Changes"}
          </Button>
        </div>
      </div>

      <SeparatorLine className={classes.separatorLine} />

      <Typography className={typoClasses.h5}>{"Ingredients"}</Typography>

      <div className={classes.ingredientsContainer}>
        {directions &&
          directions.map((direction, index) => (
            <IngredientItem
              key={directions?.id || index}
              className={classes.ingredientRow}
              initialText={direction.text}
              avatarSrc={direction.avatarSrc}
              userId={direction.userId}
            />
          ))}

        <div className={classes.ingredientRow}>
          <ButtonAdd text={"Add Ingredient"} />
        </div>
      </div>
    </Paper>
  );
}
