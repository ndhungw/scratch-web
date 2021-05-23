import {
  cookbook_01,
  cookbook_02,
  cookbook_03,
  cookbook_04,
  cookbook_05,
  cookbook_06,
} from "./cookbooks";
import { recipe_01, recipe_02, recipe_03 } from "./recipes";

// recipe_cookbook
const cookbook_recipe = [
  //cookbook_01
  {
    idCookbook: cookbook_01.id,
    idRecipe: recipe_01.id,
  },
  {
    idCookbook: cookbook_01.id,
    idRecipe: recipe_02.id,
  },
  {
    idCookbook: cookbook_01.id,
    idRecipe: recipe_03.id,
  },

  //cookbook_02
  {
    idCookbook: cookbook_02.id,
    idRecipe: recipe_01.id,
  },
  {
    idCookbook: cookbook_02.id,
    idRecipe: recipe_02.id,
  },

  // cookbook_03
  {
    idCookbook: cookbook_03.id,
    idRecipe: recipe_01.id,
  },
  // cookbook_04
  {
    idCookbook: cookbook_04.id,
    idRecipe: recipe_01.id,
  },
  {
    idCookbook: cookbook_04.id,
    idRecipe: recipe_02.id,
  },
  // cookbook_05
  {
    idCookbook: cookbook_05.id,
    idRecipe: recipe_01.id,
  },
  {
    idCookbook: cookbook_05.id,
    idRecipe: recipe_03.id,
  },
  // cookbook_06
  {
    idCookbook: cookbook_06.id,
    idRecipe: recipe_02.id,
  },
  {
    idCookbook: cookbook_06.id,
    idRecipe: recipe_03.id,
  },
];

export default cookbook_recipe;
