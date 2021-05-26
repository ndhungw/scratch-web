/* eslint-disable no-unused-vars */
import React from "react";
import { Typography } from "@material-ui/core";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core";
import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";
import CardBase from "../../../../components/Card/CardBase";
import EditableText from "./EditableText";

const useStyles = makeStyles((theme) => ({
  root: {},
  infoContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  infoItemRow: {
    width: "45%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  label: {
    marginRight: theme.spacing(2),
    opacity: 0.4,
  },
}));

export default function AdditionalInfoCard({
  servingTime,
  tags,
  nutritionFacts,
}) {
  const classes = useStyles();
  const typoClasses = useTypographyStyles();

  return (
    <CardBase title={"Additional Information"}>
      <div className={classes.infoContainer}>
        <div className={classes.infoItemRow}>
          <div>
            <Typography
              noWrap
              className={classNames(typoClasses.body, classes.label)}
            >
              {"Serving Time"}
            </Typography>
          </div>

          <EditableText isAdornmentAtStart={true} />
        </div>
        <div className={classes.infoItemRow}>
          <div>
            <Typography
              noWrap
              className={classNames(typoClasses.body, classes.label)}
            >
              {"Tags"}
            </Typography>
          </div>
          <EditableText isAdornmentAtStart={true} />
        </div>
        <div className={classes.infoItemRow}>
          <div>
            <Typography
              noWrap
              className={classNames(typoClasses.body, classes.label)}
            >
              {"Nutrition Facts"}
            </Typography>
          </div>
          <EditableText isAdornmentAtStart={true} />
        </div>
      </div>
    </CardBase>
  );
}
