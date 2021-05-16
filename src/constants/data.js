import {
  RECIPE_TITLE,
  RECIPE_DESCRIPTION,
  RECIPE_AUTHOR_NAME,
  RECIPE_IMAGE_SOURCE,
  RECIPE_CREATED_AT,
  RECIPE_LIKES_COUNT,
  RECIPE_COMMENTS_COUNT,
  USER_ID,
  USER_AVATAR_SOURCE,
  USER_USERNAME,
  USER_PASSWORD,
  USER_FULL_NAME,
  USER_BIO,
  USER_EMAIL,
  USER_PHONE,
  USER_LIKES_COUNT,
  USER_FOLLOWERS_COUNT,
} from "./defaultValues";

// RECIPE
const RECIPE_SAMPLE = {
  title: RECIPE_TITLE,
  description: RECIPE_DESCRIPTION,
  authorName: RECIPE_AUTHOR_NAME,
  imageSrc: RECIPE_IMAGE_SOURCE,
  createdAt: RECIPE_CREATED_AT,
  likesCount: RECIPE_LIKES_COUNT,
  commentsCount: RECIPE_COMMENTS_COUNT,
};

// User
const USER_SAMPLE = {
  id: USER_ID,
  username: USER_USERNAME,
  password: USER_PASSWORD,
  avatarSrc: USER_AVATAR_SOURCE,
  fullName: USER_FULL_NAME,
  bio: USER_BIO,
  email: USER_EMAIL,
  phone: USER_PHONE,
  likesCount: USER_LIKES_COUNT,
  followersCount: USER_FOLLOWERS_COUNT,
};

const TOP_5_RECIPES = [
  "Tea-Smoked Creamy Chicken",
  "Pickled Savory Tortilla",
  "Stuffed Basil & Mint Salmon",
  "Strawberry Jelly",
  "Cinnamon and Lime Toffee",
];

const USER_KITCHEN_SAMPLE = [
  {
    title: "recipes",
    itemsCount: 20,
    itemList: [
      {
        id: "recipe_01",
        title: "Sweet",
        imageSrc: "",
      },
      {
        id: "recipe_02",
        title: "Chocolate",
        imageSrc: "",
      },
    ],
  },
  {
    title: "saved",
    itemsCount: 75,
    itemList: [
      {
        id: "saved_01",
        title: "Saved 01",
        imageSrc: "",
      },
      {
        id: "saved_02",
        title: "Saved 02",
        imageSrc: "",
      },
    ],
  },
  {
    title: "following",
    itemsCount: 248,
    itemList: [
      {
        id: "following_01",
        title: "Following 01",
        imageSrc: "",
      },
      {
        id: "following_02",
        title: "Following 02",
        imageSrc: "",
      },
    ],
  },
];

export { RECIPE_SAMPLE, USER_SAMPLE, USER_KITCHEN_SAMPLE, TOP_5_RECIPES };
