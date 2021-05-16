import { Box, makeStyles } from "@material-ui/core";
import classNames from "classnames";

// a list has children styles not have
// marginTop and marginBottom at first and last element
export default function List({
  className,
  itemStyle,
  children,
  horizontal = true,
  ...rest
}) {
  const classes = useStyles();
  const firstIndex = 0;
  const lastIndex = children.length - 1;

  return (
    <div className={classNames(classes.root, className)} {...rest}>
      {children.map((child, index) => {
        return (
          <Box
            className={classNames({
              [itemStyle]: true,
              [classes.resetMarginTop]:
                horizontal === false && index === firstIndex,
              [classes.resetMarginBottom]:
                horizontal === false && index === lastIndex,
              [classes.resetMarginLeft]:
                horizontal === true && index === firstIndex,
              [classes.resetMarginRight]:
                horizontal === true && index === lastIndex,
            })}
          >
            {child}
          </Box>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "blue",
  },
  resetMarginTop: {
    marginTop: 0,
  },
  resetMarginRight: {
    marginRight: 0,
  },
  resetMarginBottom: {
    marginBottom: 0,
  },
  resetMarginLeft: {
    marginLeft: 0,
    // backgroundColor: "yellow",
  },
}));
