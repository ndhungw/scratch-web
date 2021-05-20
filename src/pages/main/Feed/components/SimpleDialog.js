import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";
import React from "react";

import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";

import PlusIcon from "../../../../assets/icons/plus";
import CloseIcon from "../../../../assets/icons/close";

import COLORS from "../../../../constants/colors";

const SimpleDialog = ({
  title,
  list,
  handleChooseItem,
  handleClose,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const typoClasses = useTypographyStyles();
  const styles = classNames(classes.root, className);

  const handleListItemClick = (idItem) => {
    handleChooseItem(idItem);
    handleClose();
  };

  return (
    <>
      <Paper elevation={0} className={styles} {...rest}>
        <div className={classes.rowSpaceBetween}>
          <Typography className={typoClasses.h4}>{title || "Title"}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {list.map((item) => (
            <ListItem
              key={item.id}
              className={classNames({
                [classes.row]: true,
                // [classes.selectedRow]: selected === item.id,
              })}
              button
              onClick={() => handleListItemClick(item.id)}
            >
              <ListItemText className={typoClasses.body}>
                {item.title}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            autoFocus
            button
            onClick={() => handleListItemClick("addNewCookbook")}
            className={classes.row}
            // selected
          >
            <PlusIcon
              style={{
                marginRight: 10,
              }}
            />
            <ListItemText>
              <Typography className={typoClasses.button}>
                {"Add New Cookbook"}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Paper>
    </>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    padding: "1rem 1rem 0rem 1rem",
    borderRadius: 8,
  },
  row: {
    borderRadius: 8,
    margin: "0.5rem 0px",
  },
  selectedRow: {
    backgroundColor: COLORS.DarkGreenSelected,
  },
  rowSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
export default SimpleDialog;
