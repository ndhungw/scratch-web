import { COOKBOOK_IMAGE_SOURCE } from "../../defaultValues";
import { recipe_01, recipe_02, recipe_03 } from "./recipes";
import { user_01, user_02, user_03 } from "./users";

const cookbook_01 = {
  id: "cookbook_01",
  idUser: user_01.id, // FK
  name: "Western",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 3,
  isInSaved: false, // created
  recipesList: [recipe_01, recipe_02, recipe_03],
};

const cookbook_02 = {
  id: "cookbook_02",
  idUser: user_01.id, // FK
  name: "Italian",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 2,
  isInSaved: false, // created
  recipesList: [recipe_01, recipe_02],
};

const cookbook_03 = {
  id: "cookbook_03",
  idUser: user_01.id, // FK
  name: "Vietnamese",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 1,
  isInSaved: true, // saved
  recipesList: [recipe_01],
};

const cookbook_04 = {
  id: "cook_book04",
  idUser: user_01.id, // FK
  name: "Soups",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 2,
  isInSaved: true, // saved
  recipesList: [recipe_01, recipe_03],
};

// user_02

const cookbook_05 = {
  id: "cookbook_05",
  idUser: user_02.id, // FK
  name: "Chinese",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 2,
  isInSaved: false, // created
  recipesList: [recipe_01, recipe_02],
};

const cookbook_06 = {
  id: "cook_book06",
  idUser: user_02.id, // FK
  name: "Spicy",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 2,
  isInSaved: false, // created
  recipesList: [recipe_02, recipe_03],
};

const cookbook_07 = {
  id: "cookbook_07",
  idUser: user_03.id, // FK
  name: "Vietnamese",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: true, // saved
};

const cookbook_08 = {
  id: "cook_book08",
  idUser: user_03.id, // FK
  name: "Soups",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: true, // saved
};

export {
  // user_01
  cookbook_01,
  cookbook_02,
  cookbook_03,
  cookbook_04,
  // user_02
  cookbook_05,
  cookbook_06,
  // user_03
  cookbook_07,
  cookbook_08,
};
