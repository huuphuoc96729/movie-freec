import {combineReducers} from "redux";
import {list} from "./list";
import {filter} from "./filter";
import {info} from "./info";

const movie = combineReducers({
  list,
  filter,
  info
});
export default movie;