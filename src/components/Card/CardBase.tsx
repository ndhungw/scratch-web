import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";
import classNames from "classnames";
import { ReactNode } from "react";

type CardBaseProps = {
  title: string;
  titleStyle?: string | any;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

export default function CardBase({
  title,
  titleStyle,
  children,
  className,
  ...rest
}: CardBaseProps) {
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

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "1.25rem",
    borderRadius: 8,
  },
  title: {
    marginBottom: "1rem",
  },
}));
