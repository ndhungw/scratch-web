import {
  DIRECTIONS_SAMPLE,
  NUTRITION_FACTS_SAMPLE,
  RECIPE_ITEM_IMAGE_SOURCE,
  SERVING_TIME_SAMPLE,
  TAGS_SAMPLE,
} from "../../defaultValues";
import {
  ingredient_sample_01,
  ingredient_sample_02,
  ingredient_sample_03,
  ingredient_sample_04,
  ingredient_sample_05,
  ingredient_sample_06,
} from "./ingredients";

let recipe_01 = {
  id: "recipe_01",
  name: "Recipe item 01", // title of feed
  imageSrcList: [RECIPE_ITEM_IMAGE_SOURCE], // imageSrcList of feed
  ingredients: [
    ingredient_sample_01,
    ingredient_sample_02,
    ingredient_sample_03,
  ],
  directions: DIRECTIONS_SAMPLE,
  videoSrc: "",
  servingTime: SERVING_TIME_SAMPLE, // minutes
  nutritionFacts: NUTRITION_FACTS_SAMPLE,
  tags: TAGS_SAMPLE,
};

let recipe_02 = {
  id: "recipe_02",
  name: "Recipe item 02", // title of feed
  imageSrcList: [RECIPE_ITEM_IMAGE_SOURCE], // imageSrcList of feed
  ingredients: [
    ingredient_sample_02,
    ingredient_sample_03,
    ingredient_sample_04,
    ingredient_sample_05,
  ],
  directions: DIRECTIONS_SAMPLE,
  videoSrc: "",
  servingTime: SERVING_TIME_SAMPLE, // minutes
  nutritionFacts: NUTRITION_FACTS_SAMPLE,
  tags: TAGS_SAMPLE,
};

let recipe_03 = {
  id: "recipe_03",
  name: "Recipe item 03", // title of feed
  imageSrcList: [RECIPE_ITEM_IMAGE_SOURCE], // imageSrcList of feed
  ingredients: [ingredient_sample_05, ingredient_sample_06],
  directions: DIRECTIONS_SAMPLE,
  videoSrc: "",
  servingTime: SERVING_TIME_SAMPLE, // minutes
  nutritionFacts: NUTRITION_FACTS_SAMPLE,
  tags: TAGS_SAMPLE,
};
export { recipe_01, recipe_02, recipe_03 };
