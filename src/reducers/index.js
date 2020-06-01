import { combineReducers } from "redux";
import authReducer from "./authReducer";
import searchResultsReducer from "./searchResultsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: "",
  login: authReducer,
  form: formReducer,
  searchResult: searchResultsReducer,
});
