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
  recipeName: "Recipe item 01 ABC XYZ",
  imageSrc: "",
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
  imageSrc: "",
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
  imageSrc: "",
  ingredients: [ingredient_sample_01, ingredient_sample_02],
  // how to cook
  directions: ["Start", "During", "End"],
  videoSrc: "",
  // additional information
  servingTime: "5", // minutes
  nutritionFacts: "Nutrition facts here",
  tags: ["Hello", "Goodbye"],
};

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
    totalCount: 123,
    cookBooks: USER_COOK_BOOKS,
  },
  saved: {
    title: "Saved",
    totalCount: 5,
    recipes: [recipe_01, recipe_02], // array of recipes
  },
  following: {
    title: "Following",
    totalCount: 10,
    people: [], // array of people
  },
};

// const USER_KITCHEN_SAMPLE = [
//   {
//     id: "recipe_book",
//     title: "recipes",
//     itemsCount: 3,
//     itemList: [
//       {
//         id: "recipe_01",
//         title: "Sweet",
//         imageSrc: "",
//       },
//       {
//         id: "recipe_02",
//         title: "Chocolate",
//         imageSrc: "",
//       },
//     ],
//   },
//   {
//     id: "save_book",
//     title: "saved",
//     itemsCount: 2,
//     itemList: [
//       {
//         id: "saved_01",
//         title: "Saved 01",
//         imageSrc: "",
//       },
//       {
//         id: "saved_02",
//         title: "Saved 02",
//         imageSrc: "",
//       },
//     ],
//   },
//   {
//     id: "following_book",
//     title: "following",
//     itemsCount: 4,
//     itemList: [
//       {
//         id: "following_01",
//         title: "Following 01",
//         imageSrc: "",
//       },
//       {
//         id: "following_02",
//         title: "Following 02",
//         imageSrc: "",
//       },
//       {
//         id: "following_03",
//         title: "Following 03",
//         imageSrc: "",
//       },
//       {
//         id: "following_04",
//         title: "Following 04",
//         imageSrc: "",
//       },
//     ],
//   },
// ];

const TOP_5_RECIPES = [
  "Tea-Smoked Creamy Chicken",
  "Pickled Savory Tortilla",
  "Stuffed Basil & Mint Salmon",
  "Strawberry Jelly",
  "Cinnamon and Lime Toffee",
];

export {
  RECIPE_SAMPLE,
  USER_SAMPLE,
  // USER_KITCHEN_SAMPLE,
  TOP_5_RECIPES,
};
