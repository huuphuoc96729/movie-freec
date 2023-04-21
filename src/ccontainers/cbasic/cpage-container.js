import {connect} from "react-redux";
import PageContainer from "../../containers/basic/page-container";
import {movie_set_filter} from "../../actions/moive";
import {onLoad} from "../cpages/cmovies";

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
    onInit: () => {},
    onChangeSearch: async (search, pathname, history) => {
      filter.page = 1;
      filter.s = search;
      filter.type = '';
      const params = `s=${search}&page=${1}`;

      if (pathname !== '/') {
        history.push('/?' + params);
      } else {
        await onLoad(dispatch, params, filter);
      }
    },
    onChangeFilter: (search) => {
      filter.search = search;
      dispatch(movie_set_filter(filter));
    }
  }
};

const CPageContainer = connect(mapStateToProps, mapDispatchToProps)(PageContainer);

export default CPageContainer;