import {
  cookbooks_table,
  cookbook_recipe_table,
  feeds_table,
  recipes_table,
} from "../constants/data/index";
import { users_table } from "../constants/data/index";
import cookbook_recipe from "../constants/data/sample/cookbook_recipe";

const TIME_TO_WAIT = 2000;

export const getUsers = () => {
  new Promise((resolve, reject) => {
    if (users_table.length === 0) {
      return setTimeout(
        () => reject(new Error("Users not found")),
        TIME_TO_WAIT
      );
    }
    setTimeout(() => {
      resolve(users_table);
    }, TIME_TO_WAIT);
  });
};

export const getUser = (id) => {
  const found = users_table.filter((item) => item.id === id)[0];

  // new Promise((resolve, reject) => {
  //   if (!found) {
  //     return setTimeout(
  //       () => reject(new Error("User not found")),
  //       TIME_TO_WAIT
  //     );
  //   }
  //   setTimeout(() => {
  //     resolve(found);
  //   }, TIME_TO_WAIT);
  // });

  return found;
};

export const updateUser = (id, dataToUpdate) => {
  const found = users_table.filter((item) => item.id === id)[0];

  new Promise((resolve, reject) => {
    if (!found) {
      return setTimeout(
        () => reject(new Error("User not found")),
        TIME_TO_WAIT
      );
    }

    //
    const userToUpdate = { ...found, ...dataToUpdate };

    users_table.map((item) => {
      if (item.id === id) {
        return userToUpdate;
      }
      return item;
    });

    setTimeout(() => {
      resolve({
        message: "Update user successfully",
        updatedUser: userToUpdate,
      });
    }, TIME_TO_WAIT);
  });
};

export const getUserKitchen = () => {};

export const getFeeds = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(feeds_table);
    }, TIME_TO_WAIT);
  });
};

const isExistedUser = (id) => {
  const res = users_table.filter((user) => user.id === id)[0];
  return Boolean(res);
};

export const getCookbooks = (idUser, isInSaved) => {
  const filteredCookbooks = cookbooks_table.filter(
    (book) => book.idUser === idUser && book.isInSaved === isInSaved
  );
  return filteredCookbooks;
};

export const getRecipesOfCookbook = (idCookbook) => {
  const matchedPair = cookbook_recipe_table.filter((pair) => {
    // console.log("pair", pair);
    if (pair.idCookbook === idCookbook) {
      return pair.idRecipe;
    }
  });

  const recipeIdList = matchedPair.map((item) => item.idRecipe);

  const foundRecipes = recipes_table.filter((recipe) => {
    if (recipeIdList.includes(recipe.id)) {
      return recipe;
    }
  });

  return foundRecipes;
};

// recipes (isInSaved=false) / saved (isInSaved=true)
export const getKitchenSector = (idUser, isInSaved) => {
  const cookbooks = getCookbooks(idUser, isInSaved);

  const total = cookbooks.reduce(
    (acc, currentVal) => acc + currentVal.recipesCount,
    0
  );

  const sector = {
    title: isInSaved ? "Saved" : "Recipes",
    totalCount: total,
    cookbooks: cookbooks,
  };

  return sector;
};
