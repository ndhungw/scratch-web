import { useState } from "react";
import classNames from "classnames";

import { Avatar, makeStyles } from "@material-ui/core";

import COLORS from "../../../../constants/colors";

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

type IngredientItemProps = {
  content: string;
  idUser: string;
  avatarSrc?: string;
  [key: string]: any;
};
const IngredientItem = ({
  content,
  // eslint-disable-next-line no-unused-vars
  idUser,
  avatarSrc,
  className,
  style,
}: IngredientItemProps) => {
  const classes = useStyles();
  const [text, setText] = useState(content || "");

  const handleChangeText = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div className={classNames(classes.ingredientRow, className)} style={style}>
      <Avatar src={avatarSrc || ""} className={classes.avatar} />
      <EditableText text={text} handleChangeText={handleChangeText} />
    </div>
  );
};

export default IngredientItem;
