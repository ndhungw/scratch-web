import RecipeImg from "../assets/images/feed/Feed-RecipeImage.png";
import Avatar from "../assets/images/user/Face.png";
import Video from "../assets/images/kitchen/Video.png";
import BackgroundImage from "../assets/images/profile/bg-profile.png";
import CookBook from "../assets/images/kitchen/CookBookImg.png";
import RecipeImage from "../assets/images/kitchen/RecipeImage.png";
import InstructionVideo from "../assets/images/kitchen/howtoVideo.png";
const BACKGROUND_IMAGE_SOURCE = BackgroundImage;
const COOKBOOK_IMAGE_SOURCE = CookBook;
const RECIPE_ITEM_IMAGE_SOURCE = RecipeImage;

const RECIPE_TITLE = "Tofu Salad Ginger Garlic";
const RECIPE_DESCRIPTION =
  "I thought this salad was exceptionally delicious and healthy. I recommend pressing the entire tofu block for at least 20 minutes before to remove excess water in the ...";
const RECIPE_AUTHOR_NAME = "Nick Evans";
const RECIPE_IMAGE_SOURCE = RecipeImg;
const RECIPE_CREATED_AT = 15; // minutes
const RECIPE_LIKES_COUNT = 38;
const RECIPE_COMMENTS_COUNT = 8;

// User
const USER_ID = 1;
const USER_USERNAME = "hungnd73";
const USER_PASSWORD = "123456";
const USER_AVATAR_SOURCE = Avatar;
const USER_FULL_NAME = "Nguyen Dong Hung";
const USER_BIO = "Potato Master";
const USER_EMAIL = "ndh1379@gmail.com";
const USER_PHONE = "0987654321";
const USER_LIKES_COUNT = 456116;
const USER_FOLLOWERS_COUNT = 142;

//
const VIDEO_IMAGE_SOURCE = Video;
const INSTRUCTION_VIDEO_SOURCE = InstructionVideo;
// recipe
const NUTRITION_FACTS_SAMPLE = [
  "222 calories",
  "6.2 g flat",
  "7.2 g carbohydrates",
];

const SERVING_TIME_SAMPLE = 12;

const DIRECTIONS_SAMPLE = [
  "Heat a Belgian waffle iron",
  "Mix the flour, sugar, ...",
  "Lightly grease or spray the waffle iron with ...",
];

const TAGS_SAMPLE = ["Sweet", "Coconut", "Quick", "Easy"];

const FEED_CREATED_AT = "2h";
const FEED_LIKES_COUNT = 323;
const FEED_COMMENTS_COUNT = 68;
const FEED_DESCRIPTION = "Feed description very long paragraph";

export {
  RECIPE_TITLE,
  RECIPE_DESCRIPTION,
  RECIPE_AUTHOR_NAME,
  RECIPE_IMAGE_SOURCE,
  RECIPE_CREATED_AT,
  RECIPE_COMMENTS_COUNT,
  RECIPE_LIKES_COUNT,
  // USER
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
  // FEED PAGE
  VIDEO_IMAGE_SOURCE,
  // PROFILE PAGE
  BACKGROUND_IMAGE_SOURCE,
  COOKBOOK_IMAGE_SOURCE,
  RECIPE_ITEM_IMAGE_SOURCE,
  // ----
  // recipe
  NUTRITION_FACTS_SAMPLE,
  DIRECTIONS_SAMPLE,
  SERVING_TIME_SAMPLE,
  TAGS_SAMPLE,
  //
  FEED_CREATED_AT,
  FEED_DESCRIPTION,
  FEED_LIKES_COUNT,
  FEED_COMMENTS_COUNT,
  INSTRUCTION_VIDEO_SOURCE,
};
