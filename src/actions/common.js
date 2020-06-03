import { IS_LOADING, IS_NOT_LOADING } from "./actions";

export const isLoading = () => {
  return { type: IS_LOADING };
};

export const isNotLoading = () => {
  return { type: IS_NOT_LOADING };
};
