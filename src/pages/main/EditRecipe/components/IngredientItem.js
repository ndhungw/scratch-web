import React, { useState } from "react";

import {
  Avatar,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";

import EditIcon from "../../../../assets/icons/edit";
import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";
import COLORS from "../../../../constants/colors";
import classNames from "classnames";

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
  const typoClasses = useTypographyStyles();
  const [text, setText] = useState(initialText || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeText = (e) => {
    if (isEditing) {
      setText(e.target.value);
    }
  };

  const handleClickEdit = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classNames(classes.ingredientRow, className)} style={style}>
      <Avatar src={avatarSrc || ""} className={classes.avatar} />

      <FormControl fullWidth>
        <Input
          className={typoClasses.body}
          value={text}
          onChange={handleChangeText}
          onBlur={handleBlur}
          disableUnderline={!isEditing}
          multiline
          disabled={!isEditing}
          classes={{
            disabled: classes.normalColorText,
          }}
          endAdornment={
            !isEditing && (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickEdit}
                  onMouseDown={handleMouseDownPassword}
                  disabled={isEditing}
                >
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
    </div>
  );
}
