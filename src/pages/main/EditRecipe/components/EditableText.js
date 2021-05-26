import React, { useState } from "react";

import {
  FormControl,
  FormHelperText,
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
import { useFormik } from "formik";
import * as Yup from "yup";

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
  formHelperText: {
    color: COLORS.Red,
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

  const formik = useFormik({
    initialValues: {
      text: text,
    },
    validationSchema: Yup.object({
      text: Yup.string().min(4, "Minimum 4 characters").required("Required!"),
    }),
    // return values.text on Blur (on exiting Edit Mode)
    onSubmit: (values) => {
      setIsEditing(false);
      handleChangeText(values.text);
    },
  });

  return (
    <FormControl fullWidth {...rest}>
      <FormHelperText className={classes.formHelperText}>
        {formik.errors.text}
      </FormHelperText>
      <div className={classes.formElementsWrapper}>
        <Input
          name="text"
          label={formik.errors.text}
          className={typoClasses.body}
          value={formik.values.text}
          // onChange={handleChangeText}
          // onBlur={handleBlur}
          onChange={formik.handleChange}
          onBlur={formik.handleSubmit}
          disableUnderline={!isEditing}
          multiline
          disabled={!isEditing}
          classes={{
            disabled: classes.normalColorText,
          }}
          fullWidth
          error={formik.errors.text ? true : false}
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
