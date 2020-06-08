import {
  IS_NOT_LOADING,
  IS_LOADING,
  MODAL_OPEN,
  MODAL_CLOSE,
} from "../actions/actions";

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case IS_LOADING:
      return { ...state, loading: true };
    case IS_NOT_LOADING:
      return { ...state, loading: false };
    case MODAL_OPEN:
      return { ...state, login_modal_open: true };
    case MODAL_CLOSE:
      return { ...state, login_modal_open: false };
    default:
      return state;
  }
};
