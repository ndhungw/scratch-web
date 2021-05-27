// import * as React from "react";
import React, { ReactNode } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const SimpleBackdrop = ({ children }: { children: ReactNode }) => {
  const classes = useStyles();

  return (
    <div>
      {children}
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
};
export default SimpleBackdrop;
