import { GridList, GridListTile, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import * as React from "react";

import image from "../../../assets/images/ImgGallery.png";

import image_sm from "../../../assets/images/ImgGallery_sm.png";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
    img: image,
    title: "Gallery1",
    featured: true,
    row: 2,
    cols: 3,
    imageCount: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b2",
    img: image_sm,
    title: "Gallery2",
    featured: false,
    row: 1,
    cols: 1,
    imageCount: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b3",
    img: image_sm,
    title: "Gallery3",
    featured: false,
    cols: 1,
    row: 1,
    imageCount: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b4",
    img: image_sm,
    title: "Gallery4",
    featured: false,
    cols: 1,
    row: 1,
    imageCount: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b5",
    img: image_sm,
    title: "Gallery5",
    featured: false,
    cols: 1,
    row: 1,
    imageCount: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b6",
    img: image_sm,
    title: "Gallery6",
    featured: false,
    cols: 1,
    row: 1,
    imageCount: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b7",
    img: image_sm,
    title: "Gallery7",
    featured: false,
    cols: 1,
    row: 1,
    imageCount: "12+",
  },
];
export default function ImageGallery() {
  const classes = styles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <GridList cols={3} className={classes.gridgallery}>
        {data.map((items) => (
          <GridListTile
            key={items.id}
            className={classes.imggallery}
            cols={items.cols || 1}
          >
            <img className={classes.img} src={items.img} alt={items.title} />
            <Link
              href="#"
              onClick={preventDefault}
              className={classes.linkGallery}
            >
              {items.imageCount}
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

const styles = makeStyles(() => ({
  imggallery: {
    height: "100%!important",
    "&:last-child img": {
      opacity: "50%",
    },
  },
  linkGallery: {
    color: "#000",
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "700",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));
