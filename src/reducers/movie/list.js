import {MOVIE_LIST} from "../../constants/store";

export const list = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return  action.payload.map(a => Object.assign({},a));
    default:
      return state;
  }
};