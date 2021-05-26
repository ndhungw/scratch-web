import React, { useState } from "react";

import {
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

const useStyles = makeStyles(() => ({
  normalColorText: {
    color: COLORS.VampireBlack,
  },
  formElementsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputAdornmentAtStart: {
    alignSelf: "flex-start",
    marginTop: "1rem",
  },
}));

/**
 * isAdornmentAtStart=true
 * => the icon/icon-button will be placed at top of multiline text
 */
export default function EditableText({
  text,
  handleChangeText,
  isAdornmentAtStart,
}) {
  const classes = useStyles();
  const typoClasses = useTypographyStyles();
  const [isEditing, setIsEditing] = useState(false);

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
    <FormControl fullWidth>
      <div className={classes.formElementsWrapper}>
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
        />

        {!isEditing && (
          <InputAdornment
            position="end"
            className={classNames({
              [classes.inputAdornmentAtStart]: isAdornmentAtStart,
            })}
          >
            <IconButton
              onClick={handleClickEdit}
              onMouseDown={handleMouseDownPassword}
              disabled={isEditing}
            >
              <EditIcon />
            </IconButton>
          </InputAdornment>
        )}
      </div>
    </FormControl>
  );
}
