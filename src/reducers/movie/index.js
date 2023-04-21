import {combineReducers} from "redux";
import {list} from "./list";
import {filter} from "./filter";

const movie = combineReducers({
  list,
  filter
});
export default movie;