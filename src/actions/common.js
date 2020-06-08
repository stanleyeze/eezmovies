import { IS_LOADING, IS_NOT_LOADING, MODAL_OPEN, MODAL_CLOSE } from "./actions";

export const isLoading = () => {
  return { type: IS_LOADING };
};

export const isNotLoading = () => {
  return { type: IS_NOT_LOADING };
};

export const loginModalOpen = () => (dispatch) => {
  //handles adding and removing favorite movies
  dispatch({ type: MODAL_OPEN });
};

export const loginModalClose = (open) => (dispatch) => {
  //handles adding and removing favorite movies
  dispatch({ type: MODAL_CLOSE });
};
