import {
  FEED_COMMENTS_COUNT,
  FEED_CREATED_AT,
  FEED_DESCRIPTION,
  FEED_LIKES_COUNT,
} from "../../defaultValues";
import { recipe_01, recipe_02, recipe_03 } from "./recipes";
import { user_01, user_02 } from "./users";

let FEED_01 = {
  id: "feed_01",
  idUser: user_01.id,
  idRecipe: recipe_01.id,
  title: recipe_01.name,
  description: FEED_DESCRIPTION, // only feed has this
  imageSrc: recipe_01.imageSrcList[0],
  createdAt: FEED_CREATED_AT,
  likesCount: FEED_LIKES_COUNT,
  commentsCount: FEED_COMMENTS_COUNT,
};

let FEED_02 = {
  id: "feed_02",
  idUser: user_01.id,
  idRecipe: recipe_02.id,
  title: recipe_02.name,
  description: FEED_DESCRIPTION, // only feed has this
  imageSrc: recipe_02.imageSrcList[0],
  createdAt: FEED_CREATED_AT,
  likesCount: FEED_LIKES_COUNT,
  commentsCount: FEED_COMMENTS_COUNT,
};

let FEED_03 = {
  id: "feed_03",
  idUser: user_02.id,
  idRecipe: recipe_03.id,
  title: recipe_03.name,
  description: FEED_DESCRIPTION, // only feed has this
  imageSrc: recipe_03.imageSrcList[0],
  createdAt: FEED_CREATED_AT,
  likesCount: FEED_LIKES_COUNT,
  commentsCount: FEED_COMMENTS_COUNT,
};

export { FEED_01, FEED_02, FEED_03 };
