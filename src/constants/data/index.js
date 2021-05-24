import {
  cookbook_01,
  cookbook_02,
  cookbook_03,
  cookbook_04,
  cookbook_05,
  cookbook_06,
} from "./sample/cookbooks";
import { recipe_01, recipe_02, recipe_03 } from "./sample/recipes";
import { user_01, user_02, user_03 } from "./sample/users";
import cookbook_recipe from "./sample/cookbook_recipe";
import { FEED_01, FEED_02, FEED_03 } from "./sample/feeds";

let users_table = [user_01, user_02, user_03];

// cookbooks TABLE
let cookbooks_table = [
  cookbook_01,
  cookbook_02,
  cookbook_03,
  cookbook_04,
  cookbook_05,
  cookbook_06,
];

// recipes TABLE
let recipes_table = [recipe_01, recipe_02, recipe_03];

// cookbook_recipe
let cookbook_recipe_table = cookbook_recipe;

// feeds TABLE
let feeds_table = [FEED_01, FEED_02, FEED_03];

export {
  users_table,
  cookbooks_table,
  recipes_table,
  cookbook_recipe_table,
  feeds_table,
};
