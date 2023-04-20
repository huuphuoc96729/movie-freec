import {BASIC_LOADING} from "../../constants/store";

export const loading = (state = false, action) => {
  switch (action.type) {
    case BASIC_LOADING:
      return action.payload;
    default:
      return state;
  }
};