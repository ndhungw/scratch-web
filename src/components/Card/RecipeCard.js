import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { RECIPE_SAMPLE } from "../../constants/data";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";

import { makeStyles } from "@material-ui/core";
import DotIcon from "../../assets/icons/dot";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 440,
    borderRadius: 8,
  },
  image: {
    width: 440,
    height: 220,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLeft: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    padding: "1.25rem",
  },
}));

export default function RecipeCard({ className, ...rest }) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  return (
    <Paper
      elevation={4}
      className={classNames(classes.root, className)}
      {...rest}
    >
      <img src={RECIPE_SAMPLE.imageSrc} alt="" className={classes.image} />
      <div className={classes.content}>
        <Typography className={typoClasses.cardItem}>
          {"Cooked Coconut Mussels"}
        </Typography>
        <div className={classes.bottom}>
          <div className={classes.bottomLeft}>
            <Typography className={typoClasses.textGray}>{"5 mins"}</Typography>
            <DotIcon />
            <Typography className={typoClasses.textGray}>
              {"4 ingredients"}
            </Typography>
          </div>
          <div>
            <Button color="primary" variant="outlined">
              Cook
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  );
}
