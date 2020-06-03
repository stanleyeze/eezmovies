import {
  FETCH_VIDEO,
  FETCH_RELATED_ITEMS,
  FETCH_MOVIES,
} from "../actions/actions";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case FETCH_VIDEO:
      return action.payload;
    case FETCH_RELATED_ITEMS:
      return action.payload;
    default:
      return state;
  }
};
