import { FETCH_VIDEO, FETCH_RELATED_ITEMS, FETCH_MOVIES } from "./actions";
import { API_KEY } from "../services/apiKey";
import themoviedbApi from "../services/themoviedbApi";
import history from "../history";

import { isNotLoading, isLoading } from "./index";

export const fetchAll = (
  //fetches all movies or tvshows
  //takes the array of an existing movie state and append next page for loading more movies
  //takes an empty array by default if it is the first of calling it
  previous_results = [],
  category = "popular",
  page = 1
) => async (dispatch) => {
  //set show modal to true, show show loading...
  dispatch(isLoading());
  const url = `/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;
  const path = `/movies/${category}`;
  console.log(category);
  await themoviedbApi
    .get(url)
    .then((res) => {
      const new_results = [...res.data.results];
      const updatedResult = [...previous_results, ...new_results];
      res.data.results = updatedResult;
      res.data.page = page;
      dispatch({ type: FETCH_MOVIES, payload: res.data });
      //set show modal to false, hide show loading...
      history.push(path);
      dispatch(isNotLoading());
    })
    .catch((err) => {
      dispatch(isNotLoading());
      // const { status } = err.response;
      // if (status >= 400 && status < 500) {
      // }
      console.log("error fetching!");
    });
};

export const fetchVideo = (id) => async (dispatch) => {
  //fetches an array of movies that corresponds to the id
  const urlString = `/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const path = `/movie/${id}`;
  dispatch(isLoading());
  await themoviedbApi
    .get(urlString)
    .then((res) => {
      dispatch({ type: FETCH_VIDEO, payload: res.data });
      history.push(path);
      dispatch(isNotLoading());
    })
    .catch((err) => {
      const { status } = err.response;
      if (status >= 400 && status < 500) {
        dispatch(isNotLoading());
      }
    });
};

export const fetchRelatedItems = (previous_results, id, page) => async (
  dispatch
) => {
  //shows loading modal
  const urlString = `/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${page}`;
  dispatch(isLoading());
  await themoviedbApi
    .get(urlString)
    .then((res) => {
      //destructure the data result
      const new_results = [...res.data.results];
      //update existing related movies record
      const updatedResult = [...previous_results, ...new_results];
      res.data.results = updatedResult;
      res.data.page = page;
      dispatch({ type: FETCH_RELATED_ITEMS, payload: res.data });
      dispatch(isNotLoading());
    })
    .catch((err) => {
      const { status } = err.response;
      if (status >= 400 && status < 500) {
        dispatch(isNotLoading());
      }
    });
};
