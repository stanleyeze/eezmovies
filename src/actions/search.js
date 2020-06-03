import { SEARCH_RESULT } from "./actions";
import { API_KEY } from "../services/apiKey";
import themoviedbApi from "../services/themoviedbApi";
import history from "../history";

import { isNotLoading, isLoading } from "./index";

export const fetchSearchResults = (
  previous_results,
  querry,
  page = 1
) => async (dispatch) => {
  //handle the search and load more
  //takes previous_results(or empty array),  querry term, and page as an argument
  const urlString = `/3/search/movie?api_key=${API_KEY}&query=${querry}&page=${page}&adult=true`;
  dispatch(isLoading());
  await themoviedbApi
    .get(urlString)
    .then((res) => {
      const new_results = [...res.data.results];
      const updatedResult = [...previous_results, ...new_results];
      res.data.results = updatedResult;
      res.data.page = page;
      dispatch({ type: SEARCH_RESULT, payload: res.data });
      dispatch(isNotLoading());
      history.push(`/search/${querry}/${page}`);
    })
    .catch((err) => {
      // toast.error("Unable to load search results");
      //dispatch(hideNoneFormLargeModal());
      console.log(err);
      dispatch(isNotLoading());
    });
};
