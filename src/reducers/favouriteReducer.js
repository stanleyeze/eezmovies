import { ADD_REMOVE_FAVOURITE } from "../actions/actions";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_REMOVE_FAVOURITE:
      const newstate = [...state];
      const favourite = newstate.filter(
        (fav) => fav.favourite.movie_id === action.payload.favourite.movie_id
      );
      if (Object.keys(favourite).length === 0) {
        return [...state, action.payload];
      } else {
        // console.log("was here", favourite);
        return state;
      }
    default:
      return state;
  }
};

// import {
//     ADD_TO_BOOKMARK,
//     FETCH_BOOKMARK,
//     DELETE_BOOKMARK
//   } from "../actions/actions";

//   export default (state = [], action) => {
//     switch (action.type) {
//       case ADD_TO_BOOKMARK:
//         console.log(state);
//         return [...state, action.payload];
//       case FETCH_BOOKMARK:
//         return [...action.payload];
//       case DELETE_BOOKMARK:
//         const newState = state.filter(movie => movie.id !== action.payload);
//         return newState;
//       default:
//         return state;
//     }
//   };
