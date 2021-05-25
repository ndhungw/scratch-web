import {
  Button,
  ButtonBase,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import EditIcon from "../../../assets/icons/edit";
import SeparatorLine from "../../../components/SeparatorLine/SeparatorLine";

import { makeStyles } from "@material-ui/core";
import useTypographyStyles from "../../../assets/styles/useTypographyStyles";
import PlusIcon from "../../../assets/icons/plus";
import IngredientItem from "./components/IngredientItem";

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

const EditRecipePage = ({ directions }) => {
  const classes = useStyles();
  const typoClasses = useTypographyStyles();

  return (
    <>
      <CssBaseline />
      <Grid
        container
        style={{ backgroundColor: "yellowgreen", height: "100vh" }}
        justify="center"
      >
        {/* wrapper */}
        <Grid
          item
          xs={11}
          container
          justify="center"
          // spacing={2}
          style={{ backgroundColor: "violet" }}
        >
          <Grid
            item
            xs={3}
            xl={3}
            container
            direction="column"
            style={{ backgroundColor: "aqua" }}
          >
            <Grid item style={{ backgroundColor: "blue" }}>
              Item left
            </Grid>
          </Grid>
          <Grid
            item
            xs={9}
            xl={9}
            container
            direction="column"
            style={{ backgroundColor: "grey" }}
          >
            <Grid item style={{ backgroundColor: "red" }}>
              <Paper
                elevation={0}
                className={classNames(
                  classes.rightFirstSection,
                  classes.defaultBorder
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

                <Typography className={typoClasses.h5}>
                  {"Ingredients"}
                </Typography>

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
                    <ButtonBase
                      className={classNames(
                        classes.buttonAddIngredient,
                        classes.defaultBorder
                      )}
                    >
                      <PlusIcon className={classes.marginRight1} />
                      <Typography className={typoClasses.lead}>
                        {"Add Ingredient"}
                      </Typography>
                    </ButtonBase>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item style={{ backgroundColor: "red" }}>
              {"How to cook"}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default EditRecipePage;
