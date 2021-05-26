import {
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import COLORS from "../../../../constants/colors";
import EditableText from "./EditableText";

const Direction = ({ order, content }) => {
  const classes = useStyles();
  const [newContent, setNewContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const handleChangeText = (value) => {
    setNewContent(value);
  };
  return (
    <>
      <ListItem className={classes.listItem}>
        <ListItemIcon>
          <li className={classes.bullet}>{order}</li>
        </ListItemIcon>
        <ListItemText
          className={classes.listItemText}
          onClick={() => setIsEditing(true)}
        >
          {isEditing ? (
            <EditableText
              text={newContent}
              handleChangeText={handleChangeText}
              deleteMode={true}
            />
          ) : (
            <>{newContent}</>
          )}
        </ListItemText>
      </ListItem>
    </>
  );
};

const useStyles = makeStyles(() => ({
  bullet: {
    position: "relative",
    border: "1px solid",
    borderColor: COLORS.DarkGreen,
    color: COLORS.DarkGreen,
    borderRadius: "50%",
    width: 23,
    height: 23,
    justifyContent: "center",
    textAlign: "center",
  },
  listItem: {
    paddingRight: 0,
    paddingLeft: 0,
    alignItems: "flex-start",
    marginTop: 2,
  },
  listItemText: {
    color: COLORS.Grey,
    margin: 0,
  },
}));

export default Direction;
