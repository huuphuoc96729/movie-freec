import {connect} from "react-redux";
import movie from '../../containers/pages/movie'
import {movie_set_info} from "../../actions/moive";
import {getData} from "../../constants/setting";
import {basic_set_loading} from "../../actions/basic";

let filter;

const mapStateToProps = (state) => {
  filter = state.movie.filter;

  return {
    info: state.movie.info
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: async ({imdbID}) => {
      dispatch(basic_set_loading(true));
      const result = await getData('&i=' + imdbID);

      if(result.imdbID) {
        dispatch(movie_set_info(result));
      } else {
        dispatch(movie_set_info());
      }
      setTimeout(() => {
        dispatch(basic_set_loading(false));
      }, 500);
    },
  }
};
const CMovie = connect(mapStateToProps, mapDispatchToProps)(movie);

export default CMovie;