import { useState } from "react";
import {
  ButtonBase,
  GridList,
  GridListTile,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import PlusIcon from "../../../../assets/icons/plus";
import image from "../../../../assets/images/kitchen/ImgGallery.png";

import image_sm from "../../../../assets/images/kitchen/ImgGallery_sm.png";
import useTypographyStyles from "../../../../assets/styles/useTypographyStyles";
import COLORS from "../../../../constants/colors";
import DashedButton from "./DashedButton";

let data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
    img: image,
    title: "Gallery1",
    featured: true,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
    img: image_sm,
    title: "Gallery2",
    featured: false,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b3",
    img: image_sm,
    title: "Gallery3",
    featured: false,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b4",
    img: image_sm,
    title: "Gallery4",
    featured: false,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b5",
    img: image_sm,
    title: "Gallery5",
    featured: false,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b6",
    img: image_sm,
    title: "Gallery6",
    featured: false,
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b7",
    img: image_sm,
    title: "Gallery7",
    featured: false,
  },
];

const styles = makeStyles(() => ({
  root: {
    padding: 16,
    borderRadius: 8,
  },
  gridList: {
    backgroundColor: COLORS.White,
  },
  imgGallery: {
    overflow: "unset",
    textAlign: "center",
    "&:last-child img": {
      opacity: 0.3,
    },
  },
  img: {
    top: "unset",
    position: "unset",
    transform: "unset",
    width: "100%",
  },
  linkGallery: {
    color: "#000",
    position: "absolute",
    opacity: 0.5,
    backgroundColor: "white",
    zIndex: 1,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 700,
    "&:hover": {
      textDecoration: "none",
    },
  },
  buttonUpload: {
    marginTop: 16,
  },
}));

export default function ImageGallery() {
  const classes = styles();
  const typoClasses = useTypographyStyles();
  const preventDefault = (event: any) => event.preventDefault();

  const countType = () => {
    const image = {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b7",
      img: image_sm,
      title: "Gallery7",
      featured: false,
    };
    setData([...imageData, image]);
    console.log(data);
  };

  const [imageData, setData] = useState(data);

  return (
    <Paper className={classes.root} elevation={0}>
      <Hidden mdUp>
        <Typography className={typoClasses.h3}>{"Gallery"}</Typography>
      </Hidden>

      <GridList cols={3} className={classes.gridList} cellHeight="auto">
        {imageData.map((items, index) => (
          <GridListTile
            key={items.id}
            className={classes.imgGallery}
            cols={items.featured ? 3 : 1}
            rows={items.featured ? 2 : 1}
          >
            {index < 7 ? (
              <img className={classes.img} src={items.img} alt={items.title} />
            ) : null}
            {index === 6 ? (
              <ButtonBase
                onClick={preventDefault}
                className={classes.linkGallery}
              >
                + {imageData.length}
              </ButtonBase>
            ) : null}
          </GridListTile>
        ))}
      </GridList>
      <label htmlFor="contained-button-file">
        <input
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          accept="img/*"
          onClick={countType}
        />
        <DashedButton
          component="span"
          aria-label="add"
          variant="extended"
          startComponent={<PlusIcon />}
          className={classes.buttonUpload}
        >
          <Typography className={typoClasses.lead}>{"Upload Image"}</Typography>
        </DashedButton>
      </label>
    </Paper>
  );
}
