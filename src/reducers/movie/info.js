import {MOVIE_INFO} from "../../constants/store";

export const info  = (state = null, action) => {
  switch (action.type) {
    case MOVIE_INFO:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};