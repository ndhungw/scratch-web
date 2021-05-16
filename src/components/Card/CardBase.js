import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";
import classNames from "classnames";

export default function CardBase({
  title,
  titleStyle,
  children,
  className,
  ...rest
}) {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();
  const cardBaseStyles = classNames(classes.root, className);

  return (
    <Paper elevation={0} className={cardBaseStyles} {...rest}>
      <Typography
        className={classNames({
          [typoClasses.h5]: true,
          [classes.title]: true,
          [titleStyle]: titleStyle,
        })}
      >
        {title || "Title"}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1.25rem",
    borderRadius: 8,
  },
  title: {
    marginBottom: "1rem",
  },
}));
