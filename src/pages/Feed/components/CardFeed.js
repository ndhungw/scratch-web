import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Button, ButtonBase } from "@material-ui/core";

// icons
import DotIcon from "../../../assets/icons/dot";
import LikeIcon from "../../../assets/icons/like";
import PlusIcon from "../../../assets/icons/plus";

// constants
import {
  RECIPE_TITLE,
  RECIPE_DESCRIPTION,
  RECIPE_AUTHOR_NAME,
  RECIPE_IMAGE_SOURCE,
  RECIPE_CREATED_AT,
  USER_AVATAR_SOURCE,
  RECIPE_COMMENTS_COUNT,
} from "../../../constants/defaultValues";
import COLORS from "../../../constants/colors";
import classNames from "classnames";
import { simplify } from "../../../utils";

export default function RecipeReviewCard({
  title,
  description,
  imageSrc,
  author,
  authorAvatarSrc,
  createdAt,
  likesCount,
  commentsCount,
  className,
  ...rest
}) {
  const classes = useStyles();
  const styles = classNames(classes.root, className);
  const [isLiked, setIsLiked] = useState(false);

  const _toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className={styles}>
      <CardHeader
        avatar={
          <Avatar
            alt={author || RECIPE_AUTHOR_NAME}
            src={authorAvatarSrc || USER_AVATAR_SOURCE}
            aria-label="recipe"
            className={classes.avatar}
          >
            R
          </Avatar>
        }
        title={author || RECIPE_AUTHOR_NAME}
        subheader={`${createdAt || RECIPE_CREATED_AT} ago`}
      />
      <CardMedia
        className={classes.media}
        image={imageSrc || RECIPE_IMAGE_SOURCE}
        title="Paella dish"
      />
      <CardContent className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
          <Typography variant="h5" component="h2">
            {title || RECIPE_TITLE}
          </Typography>
          <IconButton aria-label="delete" onClick={_toggleLike}>
            <LikeIcon isLiked={isLiked} />
          </IconButton>
        </div>
        <Typography variant="body2" color="textSecondary" component="p">
          {description || RECIPE_DESCRIPTION}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionWrapper}>
        <div className={classes.actionLeft}>
          <ButtonBase>{`${simplify(
            likesCount || RECIPE_COMMENTS_COUNT
          )} likes`}</ButtonBase>
          <DotIcon />
          <ButtonBase>{`${simplify(
            commentsCount || RECIPE_COMMENTS_COUNT
          )} comments`}</ButtonBase>
        </div>

        <div className={classes.actionLeft}>
          <Button
            variant="outlined"
            startIcon={<PlusIcon />}
            className={classes.buttonSave}
          >
            Save
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 700,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: COLORS.AliceBlue,
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentWrapper: {},
  actionWrapper: {
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    // backgroundColor: "green",
  },
  actionLeft: {
    display: "flex",
  },
  buttonSave: {
    color: COLORS.DarkGreen,
    fontWeight: 700,
    fontSize: "0.875rem",
    borderColor: COLORS.DarkGreen,
  },
}));
