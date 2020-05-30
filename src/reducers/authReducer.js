import { SIGN_UP, SIGN_OUT, SESSION_INFO } from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    case SESSION_INFO:
      return action.payload;
    case SIGN_OUT:
      return state;

    default:
      return state;
  }
};
