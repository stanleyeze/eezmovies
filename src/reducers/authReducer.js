import { SIGN_UP, SESSION_INFO } from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    case SESSION_INFO:
      return action.payload;

    default:
      return state;
  }
};
