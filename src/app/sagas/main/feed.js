import { call, put } from "redux-saga/effects";
import { saveRecipe } from "../../../api";
import { feedsActions } from "../../../pages/main/Feed/feedsSlice";
import { databaseActions } from "../../databaseSlice";
import { userActions } from "../../userSlice";

export function* handleSaveRecipeFromFeedRequest(action) {
  console.log(
    "handleSaveRecipeFromFeedRequest - action.payload: ",
    action.payload
  );

  try {
    const { idFeed, idCookbook } = action.payload;
    console.log("idCookbook: ", idCookbook);

    // because of using fake api, this call is just to check ability to add this recipe in feed to cookbook
    const response = yield call(saveRecipe, idFeed, idCookbook);
    yield console.log("handleSaveRecipeFromFeedRequest: ");

    const { message, error, recipeToAdd, newCookbooks, newPair } = response;

    // update database slice: cannot know c
    yield put(databaseActions.setCookbookRecipe(newPair));
    yield put(databaseActions.setCookbooks(newCookbooks));
    yield put(feedsActions.saveRecipeSuccess({ message, error, recipeToAdd }));
    yield put(
      userActions.saveRecipeFromFeedSuccess({ idCookbook, recipeToAdd })
    );
  } catch (err) {
    console.log(err);
    yield put(feedsActions.saveRecipeFailure(err.message));
  }
}
