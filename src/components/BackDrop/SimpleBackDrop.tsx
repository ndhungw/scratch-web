import React, { ReactNode } from "react";
import { makeStyles, Backdrop, CircularProgress } from "@material-ui/core";

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
