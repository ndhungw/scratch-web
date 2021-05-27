import {
  call,
  put,
  // , select
} from "redux-saga/effects"; // select = selector
import { saveRecipe } from "../../../services/api";
import { feedsActions } from "../../slices/feed/feedSlice";
import { databaseActions } from "../../slices/databaseSlice";
import { userActions } from "../../../redux/slices/userSlice";

export function* handleSaveRecipeFromFeedRequest(action) {
  try {
    const { idFeed, idCookbook } = action.payload;

    // because of using fake api, this call is just to check ability to add this recipe in feed to cookbook
    const response = yield call(saveRecipe, idFeed, idCookbook);

    const {
      message,
      error,
      recipeToAdd,
      newCookbooks, // for DB
      // newPair
    } = response;

    if (!error) {
      yield put(databaseActions.setCookbooks(newCookbooks));
      yield put(
        feedsActions.saveRecipeSuccess({ message, error, recipeToAdd })
      );
      yield put(
        userActions.saveRecipeFromFeedSuccess({ idCookbook, recipeToAdd })
      );
    }
  } catch (err) {
    console.log(err);
    yield put(feedsActions.saveRecipeFailure(err.message));
  }
}
