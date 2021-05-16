import { memo } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import COLORS from "../../constants/colors";

function SeparatorLine({ className }) {
  const classes = useStyles();
  return <div className={classNames(classes.root, className)} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderBlockWidth: 0,
    borderInlineWidth: 0,
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    borderColor: COLORS.Whisper,
    borderRadius: 0.5,
    width: "100%",
  },
}));

export default memo(SeparatorLine);
