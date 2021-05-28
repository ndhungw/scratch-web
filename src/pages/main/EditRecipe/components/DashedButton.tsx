import { ReactNode } from "react";
import classNames from "classnames";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonAddIngredient: {
    opacity: 0.7,
    borderRadius: theme.spacing(1),
    borderStyle: "dashed",
    borderWidth: 1,
    width: "100%",
    justifyContent: "flex-start",
    padding: "0.5rem",
    "&:hover": {
      opacity: 1,
    },
    textTransform: "none",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  textField: {
    flexGrow: 1,
  },
}));

type DashedButtonProps = {
  handleClick?: () => void;
  startComponent?: ReactNode;
  endComponent?: ReactNode;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
};

const DashedButton = ({
  handleClick,
  startComponent,
  endComponent,
  children,
  className,
  ...rest
}: DashedButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      onClick={handleClick}
      className={classNames(classes.buttonAddIngredient, className)}
      variant="outlined"
      fullWidth
      startIcon={startComponent}
      endIcon={endComponent}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default DashedButton;
