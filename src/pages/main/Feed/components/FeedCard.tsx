import { useState } from "react";
import {
  makeStyles,
  Button,
  ButtonBase,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";

import classNames from "classnames";

// icons
import DotIcon from "../../../../assets/icons/dot";
import LikeIcon from "../../../../assets/icons/like";
import PlusIcon from "../../../../assets/icons/plus";

// constants
import {
  RECIPE_TITLE,
  RECIPE_DESCRIPTION,
  RECIPE_AUTHOR_NAME,
  RECIPE_IMAGE_SOURCE,
  RECIPE_CREATED_AT,
  USER_AVATAR_SOURCE,
  RECIPE_COMMENTS_COUNT,
} from "../../../../constants/defaultValues";
import COLORS from "../../../../constants/colors";

import SimpleDialog from "./SimpleDialog";

import { simplify } from "../../../../utils";
import { CookbookType, RecipeType } from "../../../../ts/types";

type FeedCardProps = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  author: string;
  authorAvatarSrc: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  recipeDta?: RecipeType;
  // eslint-disable-next-line no-unused-vars
  handleSave: (idFeed: string, idCookbook: string) => void;
  savedCookbooks: CookbookType[];
  className?: string;
  [key: string]: any;
};

const FeedCard = ({
  id,
  title,
  description,
  imageSrc,
  author,
  authorAvatarSrc,
  createdAt,
  likesCount,
  commentsCount,
  // eslint-disable-next-line no-unused-vars
  recipeData,
  handleSave,
  savedCookbooks,
  className,
  ...rest
}: FeedCardProps) => {
  const classes = useStyles();
  const styles = classNames(classes.root, className);
  const [isLiked, setIsLiked] = useState(false);
  const [isChoosingCookbook, setIsChoosingCookbook] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleChooseItemFromDialog = (idCookbook: string) => {
    handleSave(id, idCookbook);
  };
  const handleCloseDialog = () => {
    setIsChoosingCookbook(false);
  };

  const handleClickButtonSave = () => {
    setIsChoosingCookbook(true);
  };

  return (
    <Card
      className={styles}
      {...rest}
      style={{
        position: "relative",
      }}
    >
      {/* overlay dialog */}
      <div
        className={classNames({
          [classes.overlay]: true,
          [classes.isVisible]: isChoosingCookbook,
        })}
      >
        {savedCookbooks && (
          <SimpleDialog
            title={"Save to"}
            list={savedCookbooks}
            handleChooseItem={handleChooseItemFromDialog}
            handleClose={handleCloseDialog}
          />
        )}
      </div>

      {/* main  */}
      <CardHeader
        avatar={
          <Avatar
            alt={author || RECIPE_AUTHOR_NAME}
            src={authorAvatarSrc || USER_AVATAR_SOURCE}
            aria-label="recipe"
            className={classes.avatar}
          >
            {author}
          </Avatar>
        }
        title={author || RECIPE_AUTHOR_NAME}
        subheader={`${createdAt || RECIPE_CREATED_AT} ago`}
      />

      <CardMedia
        className={classes.media}
        image={imageSrc || RECIPE_IMAGE_SOURCE}
      />

      <CardContent className={classes.contentWrapper}>
        <div className={classes.titleWrapper}>
          <Typography variant="h5" component="h2">
            {title || RECIPE_TITLE}
          </Typography>
          <IconButton aria-label="delete" onClick={handleToggleLike}>
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
            onClick={handleClickButtonSave}
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
};

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 580,
    borderRadius: 8,
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
  //
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(40,40,40,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    visibility: "hidden",
  },
  isVisible: {
    visibility: "visible",
  },
}));

export default FeedCard;
