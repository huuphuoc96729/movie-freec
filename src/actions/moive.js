import {createAction} from "redux-actions";
import {MOVIE_LIST, MOVIE_FILTER, MOVIE_INFO} from "../constants/store";

export const movie_set_list = createAction(MOVIE_LIST);
export const movie_set_filter = createAction(MOVIE_FILTER);
export const movie_set_info = createAction(MOVIE_INFO);