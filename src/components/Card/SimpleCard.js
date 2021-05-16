import { Card, Typography } from "@material-ui/core";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    width: 155,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
}));
const SimpleCard = ({ id, title, imageSrc, handleSelectCard, ...rest }) => {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  return (
    <Card onClick={handleSelectCard(id)} {...rest}>
      <img src={imageSrc} alt={`card of ${title}`} className={classes.image} />
      <Typography className={typoClasses.lead} gutterBottom>
        {title || "Title"}
      </Typography>
    </Card>
  );
};
export default SimpleCard;
