import {connect} from "react-redux";
import movies from '../../containers/pages/movies'
import {movie_set_filter, movie_set_info, movie_set_list} from "../../actions/moive";
import {getData} from "../../constants/setting";
import {basic_set_loading} from "../../actions/basic";

let filter;

const mapStateToProps = (state) => {
  filter = state.movie.filter;

  return {
    list: state.movie.list,
    filter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: async (location) => {
      dispatch(movie_set_info());
      const {pathname, search} = location;
      if (!search) return;

      const params = new URLSearchParams(search);
      filter.page = params.get('page');
      filter.s = params.get('s');
      filter.search = params.get('s');
      filter.type = params.get('type');

      return await onLoad(dispatch, search.replace('?', ''), filter);
    },
    //Change page
    onChangePaging: async (page) => {
      filter.page = parseInt(page);
      const params = `s=${filter.s}&page=${filter.page}&type=${filter.type || ''}`;
      return await onLoad(dispatch, params, filter);
    },
    //Change type movie
    onChangeType: async (type) => {
      filter.page = 1;
      filter.type = type === 'all' ? '' : type;
      const params = `s=${filter.s}&page=${filter.page}&type=${filter.type}`;
      return await onLoad(dispatch, params, filter);
    },
  }
};

export const onLoad = async (dispatch, params, filter) => {
  dispatch(basic_set_loading(true));
  const result = await getData('&' + params);
  window.history.pushState('', '', '?' + params);

  if (result && result.Search) {
    filter.total_page = result.totalResults % 10 > 0 ? (Math.floor(result.totalResults / 10) + 1) : result.totalResults;
    filter.total = parseInt(result.totalResults);
    filter.existed = true;

    dispatch(movie_set_list(result.Search));
  }
  else {
    dispatch(movie_set_list([]));
    filter.total_page = 0;
    filter.total = 0;
  }

  dispatch(movie_set_filter(filter));

  setTimeout(() => {
    dispatch(basic_set_loading(false));
  }, 500);
}

const CMovies = connect(mapStateToProps, mapDispatchToProps)(movies);

export default CMovies;