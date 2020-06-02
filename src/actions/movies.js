import { FETCH_VIDEO, FETCH_RELATED_ITEMS, IS_LOADING } from "./actions";
import { API_KEY } from "../services/apiKey";
import themoviedbApi from "../services/themoviedbApi";
import history from "../history";

export const fetchVideo = (id) => async (dispatch) => {
  //fetches an array of movies that corresponds to the id
  const urlString = `/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const path = `/movie/${id}`;
  await themoviedbApi
    .get(urlString)
    .then((res) => {
      dispatch({ type: FETCH_VIDEO, payload: res.data });
      history.push(path);
    })
    .catch((err) => {
      const { status } = err.response;
      if (status >= 400 && status < 500) {
      }
    });
};

export const fetchRelatedItems = (previous_results, id, page) => async (
  dispatch
) => {
  //shows loading modal
  const urlString = `/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${page}`;
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
    })
    .catch((err) => {
      const { status } = err.response;
      if (status >= 400 && status < 500) {
      }
    });
};
