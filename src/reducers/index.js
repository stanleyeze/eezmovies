import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchResultsReducer from "./searchResultsReducer";
import movieReducer from "./movieReducer";
import { reducer as formReducer } from "redux-form";
import videoReducer from "./videoReducer";
import loaderReducer from "./loaderReducer";
import favouriteReducer from "./favouriteReducer";

export default combineReducers({
  auth: "",
  login: authReducer,
  movies: movieReducer,
  video: videoReducer,
  form: formReducer,
  loader: loaderReducer,
  searchResult: searchResultsReducer,
  favouriteItem: favouriteReducer,
});
