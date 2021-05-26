import {
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import COLORS from "../../../../constants/colors";

const Direction = ({ order, content }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <div className={classes.bullet}>{order}</div>
        </ListItemIcon>
        <ListItemText className={classes.listItemText}>{content}</ListItemText>
      </ListItem>
    </>
  );
};

const useStyles = makeStyles(() => ({
  bullet: {
    border: "1px solid",
    borderColor: COLORS.DarkGreen,
    color: COLORS.DarkGreen,
    borderRadius: "50%",
    width: 20,
    height: 20,
    padding: 2,
    textAlign: "center",
  },
  listItem: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  listItemText: {
    color: COLORS.Grey,
  },
}));

export default Direction;
