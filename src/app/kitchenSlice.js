import { createSlice } from "@reduxjs/toolkit";
import { getCookbooks } from "../api";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const initialState = {
  recipes: null,
  saved: null,
  following: null,
};

const kitchenSlice = createSlice({
  name: "userKitchen",
  initialState,
  reducers: {
    // setter - for init fake data on login and clear data on logout
    setRecipesSector(state, action) {
      const cookbooks = getCookbooks(
        action.payload.idUser,
        "recipes" === "saved"
      );
      const total = cookbooks.reduce(
        (acc, currentVal) => acc + currentVal.recipesCount,
        0
      );
      console.log({ total });

      const recipesSector = {
        id: "recipes",
        totalCount: total,
        cookbooks,
      };

      state.recipes = recipesSector;
    },
    setSavedSector(state, action) {
      console.log("setSavedSector - action = ", action);
      const cookbooks = getCookbooks(
        action.payload.idUser,
        "saved" === "saved"
      );
      const total = cookbooks.reduce(
        (acc, currentVal) => acc + currentVal.recipesCount,
        0
      );
      console.log({ total });

      const savedSector = {
        id: "saved",
        totalCount: total,
        cookbooks,
      };

      state.saved = savedSector;
    },
    // add new item to a sector
    createNewRecipe(state, action) {
      // add recipe to "recipes"
      console.log("createRecipe - action = ", action);
    },
    saveRecipe(state, action) {
      // save recipe from feed page
      console.log("saveRecipe - action = ", action);
    },
  },
});

// selectors
export const getRecipesSector = (state) => state.kitchen.recipes;
export const getSavedSector = (state) => state.kitchen.saved;

export const kitchenActions = kitchenSlice.actions;

const kitchenReducer = kitchenSlice.reducer;

export default kitchenReducer;

// // redux-persist set up
// const persistConfig = {
//   key: "kitchen",
//   storage,
// };

// const kitchenPersistedReducer = persistReducer(
//   persistConfig,
//   kitchenSlice.reducer
// );
// export default kitchenPersistedReducer;
