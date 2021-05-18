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
  COOKBOOK_IMAGE_SOURCE,
  RECIPE_ITEM_IMAGE_SOURCE,
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

const ingredient_sample_01 = {
  id: "ingredients_01",
  name: "Potato",
};
const ingredient_sample_02 = {
  id: "ingredients_02",
  name: "Cheese",
};

const recipe_01 = {
  id: "recipe_01",
  recipeName: "Recipe item 01 ABC XYZ", // title of feed
  imageSrc: RECIPE_ITEM_IMAGE_SOURCE, // imageSrc of feed
  ingredients: [ingredient_sample_01, ingredient_sample_02],
  // how to cook
  directions: ["Start", "During", "End"],
  videoSrc: "",
  // additional information
  servingTime: "5", // minutes
  nutritionFacts: "Nutrition facts here",
  tags: ["Hello", "Goodbye"],
};

const recipe_02 = {
  id: "recipe_02",
  recipeName: "Recipe item 02 ABC XYZ",
  imageSrc: RECIPE_ITEM_IMAGE_SOURCE,
  ingredients: [ingredient_sample_01, ingredient_sample_02],
  // how to cook
  directions: ["Start", "During", "End"],
  videoSrc: "",
  // additional information
  servingTime: "5", // minutes
  nutritionFacts: "Nutrition facts here",
  tags: ["Hello", "Goodbye"],
};

const recipe_03 = {
  id: "recipe_03",
  recipeName: "Recipe item 03 ABC XYZ",
  imageSrc: RECIPE_ITEM_IMAGE_SOURCE,
  ingredients: [ingredient_sample_01, ingredient_sample_02],
  // how to cook
  directions: ["Start", "During", "End"],
  videoSrc: "",
  // additional information
  servingTime: "5", // minutes
  nutritionFacts: "Nutrition facts here",
  tags: ["Hello", "Goodbye"],
};

const FEED_SAMPLE_01 = {
  id: "feed_01",
  title: `${RECIPE_TITLE}_01`,
  description: RECIPE_DESCRIPTION, // only feed has this
  imageSrc: RECIPE_IMAGE_SOURCE,
  authorName: RECIPE_AUTHOR_NAME,
  authorAvatarSrc: USER_AVATAR_SOURCE,
  createdAt: RECIPE_CREATED_AT,
  likesCount: RECIPE_LIKES_COUNT,
  commentsCount: RECIPE_COMMENTS_COUNT,
  // recipe data
  recipeData: recipe_01,
};

const FEED_SAMPLE_02 = {
  id: "feed_02",
  title: `${RECIPE_TITLE}_02`,
  description: RECIPE_DESCRIPTION, // only feed has this
  imageSrc: RECIPE_IMAGE_SOURCE,
  authorName: RECIPE_AUTHOR_NAME,
  authorAvatarSrc: USER_AVATAR_SOURCE,
  createdAt: RECIPE_CREATED_AT,
  likesCount: RECIPE_LIKES_COUNT,
  commentsCount: RECIPE_COMMENTS_COUNT,
  // recipe data
  recipeData: recipe_02,
};

const FEED_SAMPLE_03 = {
  id: "feed_03",
  title: `${RECIPE_TITLE}_03`,
  description: RECIPE_DESCRIPTION, // only feed has this
  imageSrc: RECIPE_IMAGE_SOURCE,
  authorName: RECIPE_AUTHOR_NAME,
  authorAvatarSrc: USER_AVATAR_SOURCE,
  createdAt: RECIPE_CREATED_AT,
  likesCount: RECIPE_LIKES_COUNT,
  commentsCount: RECIPE_COMMENTS_COUNT,
  // recipe data
  recipeData: recipe_03,
};

const FEED_SAMPLE_LIST = [FEED_SAMPLE_01, FEED_SAMPLE_02, FEED_SAMPLE_03];

const USER_COOK_BOOKS = [
  {
    id: "western_cookbook",
    title: "Western",
    recipesCount: 2,
    imageSrc: COOKBOOK_IMAGE_SOURCE,
    recipesList: [recipe_01, recipe_02],
  },
  {
    id: "italian_cookbook",
    title: "Italian",
    recipesCount: 3,
    imageSrc: COOKBOOK_IMAGE_SOURCE,
    recipesList: [recipe_01, recipe_02, recipe_03],
  },
];

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
  // kitchen data
  recipes: {
    title: "Recipes",
    totalCount: 5, // sample
    cookBooks: USER_COOK_BOOKS,
  },
  saved: {
    title: "Saved",
    totalCount: 0,
    cookBooks: [
      {
        id: "saved_cookbook_01",
        title: "Quick launch",
        imageSrc: COOKBOOK_IMAGE_SOURCE,
        recipesCount: 0,
        recipesList: [],
      },
      {
        id: "saved_cookbook_02",
        title: "Healthy",
        imageSrc: COOKBOOK_IMAGE_SOURCE,
        recipesCount: 0,
        recipesList: [],
      },
    ],
  },
  following: {
    title: "Following",
    totalCount: 0, // sample
    people: [], // array of people
  },
};

const TOP_5_RECIPES = [
  "Tea-Smoked Creamy Chicken",
  "Pickled Savory Tortilla",
  "Stuffed Basil & Mint Salmon",
  "Strawberry Jelly",
  "Cinnamon and Lime Toffee",
];

const SECTOR_NAMES = ["recipes", "saved", "following"];

export {
  RECIPE_SAMPLE,
  USER_SAMPLE,
  TOP_5_RECIPES,
  FEED_SAMPLE_LIST,
  SECTOR_NAMES,
};
