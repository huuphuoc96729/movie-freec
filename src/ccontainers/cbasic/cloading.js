import {connect} from "react-redux";
import Loading from "../../containers/basic/loading";

const mapStateToProps = (state) => {
  return {
    loading: state.basic.loading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: () => {}
  }
};

const CLoading = connect(mapStateToProps, mapDispatchToProps)(Loading);

export default CLoading;