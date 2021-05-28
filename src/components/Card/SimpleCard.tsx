import { makeStyles, Card, Typography } from "@material-ui/core";
import useTypographyStyles from "../../assets/styles/useTypographyStyles";

const useStyles = makeStyles(() => ({
  root: {},
  image: {
    width: 155,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
}));

type SimpleCardProps = {
  id: string;
  title: string;
  imageSrc: string;
  // eslint-disable-next-line no-unused-vars
  handleSelectCard: (id: string) => (event: any) => void;
  [key: string]: any;
};

const SimpleCard = ({
  id,
  title,
  imageSrc,
  handleSelectCard,
  ...rest
}: SimpleCardProps) => {
  const typoClasses = useTypographyStyles();
  const classes = useStyles();

  return (
    <Card onClick={handleSelectCard(id)} raised {...rest}>
      <img src={imageSrc} alt={`card of ${title}`} className={classes.image} />
      <Typography className={typoClasses.lead} gutterBottom>
        {title || "Title"}
      </Typography>
    </Card>
  );
};
export default SimpleCard;
