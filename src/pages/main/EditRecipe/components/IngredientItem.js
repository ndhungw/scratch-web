import React, { useState } from "react";

import { Avatar, makeStyles } from "@material-ui/core";

import COLORS from "../../../../constants/colors";
import classNames from "classnames";
import EditableText from "./EditableText";

const useStyles = makeStyles((theme) => ({
  ingredientRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "48%",
  },

  avatar: {
    marginRight: theme.spacing(2),
  },

  normalColorText: {
    color: COLORS.VampireBlack,
  },
}));

export default function IngredientItem({
  avatarSrc,
  initialText,
  className,
  style,
}) {
  const classes = useStyles();
  const [text, setText] = useState(initialText || "");

  const handleChangeText = (value) => {
    setText(value);
  };

  return (
    <div className={classNames(classes.ingredientRow, className)} style={style}>
      <Avatar src={avatarSrc || ""} className={classes.avatar} />
      <EditableText text={text} handleChangeText={handleChangeText} />
    </div>
  );
}
