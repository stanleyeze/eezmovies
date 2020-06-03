import { IS_NOT_LOADING, IS_LOADING } from "../actions/actions";

export default (state = {}, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, loading: true };
    case IS_NOT_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
