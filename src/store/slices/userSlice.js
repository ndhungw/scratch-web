import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: null,
  saved: null,
  following: null,
};

const userKitchenSlice = createSlice({
  name: "userKitchen",
  initialState,
  reducers: {
    createRecipe(state, action) {
      // add recipe to "recipes"
      console.log("createRecipe - action = ", action);
    },
    saveRecipe(state, action) {
      // save recipe from feed page
      console.log("saveRecipe - action = ", action);
    },
  },
});

// selector callbacks

export const userKitchenActions = userKitchenSlice.actions;

export default userKitchenSlice.reducer;
