export type IngredientType = {
  id: string;
  content: string;
  idUser: string;
  avatarSrc?: string;
  className?: string;
  [key: string]: any;
};

export type DirectionType = {
  id: string;
  content: string;
};

export type RecipeType = {
  id: string;
  name: string; // title of feed
  imageSrcList: string[]; // imageSrcList of feed
  ingredients: IngredientType[];
  directions: DirectionType[];
  videoSrc: string;
  servingTime: number; // minutes
  nutritionFacts: string[];
  tags: string[];
};

export type CookbookType = {
  id: string;
  idUser: string; // FK
  name: string;
  imageSrc: string;
  recipesCount: number;
  isInSaved: boolean; // created
  recipesList: RecipeType[];
};

export type FeedType = {
  id: string;
  idUser: string;
  idRecipe: string;
  title: string;
  description: string; // only feed has this
  imageSrc: string;
  authorName: string;
  authorAvatarSrc: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  recipeData: RecipeType;
};

export type UserInfoType = {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  fullName: string;
  avatarSrc: string;
  bio: string;
  likesCount: number;
  followersCount: number;
  // not implemented yet
  publicSaved: boolean;
  publicFollowing: boolean;
  notifyAboutNewFollower: boolean;
};

export type KitchenSectorType = {
  name: string;
  totalCount: number;
  cookbooks: CookbookType[];
};
