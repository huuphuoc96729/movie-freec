import {connect} from "react-redux";
import movies from '../../containers/pages/movies'

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {}
  }
};

const CMovies = connect(mapStateToProps, mapDispatchToProps)(movies);

export default CMovies;