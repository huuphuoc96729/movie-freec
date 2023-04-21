import {combineReducers} from "redux";
import basic from "./basic/index";
import movie from "./movie/index";

const reducer = combineReducers({
  basic,
  movie
});

export default reducer;
