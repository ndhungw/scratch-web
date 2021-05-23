import { COOKBOOK_IMAGE_SOURCE } from "../../defaultValues";
import { user_01, user_02, user_03 } from "./users";

const cookbook_01 = {
  id: "cookbook_01",
  idUser: user_01.id, // FK
  name: "Western",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: false, // created
};

const cookbook_02 = {
  id: "cook_book02",
  idUser: user_01.id, // FK
  name: "Italian",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: false, // created
};

const cookbook_03 = {
  id: "cookbook_03",
  idUser: user_01.id, // FK
  name: "Vietnamese",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: true, // saved
};

const cookbook_04 = {
  id: "cook_book04",
  idUser: user_01.id, // FK
  name: "Soups",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: true, // saved
};

// user_02

const cookbook_05 = {
  id: "cookbook_05",
  idUser: user_02.id, // FK
  name: "Chinese",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: false, // created
};

const cookbook_06 = {
  id: "cook_book06",
  idUser: user_02.id, // FK
  name: "Spicy",
  imageSrc: COOKBOOK_IMAGE_SOURCE,
  recipesCount: 0,
  isInSaved: false, // created
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
