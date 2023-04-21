import {MOVIE_FILTER} from "../../constants/store";

const state_default = {
  s: "",//Movie title to search for.
  i: "",//A valid IMDb ID (e.g. tt1285016)
  t: "",//Movie title to search for.
  type: "",//Type of result to return.=> movie, series, episode
  y: "",//Year of release.
  plot: "",//Return short or full plot. => short, full
  page: 1,//
  total_page: 0,
  total: 0,
  existed: false
}

export const filter = (state = state_default, action) => {
  switch (action.type) {
    case MOVIE_FILTER:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};