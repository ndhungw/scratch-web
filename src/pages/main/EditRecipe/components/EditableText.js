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
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
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
 * deleteMode=true
 * => Show delete button
 */
export default function EditableText({
  text,
  handleChangeText,
  isAdornmentAtStart,
  deleteMode,
  ...rest
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
    <FormControl required={true} fullWidth {...rest}>
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
          fullWidth
        />

        {!isEditing && (
          <InputAdornment
            position="end"
            className={classNames({
              [classes.inputAdornmentAtStart]: isAdornmentAtStart,
            })}
          >
            {deleteMode ? (
              <IconButton>
                <DeleteOutlineIcon color="secondary" />
              </IconButton>
            ) : null}
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
