import {
  cookbooks_table,
  cookbook_recipe_table,
  feeds_table,
  recipes_table,
  users_table,
} from "../constants/data/index";

const TIME_TO_WAIT = 500;

// export const getUsers = () => {
//   const promise = new Promise((resolve, reject) => {
//     if (users_table.length === 0) {
//       return setTimeout(
//         () => reject(new Error("Users not found")),
//         TIME_TO_WAIT
//       );
//     }
//     setTimeout(() => {
//       resolve(users_table);
//     }, TIME_TO_WAIT);
//   });

//   return promise;
// };

// export const getUserById = (id) => {
//   const found = users_table.filter((item) => item.id === id)[0];

//   const promise = new Promise((resolve, reject) => {
//     if (!found) {
//       return setTimeout(
//         () => reject(new Error("User not found")),
//         TIME_TO_WAIT
//       );
//     }
//     setTimeout(() => {
//       resolve(found);
//     }, TIME_TO_WAIT);
//   });

//   return promise;
// };

export const getUser = (username, password) => {
  const promise = new Promise((resolve, reject) => {
    if (!username || !password) {
      return setTimeout(() =>
        reject(new Error("Username or password can be empty!"))
      );
    }
    if (users_table.length === 0) {
      return setTimeout(() => reject(new Error("No user data")), TIME_TO_WAIT);
    }

    const user = users_table.find((user) => {
      if (user.username === username && user.password === password) {
        return user;
      }
    });

    setTimeout(() => {
      resolve(user);
    }, TIME_TO_WAIT);
  });

  return promise;
};

export const updateUser = (id, dataToUpdate) => {
  const found = users_table.filter((item) => item.id === id)[0];

  const promise = new Promise((resolve, reject) => {
    if (!found) {
      return setTimeout(
        () => reject(new Error("User not found")),
        TIME_TO_WAIT
      );
    }

    // validate dataToUpdate
    // ...

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

  return promise;
};

export const getFeeds = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(feeds_table);
    }, TIME_TO_WAIT);
  });

  return promise;
};

// const isExistedUser = (id) => {
//   const res = users_table.filter((user) => user.id === id)[0];
//   return Boolean(res);
// };

// export const getRecipesOfCookbook = (idCookbook) => {
//   const matchedPair = cookbook_recipe_table.filter((pair) => {
//     if (pair.idCookbook === idCookbook) {
//       return pair.idRecipe;
//     }
//   });

//   const recipeIdList = matchedPair.map((item) => item.idRecipe);

//   const foundRecipes = recipes_table.filter((recipe) => {
//     if (recipeIdList.includes(recipe.id)) {
//       return recipe;
//     }
//   });

//   return foundRecipes;
// };

export const getCookbooks = (idUser, isInSaved) => {
  const filteredCookbooks = cookbooks_table.filter(
    (book) => book.idUser === idUser && book.isInSaved === isInSaved
  );
  return filteredCookbooks;
};

// recipes (isInSaved=false) / saved (isInSaved=true)
export const getKitchenSector = (idUser, isInSaved) => {
  const promise = new Promise((resolve) => {
    const cookbooks = getCookbooks(idUser, isInSaved);
    const total = cookbooks.reduce(
      (acc, currentVal) => acc + currentVal.recipesCount,
      0
    );
    const sector = {
      name: isInSaved ? "saved" : "recipes",
      totalCount: total,
      cookbooks: cookbooks,
    };
    setTimeout(() => {
      resolve(sector);
    }, TIME_TO_WAIT);
  });

  return promise;
};

// eslint-disable-next-line no-unused-vars
export const getFollowingSector = (idUser) => {
  const promise = new Promise((resolve) => {
    // fake temp
    const ret = {
      name: "following",
      totalCount: 0,
    };

    setTimeout(() => {
      resolve(ret);
    }, TIME_TO_WAIT);
  });

  return promise;
};

export const getKitchenData = (idUser) => {
  const promise = new Promise((resolve) => {
    // recipes sector
    const cookbooksOfRecipesSector = getCookbooks(
      idUser,
      "recipes" === "saved"
    );
    const totalOfRecipesSector = cookbooksOfRecipesSector.reduce(
      (acc, currentVal) => acc + currentVal.recipesCount,
      0
    );
    const recipesSector = {
      name: "recipes",
      totalCount: totalOfRecipesSector,
      cookbooks: cookbooksOfRecipesSector,
    };

    // saved sector
    const cookbooksOfSavedSector = getCookbooks(idUser, "saved" === "saved");
    const totalOfSavedSector = cookbooksOfSavedSector.reduce(
      (acc, currentVal) => acc + currentVal.recipesCount,
      0
    );
    const savedSector = {
      name: "saved",
      totalCount: totalOfSavedSector,
      cookbooks: cookbooksOfSavedSector,
    };

    // following - no data return
    const followingSector = {
      name: "following",
      totalCount: 0,
    };

    // kitchen data
    const kitchenData = {
      recipes: recipesSector,
      saved: savedSector,
      following: followingSector,
    };

    setTimeout(() => {
      resolve(kitchenData);
    }, TIME_TO_WAIT);
  });
  return promise;
};

export const getRecipe = (idRecipe) => {
  const found = recipes_table.filter((recipe) => recipe.id === idRecipe)[0];
  return found;
};

export const isExistRecipe = (idRecipe, idCookbook) => {
  // check if the recipe exists in that cookbook
  const existedPair = cookbook_recipe_table.find(
    (pair) => pair.idRecipe === idRecipe && pair.idCookbook === idCookbook
  );

  if (existedPair) {
    return true;
  }
  return false;
};

// import store from "./../app/store";

// khong check duoc data ben databaseSlice cho truong hop du lieu bi trung
export const saveRecipe = (idFeed, idCookbook) => {
  console.log("API called savedRecipe - idFeed: ", idFeed);
  console.log("API called savedRecipe - idCookbook: ", idCookbook);

  const promise = new Promise((resolve, reject) => {
    const feedToSave = feeds_table.filter((feed) => feed.id === idFeed)[0];

    // lay state trong reducer thong qua store
    // const feedToSave = store.getState().database.feeds

    const recipeToAdd = getRecipe(feedToSave.idRecipe);

    if (!recipeToAdd) {
      return setTimeout(
        () =>
          reject(
            new Error("Recipe not found. Please reload to get newest data!")
          ),
        TIME_TO_WAIT
      );
    }

    const cookbookWillAddTo = cookbooks_table.find(
      (book) => book.id === idCookbook
    );

    const existedRecipe = cookbookWillAddTo.recipesList.find(
      (recipe) => recipe.id === recipeToAdd.id
    );

    if (existedRecipe) {
      return setTimeout(() =>
        reject(
          new Error(
            `This recipe was already saved in ${cookbookWillAddTo.name} book!`
          )
        )
      );
    }

    // add the recipe to specified cook book by idCookbook
    // cannot add here, just make data to attach to response
    // in order to put action in saga -> database slice will change :)
    const newCookbooks = cookbooks_table.map((book) => {
      if (book.id === idCookbook) {
        const newBook = {
          ...book,
          recipesCount: book.recipesCount + 1,
          recipesList: [...book.recipesList, recipeToAdd],
        };
        return newBook;
      }
      return book;
    });
    // cookbooks_table = [...newCookbooks];

    // cookbooks_table.map((book) => {
    //   if (book.id === idCookbook) {
    //     book.recipesList = [...book.recipesList, recipeToAdd];
    //   }
    // });

    // add new mapping record to cookbook_recipe_table
    // cannot add here, attach to response in order to put action in saga -> database slice will change :)
    const newPair = { idCookbook, idRecipe: recipeToAdd.id };

    // cookbook_recipe_table.push(newPair);

    // // prepare newCookbook = cookbook has id=idCookbook but has this recipe
    // const newCookbook = {
    //   ...cookbookWillAddTo,
    //   recipesList: [...cookbookWillAddTo.recipesList, recipeToAdd]
    // }

    setTimeout(() => {
      resolve({
        message: `Saved ${recipeToAdd.name} to ${cookbookWillAddTo.name}`,
        error: "",
        recipeToAdd: recipeToAdd,
        idCookbook: idCookbook,
        newPair,
        newCookbooks,
      });
    }, TIME_TO_WAIT);
  });

  return promise;
};
