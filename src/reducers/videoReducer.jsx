import { FETCH_VIDEO } from "../actions/actions";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_VIDEO:
      return action.payload;
    default:
      return state;
  }
};
