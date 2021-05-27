import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";

import { makeStyles } from "@material-ui/core";
import DotIcon from "../../assets/icons/dot";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
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

export default function RecipeCard({
  title,
  imageSrc,
  servingTime,
  ingredients,
  className,
  ...rest
}) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  return (
    <Paper
      elevation={1}
      className={classNames(classes.root, className)}
      {...rest}
    >
      <img src={imageSrc} alt={title || "no alt"} className={classes.image} />
      <div className={classes.content}>
        <Typography className={typoClasses.cardItem}>
          {title || "Cooked Coconut Mussels"}
        </Typography>
        <div className={classes.bottom}>
          <div className={classes.bottomLeft}>
            <Typography className={typoClasses.textGray}>{`${
              servingTime || 5
            } mins`}</Typography>
            <DotIcon />
            <Typography className={typoClasses.textGray}>
              {`${ingredients?.length || 4} ingredients`}
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
